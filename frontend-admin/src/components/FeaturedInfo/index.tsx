import React from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'

import { Container, Item, MoneyContainer } from './styles'

const FeaturedInfo: React.FC = () => {
	const iconsSize = 14

	return (
		<Container>
			<Item>
				<span className="title">Revenue</span>
				<MoneyContainer>
					<span className="value">$2,415</span>
					<span className="rate">
						-11.4 <MdArrowDownward className="negative" size={iconsSize} />
					</span>
				</MoneyContainer>
				<span className="sub">Compared to last month</span>
			</Item>
			<Item>
				<span className="title">Sales</span>
				<MoneyContainer>
					<span className="value">$4,415</span>
					<span className="rate">
						-1.4 <MdArrowDownward className="negative" size={iconsSize} />
					</span>
				</MoneyContainer>
				<span className="sub">Compared to last month</span>
			</Item>
			<Item>
				<span className="title">Cost</span>
				<MoneyContainer>
					<span className="value">$2,225</span>
					<span className="rate">
						+2.4 <MdArrowUpward size={iconsSize} />
					</span>
				</MoneyContainer>
				<span className="sub">Compared to last month</span>
			</Item>
		</Container>
	)
}

export default FeaturedInfo
