import styled from 'styled-components'

import { mobile } from '@styles/responsive'

import InputComponent from '../Input'

export const Container = styled.div`
	height: 60px;
	display: flex;
	${mobile({ height: '50px' })}
`

export const Wrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '10px 0' })}

	.left,
	.center,
	.right {
		flex: 1;
	}

	.left {
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.center {
		text-align: center;
	}

	.right {
		display: flex;
		align-items: center;
		gap: 25px;
		${mobile({ justifyContent: 'center', flex: 2 })}
		justify-content: flex-end;
	}
`

export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`

export const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: '24px' })}
`

export const MenuItem = styled.div`
	font-size: 14px;
	${mobile({ fontSize: '12px', marginLeft: '10px' })}
	cursor: pointer;
`

export const Badge = styled.div`
	position: relative;
	width: 20px;
	height: 20px;

	span {
		position: absolute;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.white.default};
		background-color: ${({ theme }) => theme.colors.blue};
		border-radius: 50%;
		font-size: 10px;
		padding: 1px 4px;
		top: -30%;
		right: -30%;
	}
`

export const Input = styled(InputComponent)`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;

	input {
		border: none;
		${mobile({ width: '50px' })}
	}
`
