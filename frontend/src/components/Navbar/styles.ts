import styled from 'styled-components'

export const Container = styled.div`
	height: 60px;
	display: flex;
`

export const Wrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

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
		justify-content: flex-end;
	}
`

export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`

export const Logo = styled.h1`
	font-weight: bold;
`

export const MenuItem = styled.div`
	font-size: 14px;
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
