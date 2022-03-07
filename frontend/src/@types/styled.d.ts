import 'styled-components'
import theme from '@styles/theme'

declare module 'styled-components' {
	type MyTheme = typeof theme

	export type StatusKey = keyof MyTheme['colors']['status']['color']

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends MyTheme {}
}
