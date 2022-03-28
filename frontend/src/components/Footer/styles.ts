import styled from 'styled-components'

interface SocialIconsProps {
	backgroundColor?: string
}

export const Container = styled.div`
	display: flex;
`

export const Left = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;

	.logo {
	}

	.description {
	}

	.social-container {
		display: flex;
		gap: 20px;
	}
`

export const SocialIcon = styled.div<SocialIconsProps>`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background-color: ${({ backgroundColor }) => backgroundColor};

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const Center = styled.div`
	flex: 1;
	padding: 20px;

	h3 {
		margin-bottom: 30px;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		display: flex;
		flex-wrap: wrap;

		li {
			width: 50%;
			margin-bottom: 10px;
			cursor: pointer;
		}
	}
`

export const Right = styled.div`
	flex: 1;
	padding: 20px;

	h3 {
	}

	.contact-item {
		svg {
			margin-right: 10px;
		}

		margin-bottom: 20px;

		display: flex;
		align-items: center;
	}

	.payment {
		width: 50%;
		position: relative;
		min-height: 26px;
	}
`
