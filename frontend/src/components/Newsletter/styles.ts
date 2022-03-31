import styled from 'styled-components'

import { mobile } from '@styles/responsive'

export const Container = styled.div`
	height: 60vh;
	background-color: ${({ theme }) => theme.colors.white.thirdOption};

	display: flex;
	align-items: center;
	justify-content: center;

	flex-direction: column;
	gap: 20px;
`

export const Title = styled.h1`
	font-size: 70px;
`

export const Description = styled.div`
	font-size: 24px;
	font-weight: 300;

	${mobile({ textAlign: 'center' })}
`

export const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.white.default};

	display: flex;
	justify-content: space-between;

	border: 1px solid ${({ theme }) => theme.colors.lightGray};

	${mobile({ width: '80%' })}

	.input-wrapper {
		flex: 8;

		input {
			padding-left: 20px;
			border: none !important;
			height: 100%;
		}
	}

	button {
		flex: 1;
		border: none;
		background-color: ${({ theme }) => theme.colors.teal};

		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}
`
