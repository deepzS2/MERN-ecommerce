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

export interface NextPageWithLayout extends NextPage {
	getLayout?: (page: ReactElement) => JSX.Element
}
