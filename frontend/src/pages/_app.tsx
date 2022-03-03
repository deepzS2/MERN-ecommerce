import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import Topbar from '@components/Topbar'
import ContextsProviders from '@contexts/index'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')

		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	return (
		<ContextsProviders>
			<Topbar />
			<Component {...pageProps} />
		</ContextsProviders>
	)
}

export default MyApp
