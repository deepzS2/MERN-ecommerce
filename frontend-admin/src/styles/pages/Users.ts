import { MdDeleteOutline } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.section``

export const TableUserColumn = styled.div`
	display: flex;
	align-items: center;

	.image-container {
		position: relative;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}
`

export const ActionButton = styled.button`
	border: none;
	border-radius: 10px;
	padding: 5px 10px;
	background: ${({ theme }) => theme.colors.lightGreen};
	color: white;
	cursor: pointer;
	margin-right: 20px;
`

export const DeleteButton = styled(MdDeleteOutline)`
	color: ${({ theme }) => theme.colors.red};
	cursor: pointer;
`
