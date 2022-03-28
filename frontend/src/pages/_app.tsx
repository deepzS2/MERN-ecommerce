import type { AppProps } from 'next/app'

import Announcement from '@components/Announcement'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Newsletter from '@components/Newsletter'
import Products from '@components/Products'
import ContextsProviders from '@contexts/index'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextsProviders>
			<Announcement />
			<Navbar />
			<Component {...pageProps} />
			<Products />
			<Newsletter />
			<Footer />
		</ContextsProviders>
	)
}

export default MyApp
