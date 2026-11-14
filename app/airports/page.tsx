import type { Metadata } from 'next'
import { AirportsPageView } from '@/components/airports-page-view'

export const metadata: Metadata = {
  title: 'Airport Black Car Transfer Service — DCA, IAD, BWI, RIC, ORF & MTN | Skyline Worldwide',
  description:
    'Premier airport black car transfer service across all six commercial and private aviation hubs: DCA (Washington DC, Maryland, Virginia), IAD, BWI, RIC, ORF, and MTN. Real-time flight tracking and 24/7 human dispatch.',
  alternates: { canonical: '/airports' },
}

export default function AirportsPage() {
  return <AirportsPageView />
}
