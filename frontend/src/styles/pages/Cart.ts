import styled from 'styled-components'

import { mobile } from '../responsive'

interface TopButtonProps {
	filled?: boolean
}

interface SummaryItemProps {
	total?: boolean
}

export const Main = styled.main``

export const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: '10px' })}

	h1 {
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;

		.texts {
			${mobile({ display: 'none' })}

			span {
				text-decoration: underline;
				cursor: pointer;
				margin: 0 10px;
			}
		}
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		${mobile({ flexDirection: 'column' })}

		.info {
			flex: 3;
		}

		.summary {
			flex: 1;
			border: 0.5px solid lightgray;
			border-radius: 10px;
			padding: 20px;
			height: 50vh;

			h1 {
				text-transform: uppercase;
				font-weight: 200;
			}
		}
	}
`

export const TopButton = styled.button<TopButtonProps>`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	text-transform: uppercase;
	border: ${({ filled }) => filled && 'none'};
	background-color: ${({ filled, theme }) =>
		filled ? theme.colors.black : 'transparent'};
	color: ${({ filled, theme }) => filled && theme.colors.white.default};
`

export const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`

export const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}

	.product-detail {
		flex: 2;
		display: flex;
	}

	.price-detail {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

export const ImageContainer = styled.div`
	width: 200px;
	position: relative;
`

export const ProductDetails = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	.color {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ color }) => color};
	}
`

export const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;

	div {
		font-size: 24px;
		margin: 5px;
		${mobile({ margin: '5px 15px' })}
	}
`

export const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`

export const SummaryItem = styled.div<SummaryItemProps>`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${({ total }) => total && '500'};
	font-size: ${({ total }) => total && '24px'};
`

export const Button = styled.button`
	text-transform: uppercase;
	width: 100%;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.black};
	color: white;
	font-weight: 600;
`
