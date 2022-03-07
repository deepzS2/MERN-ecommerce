import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

import { productsTableData } from '@services/dummyData'
import {
	ActionButton,
	Container,
	DeleteButton,
	TableProductColumn,
} from '@styles/pages/Products'

const Products: NextPage = () => {
	const [data, setData] = useState(productsTableData)

	const handleDeleteClick = (id: number) => {
		setData(data.filter((value) => value.id !== id))
		console.log(data)
	}

	const columns: TableColumn<IProductsTableData>[] = [
		{
			name: 'ID',
			selector: (row) => row.id,
			width: '90',
		},
		{
			name: 'Product',
			cell: (row) => {
				return (
					<TableProductColumn>
						<div className="image-container">
							<Image
								objectFit="cover"
								src={row.image}
								alt="Product image"
								layout="fill"
							/>
						</div>
						{row.name}
					</TableProductColumn>
				)
			},
			width: '130',
		},
		{
			name: 'Stock',
			selector: (row) => row.stock,
			width: '130',
		},
		{
			name: 'Status',
			selector: (row) => row.status,
			width: '120',
		},
		{
			name: 'Price',
			selector: (row) => row.price,
			width: '160',
		},
		{
			name: 'Action',
			cell: (row) => (
				<>
					<Link href={`/product/${row.id}`} passHref>
						<ActionButton>Edit</ActionButton>
					</Link>
					<DeleteButton size={20} onClick={() => handleDeleteClick(row.id)} />
				</>
			),
		},
	]

	return (
		<Container>
			<h1>Products</h1>
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

export default Products
