import Image from 'next/image'
import React from 'react'

import {
	Container,
	Table,
	TableHeaderRow,
	TableBodyRow,
	ImageContainer,
	StatusButton,
} from './styles'

const WidgetLg: React.FC = () => {
	return (
		<Container>
			<h3>Latest Transactions</h3>
			<Table>
				<TableHeaderRow>
					<th>Customer</th>
					<th>Date</th>
					<th>Amount</th>
					<th>Status</th>
				</TableHeaderRow>
				<TableBodyRow>
					<td className="user">
						<ImageContainer>
							<Image
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Widget"
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<span>Susan Karol</span>
					</td>
					<td className="date">3 Mar 2022</td>
					<td className="amount">$ 122.00</td>
					<td>
						<StatusButton statusType="approved">Approved</StatusButton>
					</td>
				</TableBodyRow>
				<TableBodyRow>
					<td className="user">
						<ImageContainer>
							<Image
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Widget"
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<span>Susan Karol</span>
					</td>
					<td className="date">3 Mar 2022</td>
					<td className="amount">$ 122.00</td>
					<td className="status">
						<StatusButton statusType="declined">Declined</StatusButton>
					</td>
				</TableBodyRow>
				<TableBodyRow>
					<td className="user">
						<ImageContainer>
							<Image
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Widget"
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<span>Susan Karol</span>
					</td>
					<td className="date">3 Mar 2022</td>
					<td className="amount">$ 122.00</td>
					<td className="status">
						<StatusButton statusType="pending">Pending</StatusButton>
					</td>
				</TableBodyRow>
			</Table>
		</Container>
	)
}

export default WidgetLg
