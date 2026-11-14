import type { Metadata } from 'next'
import { FleetPageView } from '@/components/fleet-page-view'

export const metadata: Metadata = {
  title: 'Our Luxury Fleet — Sedans, SUVs, Limousines & Sprinters | Skyline Worldwide',
  description:
    'Explore the Skyline Worldwide fleet: Mercedes-Benz S580, Cadillac Escalade, Hummer & Lincoln stretch limousines, Executive Sprinters and charter motor coaches in Washington DC.',
  alternates: { canonical: '/fleet' },
}

export default function FleetPage() {
  return <FleetPageView />
}
