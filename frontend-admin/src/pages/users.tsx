import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

import { usersTableData } from '@services/dummyData'
import {
	Container,
	TableUserColumn,
	ActionButton,
	DeleteButton,
} from '@styles/pages/Users'

const Users: NextPage = () => {
	const [data, setData] = useState(usersTableData)

	const handleDeleteClick = (id: number) => {
		setData(data.filter((value) => value.id !== id))
	}

	const columns: TableColumn<IUsersTableData>[] = [
		{
			name: 'ID',
			selector: (row) => row.id,
			width: '90',
		},
		{
			name: 'Username',
			cell: (row) => {
				return (
					<TableUserColumn>
						<div className="image-container">
							<Image
								objectFit="cover"
								src={row.avatar}
								alt="Avatar"
								layout="fill"
							/>
						</div>
						{row.username}
					</TableUserColumn>
				)
			},
			width: '130',
		},
		{
			name: 'Email',
			selector: (row) => row.email,
			width: '130',
		},
		{
			name: 'Status',
			selector: (row) => row.status,
			width: '120',
		},
		{
			name: 'Transaction Volume',
			selector: (row) => row.transaction,
			width: '160',
		},
		{
			name: 'Action',
			cell: (row) => (
				<>
					<Link href={`/users/${row.id}`} passHref>
						<ActionButton>Edit</ActionButton>
					</Link>
					<DeleteButton size={20} onClick={() => handleDeleteClick(row.id)} />
				</>
			),
		},
	]

	return (
		<Container>
			<DataTable
				data={data}
				columns={columns}
				pagination
				paginationPerPage={8}
				paginationRowsPerPageOptions={[8, 16, 24, 32, 40]}
				selectableRows
			/>
		</Container>
	)
}

export default Users
