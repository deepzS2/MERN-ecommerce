import styled from 'styled-components'

export const Container = styled.article`
	flex: 1;
	height: calc(100vh - 50px);
	position: sticky;
	top: 50px;
	background-color: rgb(251, 251, 255);
`

export const Wrapper = styled.div`
	padding: 20px;
	color: ${({ theme }) => theme.colors.grey};
`

export const Menu = styled.div`
	margin-bottom: 10px;

	h3 {
		font-size: 13px;
		color: rgb(187, 186, 186);
	}

	ul {
		list-style: none;
		padding: 5px;
	}

	li {
		padding: 5px;
		cursor: pointer;

		display: flex;
		align-items: center;
		border-radius: 10px;

		&:hover,
		&.active {
			background-color: rgb(228, 228, 250);
		}

		svg {
			margin-right: 5px;
		}
	}
`
