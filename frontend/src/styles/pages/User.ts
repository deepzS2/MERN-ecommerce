import styled from 'styled-components'

interface ImageContainerProps {
	containerType?: 'upload'
}

export const Container = styled.section`
	padding: 20px;
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		width: 80px;
		border: none;
		padding: 5px;
		background-color: ${({ theme }) => theme.colors.teal};
		border-radius: 5px;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.white};
		font-size: 16px;
	}
`

export const UserContainer = styled.div`
	display: flex;
	margin-top: 20px;

	.update {
		flex: 1;
		padding: 20px;
		box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
		margin-left: 20px;
	}
`

export const UserShow = styled.div`
	flex: 1;
	padding: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	.top {
		display: flex;
		align-items: center;

		.user {
			display: flex;
			flex-direction: column;
			margin-left: 20px;

			.username {
				font-weight: 600;
			}

			.title {
				font-weight: 300;
			}
		}
	}

	.bottom {
		margin-top: 20px;

		.title {
			font-size: 14px;
			font-weight: 600;
			color: rgb(175, 170, 170);
		}

		.info {
			display: flex;
			align-items: center;
			margin: 20px 0;
			color: ${({ theme }) => theme.colors.darkGrey};

			.infoTitle {
				margin-left: 10px;
			}
		}
	}
`

export const UserUpdate = styled.div`
	flex: 2;
	padding: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	form {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;

		.title {
			font-size: 24px;
			font-weight: 600;
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

export const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;

	width: ${({ containerType }) =>
		containerType === 'upload' ? '100px' : '40px'};
	height: ${({ containerType }) =>
		containerType === 'upload' ? '100px' : '40px'};
	border-radius: ${({ containerType }) =>
		containerType === 'upload' ? '10px' : '50%'};
	overflow: hidden;
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	label {
		margin-bottom: 5px;
		font-size: 14px;
	}

	input {
		border: none;
		width: 250px;
		border-bottom: 1px solid gray;
	}
`
