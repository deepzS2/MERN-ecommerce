import 'styled-components'

declare module 'styled-components' {
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
		}
	}
}
