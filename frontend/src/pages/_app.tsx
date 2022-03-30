import type { AppProps } from 'next/app'

import { NextPageWithLayout } from '@/@types/global'
import ContextsProviders from '@contexts/index'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<ContextsProviders>
			{getLayout(<Component {...pageProps} />)}
		</ContextsProviders>
	)
}

export default MyApp
