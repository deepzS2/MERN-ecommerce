import styled from 'styled-components'

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

export const Info = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;

	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.2);
	transition: all 0.5s ease;
	cursor: pointer;

	.icon {
		width: 40px;
		height: 40px;
		cursor: pointer;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.white.default};

		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
		transition: all 0.5s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors.lightBlue};
			transform: scale(1.1);
		}
	}
`

export const Product = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	position: relative;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.lighterBlue};

	&:hover ${Info} {
		opacity: 1;
	}

	.image {
		position: relative;
		width: 100%;
		height: 75%;
		z-index: 2;
	}

	.circle {
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.white};
	}
`
