'use client'

import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Reduced-motion preference, but only AFTER mount. During SSR and the first
 * client paint it returns false so server and client render identical markup
 * (no hydration mismatch); it flips to the real preference once mounted.
 */
function useReduce() {
  const prefers = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? !!prefers : false
}

/** Cinematic hero parallax: the hero background drifts slower than the scroll. */
export function useHeroParallax() {
  const reduce = useReduce()
  useEffect(() => {
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)
    const els = Array.from(document.querySelectorAll<HTMLElement>('.hero-image, .inner-hero-image'))
    const tweens = els.map((el) =>
      gsap.to(el, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('.hero, .inner-hero') ?? el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }),
    )
    return () => tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill() })
  }, [reduce])
}

/** Scroll-triggered fade + rise. Wrap any block. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReduce()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Container that staggers its direct <StaggerItem> children into view. */
export function Stagger({
  children,
  className,
  gap = 0.1,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  gap?: number
  delay?: number
}) {
  const reduce = useReduce()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 30,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReduce()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Headline that reveals word-by-word, each rising from behind a mask. */
export function WordReveal({
  text,
  className,
  italic = false,
  delay = 0,
}: {
  text: string
  className?: string
  italic?: boolean
  delay?: number
}) {
  const reduce = useReduce()
  const words = text.split(' ')
  if (reduce) {
    return italic ? <em className={className}>{text}</em> : <span className={className}>{text}</span>
  }
  const Tag = italic ? motion.em : motion.span
  return (
    <Tag
      className={className}
      style={{ display: 'inline' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            paddingBottom: '0.12em',
            marginBottom: '-0.12em',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{ hidden: { y: '115%' }, show: { y: 0 } }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/** Count-up for the numeric part of a stat value; non-numeric values render as-is. */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReduce()
  const m = value.match(/^(\D*)(\d[\d,]*\.?\d*)(.*)$/)
  // Always start from the "0" display on both server and first client paint
  // (reduce is false until mount) so hydration matches.
  const [disp, setDisp] = useState(m ? `${m[1]}0${m[3]}` : value)

  useEffect(() => {
    if (!m) return
    if (reduce) {
      setDisp(value)
      return
    }
    if (!inView) return
    const target = parseFloat(m[2].replace(/,/g, ''))
    const decimals = (m[2].split('.')[1] || '').length
    const controls = animate(0, target, {
      duration: 1.3,
      ease: EASE,
      onUpdate: (v) => setDisp(`${m[1]}${v.toFixed(decimals)}${m[3]}`),
    })
    return () => controls.stop()
  }, [inView, reduce]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {disp}
    </span>
  )
}

/** True once the page has scrolled past `threshold` px. Drives the sticky-nav state. */
export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/**
 * Dynamically detects whether the navbar is currently overlapping a dark or light (beige) section
 * as the user scrolls through the alternating tile layout of the page.
 */
export function useNavbarTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const lightClassNames = [
      'experience-section',
      'closing-section',
      'services-section',
      'inner-content',
      'stat-strip',
      'faq-section',
      'inner-cta',
      'reservation-section',
      'legal-page',
    ]

    let ticking = false

    const checkOverlap = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 15)

      // Measure at the vertical center of the navbar (~45px from top)
      const testY = 45

      const candidates = document.querySelectorAll(
        'section, footer, .stat-strip, [data-theme]'
      )

      let detected: 'dark' | 'light' = 'dark'

      for (let i = 0; i < candidates.length; i++) {
        const el = candidates[i] as HTMLElement
        const rect = el.getBoundingClientRect()

        if (rect.top <= testY && rect.bottom > testY) {
          // Check class names
          const hasLightClass = lightClassNames.some((cls) =>
            el.classList.contains(cls)
          )

            if (el.getAttribute('data-theme') === 'dark' || el.classList.contains('dark-faq-section')) {
              detected = 'dark'
            } else if (hasLightClass || el.getAttribute('data-theme') === 'light') {
              detected = 'light'
            } else {
              // Perceived luminance fallback from computed background
              const bg = window.getComputedStyle(el).backgroundColor
              const rgb = bg.match(/\d+/g)
              if (rgb && rgb.length >= 3) {
                const r = parseInt(rgb[0], 10)
                const g = parseInt(rgb[1], 10)
                const b = parseInt(rgb[2], 10)
                const brightness = (r * 299 + g * 587 + b * 114) / 1000
                if (brightness > 125) {
                  detected = 'light'
                }
              }
            }
            break
          }
        }

        setTheme(detected)
        ticking = false
      }

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(checkOverlap)
          ticking = true
        }
      }

      checkOverlap()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }, [])

  return { theme, scrolled }
}
