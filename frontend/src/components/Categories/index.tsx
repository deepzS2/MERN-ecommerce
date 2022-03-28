import Image from 'next/image'
import React from 'react'

import { categories } from '@services/data'

import { Container, Item } from './styles'

const Categories: React.FC = () => {
	return (
		<Container>
			{categories.map((category) => (
				<Item key={category.id}>
					<div className="img-container">
						<Image
							src={category.img}
							alt={category.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="info-container">
						<h1>{category.title}</h1>
						<button>Show Now</button>
					</div>
				</Item>
			))}
		</Container>
	)
}

export default Categories
