import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import Layout from '@components/Layout'
import ContextsProviders from '@contexts/index'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')

		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	return (
		<ContextsProviders>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextsProviders>
	)
}

export default MyApp
