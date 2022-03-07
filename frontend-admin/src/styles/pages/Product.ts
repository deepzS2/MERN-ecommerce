import styled from 'styled-components'

interface ImageContainerProps {
	containerType?: 'upload'
}

export const Container = styled.section``

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		width: 80px;
		border: none;
		padding: 5px;
		background-color: ${({ theme }) => theme.colors.teal};
		color: ${({ theme }) => theme.colors.white};
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}
`

export const ProductContainer = styled.div`
	display: flex;
`

export const ProductChart = styled.div`
	flex: 1;
`

export const ProductInfo = styled.div`
	flex: 1;

	padding: 20px;
	margin: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	.top {
		display: flex;
		align-items: center;

		span {
			font-weight: 600;
		}
	}

	.bottom {
		margin-top: 10px;
	}
`

export const ProductInfoItem = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;

	.value {
		font-weight: 300;
	}
`

export const ProductUpdate = styled.div`
	padding: 20px;
	margin: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	form {
		display: flex;
		justify-content: space-between;

		.title {
			font-size: 24px;
			font-weight: 600;
		}

		.left {
			display: flex;
			flex-direction: column;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.upload {
			display: flex;
			align-items: center;

			label {
				cursor: pointer;
			}
		}

		button[type='submit'] {
			border-radius: 5px;
			border: none;
			padding: 5px;
			cursor: pointer;
			background-color: ${({ theme }) => theme.colors.darkBlue};
			color: ${({ theme }) => theme.colors.white};
			font-weight: 600;
		}
	}
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	label {
		margin-bottom: 5px;
		font-size: 14px;
		color: gray;
	}

	input {
		border: none;
		width: 250px;
		border-bottom: 1px solid gray;
		margin-bottom: 10px;
	}

	select {
		margin-bottom: 10px;
	}
`

export const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;

	width: ${({ containerType }) =>
		containerType === 'upload' ? '100px' : '40px'};
	height: ${({ containerType }) =>
		containerType === 'upload' ? '100px' : '40px'};
	border-radius: ${({ containerType }) =>
		containerType === 'upload' ? '10px' : '50%'};
	margin-right: 20px;
	overflow: hidden;
`
