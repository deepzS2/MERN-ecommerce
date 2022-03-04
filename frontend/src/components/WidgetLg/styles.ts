import styled, { StatusKeys } from 'styled-components'

interface StatusButtonProps {
	statusType: string
}

export const Container = styled.div`
	flex: 2;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;

	h3 {
		font-size: 22px;
		font-weight: 600;
	}
`

export const ImageContainer = styled.div`
	position: relative;

	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 10px;
`

export const Table = styled.table`
	width: 100%;
	border-spacing: 20px;
`

export const TableHeaderRow = styled.tr`
	th {
		text-align: left;
	}
`

export const TableBodyRow = styled.tr`
	.user {
		display: flex;
		align-items: center;
		font-weight: 600;
	}

	.date {
		font-weight: 300;
	}

	.amount {
		font-weight: 300;
	}
`

export const StatusButton = styled.button<StatusButtonProps>`
	padding: 5px 7px;
	border: none;
	border-radius: 10px;

	color: ${({ statusType, theme }) =>
		theme.colors.status.color[statusType as keyof StatusKeys]};
	background-color: ${({ statusType, theme }) =>
		theme.colors.status.background[statusType as keyof StatusKeys]};
`
