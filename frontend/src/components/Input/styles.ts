import styled from 'styled-components'

interface ContainerProps {
	invalid?: boolean
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> div,
	input {
		width: 100%;
	}

	> div {
		position: relative;
	}

	svg {
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
`
