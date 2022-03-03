import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.white};
	position: sticky;
	top: 0;
	z-index: 999;
`

export const Wrapper = styled.div`
	height: 100%;
	padding: 0 20px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.right {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		.avatar {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
	}
`

export const Logo = styled.span`
	font-weight: bold;
	font-size: 30px;
	color: darkblue;
	cursor: pointer;
`

export const Icon = styled.div`
	position: relative;

	.badge {
		position: absolute;
		top: -5px;
		right: 5px;
		background-color: ${({ theme }) => theme.colors.red};
		color: ${({ theme }) => theme.colors.white};
		border-radius: 50%;
		width: 15px;
		height: 15px;
		font-size: 10px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`
