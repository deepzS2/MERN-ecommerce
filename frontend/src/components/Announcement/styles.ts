import styled from 'styled-components'

export const Container = styled.div`
	height: 30px;
	background-color: ${({ theme }) => theme.colors.teal};
	color: ${({ theme }) => theme.colors.white.default};

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`
