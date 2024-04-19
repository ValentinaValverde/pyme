import Navbar from '@/components/Navbar'
import Hero from '../components/Hero'
import BusinessSection from '@/components/BusinessCardSection'
import Featured from '@/components/Featured'

import { getFeaturedStores } from '@/utils/actions/shopActions'

export default async function Home() {
	const featuredStores = await getFeaturedStores()
	return (
		<main className=''>
			<Navbar />
			<Hero />
			<Featured featuredStores={featuredStores} />
			<BusinessSection />
		</main>
	)
}
