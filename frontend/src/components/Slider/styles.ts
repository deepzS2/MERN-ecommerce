import styled from 'styled-components'

import { mobile } from '@styles/responsive'

interface ArrowProps {
	direction: 'left' | 'right'
}

interface WrapperProps {
	slideIndex: number
}

interface SlideProps {
	background?: string
}

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: ${({ theme }) => theme.colors.coral};

	display: flex;
	overflow: hidden;

	${mobile({ display: 'none' })}
`

export const Arrow = styled.div<ArrowProps>`
	width: 50px;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.white.secondOption};
	border-radius: 50%;
	cursor: pointer;
	opacity: 0.5;

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0;
	bottom: 0;
	left: ${({ direction }) => direction === 'left' && '10px'};
	right: ${({ direction }) => direction === 'right' && '10px'};
	margin: auto;
	z-index: 2;
`

export const Wrapper = styled.div<WrapperProps>`
	height: 100%;
	display: flex;
	transform: translateX(${({ slideIndex }) => -slideIndex * 100}vw);
	transition: all 1.5s ease;
`

export const Slide = styled.div<SlideProps>`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: ${({ background }) => background};

	.img-container,
	.info-container {
		flex: 1;
	}

	.img-container {
		height: 100%;
		position: relative;
	}

	.info-container {
		flex: 1.5;
		padding: 50px;

		h1,
		p,
		button {
			text-transform: uppercase;
		}

		h1 {
			font-size: 70px;
		}

		p {
			margin: 50px 0;
			font-size: 20px;
			font-weight: 500;
			letter-spacing: 3px;
		}

		button {
			padding: 10px;
			font-size: 20px;
			background-color: transparent;
			cursor: pointer;
		}
	}
`
