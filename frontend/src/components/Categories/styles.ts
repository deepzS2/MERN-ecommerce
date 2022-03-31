import styled from 'styled-components'

import { mobile } from '@styles/responsive'

export const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;

	${mobile({ padding: '0px', flexDirection: 'column', minHeight: '100vh' })}
`

export const Item = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;

	${mobile({ height: '30vh' })}

	.img-container {
		width: 100%;
		height: 100%;
	}

	.info-container {
		position: absolute;
		width: 100%;
		height: 100%;

		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;

		h1,
		button {
			text-transform: uppercase;
		}

		h1 {
			color: ${({ theme }) => theme.colors.white.default};
		}

		button {
			border: none;
			padding: 10px;
			background-color: ${({ theme }) => theme.colors.white};
			color: ${({ theme }) => theme.colors.gray};
			cursor: pointer;
			font-weight: 600;
		}
	}
`
