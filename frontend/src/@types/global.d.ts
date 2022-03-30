import 'little-state-machine'
import { NextPage } from 'next'
import { ReactElement } from 'react'

declare module 'little-state-machine' {
	interface GlobalState {
		loginForm: {
			username: string
			password: string
		}
	}
}

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => JSX.Element
}
