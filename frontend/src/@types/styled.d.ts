import 'styled-components'

declare module 'styled-components' {
	export interface StatusKeys {
		pending: string
		approved: string
		declined: string
	}

	export interface DefaultTheme {
		borderRadius: string

		colors: {
			main: string
			secondary: string
			tertiary: string
			white: string
			red: string
			grey: string
			green: string
			lightGreen: string
			lighterGrey: string

			status: {
				background: StatusKeys
				color: StatusKeys
			}
		}
	}
}
