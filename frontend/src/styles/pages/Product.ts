import styled, { css } from 'styled-components'

import { mobile } from '../responsive'

interface FilterProps {
	type: 'color' | 'size'
}

interface FilterColorProps {
	color: string
}

export const Main = styled.main`
	padding: 50px;
	display: flex;
	${mobile({ padding: '10px', flexDirection: 'column' })}
`

export const ImageContainer = styled.div`
	flex: 1;
	position: relative;
	height: 90vh;
	${mobile({ height: '40vh', minHeight: '40vh', maxHeight: '40vh' })}
`

export const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	${mobile({ padding: '10px' })}

	h1 {
		font-weight: 200;
	}

	p {
		margin: 20px 0;
	}

	> span {
		font-weight: 100;
		font-size: 40px;
	}

	.filters {
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin: 30px 0;
		${mobile({ width: '100%' })}
	}

	.add-amount {
		display: flex;
		align-items: center;
		width: 50%;
		justify-content: space-between;
		${mobile({ width: '100%' })}

		button {
			text-transform: uppercase;
			padding: 15px;
			border: 2px solid ${({ theme }) => theme.colors.teal};
			background-color: ${({ theme }) => theme.colors.white};
			cursor: pointer;
			font-weight: 500;

			&:hover {
				background-color: #f8f4f4;
			}
		}
	}
`

export const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;

	span {
		width: 30px;
		height: 30px;
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.colors.teal};

		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 5px;
	}
`

export const Filter = styled.div<FilterProps>`
	display: flex;
	align-items: center;

	.title {
		font-size: 20px;
		font-weight: 200;
	}

	${({ type }) =>
		type === 'size' &&
		css`
			select {
				margin-left: 10px;
				padding: 5px;
			}
		`}
`

export const FilterColor = styled.div<FilterColorProps>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ color }) => color};
	margin: 0 5px;
	cursor: pointer;
`
