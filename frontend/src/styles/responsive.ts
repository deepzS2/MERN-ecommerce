import { css, CSSObject } from 'styled-components'

export const mobile = (props: TemplateStringsArray | CSSObject) => {
	return css`
		@media screen and (max-width: 380px) {
			${props}
		}
	`
}
