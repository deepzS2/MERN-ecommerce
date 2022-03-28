import Image from 'next/image'
import React from 'react'
import {
	MdOutlineShoppingCart,
	MdOutlineSearch,
	MdOutlineFavoriteBorder,
} from 'react-icons/md'

import { popularProducts } from '@services/data'

import { Container, Info, Product } from './styles'

const Products: React.FC = () => {
	const iconSize = '50%'

	return (
		<Container>
			{popularProducts.map((item) => (
				<Product key={item.id}>
					<div className="circle" />
					<div className="image">
						<Image
							src={item.img}
							layout="fill"
							objectFit="contain"
							alt="Product"
						/>
					</div>
					<Info>
						<div className="icon">
							<MdOutlineShoppingCart size={iconSize} />
						</div>
						<div className="icon">
							<MdOutlineSearch size={iconSize} />
						</div>
						<div className="icon">
							<MdOutlineFavoriteBorder size={iconSize} />
						</div>
					</Info>
				</Product>
			))}
		</Container>
	)
}

export default Products
