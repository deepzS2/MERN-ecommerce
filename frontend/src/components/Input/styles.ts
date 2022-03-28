import styled from 'styled-components'

interface ContainerProps {
	invalid?: boolean
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	label {
		font-weight: 500;
		font-size: 1.1em;
		color: #000;
	}

	> div,
	input {
		width: 100%;
	}

	> div {
		position: relative;
	}

	input {
		padding: 5px;
		border: 0.5px solid
			${({ invalid, theme }) => (invalid ? '#f00' : theme.colors.lightGray)};
		border-radius: 5px;

		&::placeholder {
			color: darkgray;
			font-weight: 400;
		}
	}

	svg {
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
`
