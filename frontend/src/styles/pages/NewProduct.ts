import styled from 'styled-components'

export const Container = styled.section`
	form {
		display: flex;
		flex-direction: column;

		button[type='submit'] {
			width: 100px;
			border: none;
			background-color: ${({ theme }) => theme.colors.darkBlue};
			color: ${({ theme }) => theme.colors.white};
			padding: 7px 10px;
			font-weight: 600;
			border-radius: 10px;
			margin-top: 30px;
			cursor: pointer;
		}
	}
`

export const FormItem = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-right: 20px;

	label {
		margin-bottom: 20px;
		font-size: 14px;
		font-weight: 600;
		color: rgb(151, 150, 150);
	}

	input {
		padding: 10px;
		border: 1px solid gray;
		border-radius: 5px;
	}

	select {
		height: 40px;
		border-radius: 5px;
	}

	.gender {
		label {
			margin: 10px;
			font-size: 18px;
			color: ${({ theme }) => theme.colors.grey};
		}

		input {
			margin-top: 15px;
		}
	}
`
