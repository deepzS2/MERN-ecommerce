import styled from 'styled-components'

import InputComponent from '@components/Input'

import { mobile } from '../responsive'

export const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: ${({ theme }) => theme.colors.white.default};
	${mobile({ width: '75%' })}

	h1 {
		font-size: 24px;
		font-weight: 300;
		text-transform: uppercase;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
`

export const Input = styled(InputComponent)`
	flex: 1;
	min-width: 40%;
	margin-top: 20px;

	input {
		padding: 10px;
	}
`

export const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
`

export const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: ${({ theme }) => theme.colors.teal};
	color: white;
	cursor: pointer;
	text-transform: uppercase;
`
