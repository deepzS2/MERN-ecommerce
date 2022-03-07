import styled from 'styled-components'

export const Container = styled.div`
	flex: 1;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;
	margin-right: 20px;

	> span {
		font-size: 22px;
		font-weight: 600;
	}

	> ul {
		list-style: none;

		> li {
			display: flex;
			align-items: center;

			gap: 1rem;

			margin: 20px 0;
		}
	}
`

export const ImageContainer = styled.div`
	position: relative;

	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
`

export const User = styled.div`
	display: flex;
	flex-direction: column;

	.username {
		font-weight: 600;
	}

	.usertitle {
		font-weight: 300;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	border-radius: 10px;
	border: none;
	padding: 7px 10px;
	background: ${({ theme }) => theme.colors.lighterGrey};
	color: ${({ theme }) => theme.colors.grey};
	cursor: pointer;

	svg {
		margin-right: 5px;
	}
`
