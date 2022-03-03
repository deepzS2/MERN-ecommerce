import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const Item = styled.div`
	flex: 1;
	margin: 0 20px;
	padding: 30px;
	border-radius: 10px;
	cursor: pointer;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	.title {
		font-size: 20px;
	}

	.sub {
		font-size: 15px;
		color: ${({ theme }) => theme.colors.grey};
	}
`

export const MoneyContainer = styled.div`
	margin: 10px 0;
	display: flex;
	align-items: center;

	.value {
		font-size: 30px;
		font-weight: 600;
	}

	.rate {
		display: flex;
		align-items: center;
		margin-left: 20px;
	}

	svg {
		color: ${({ theme }) => theme.colors.green};

		&.negative {
			color: ${({ theme }) => theme.colors.red};
		}
	}
`
