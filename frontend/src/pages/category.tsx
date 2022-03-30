import Head from 'next/head'

import { NextPageWithLayout } from '@/@types/global'
import Layout from '@components/Layout'
import Newsletter from '@components/Newsletter'
import Products from '@components/Products'
import { Main, FiltersContainer, Title, Select } from '@styles/pages/Category'

const Category: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Frontend</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<Title>Dresses</Title>
				<FiltersContainer>
					<div className="filter">
						<span>Filter Products:</span>
						<Select>
							<option disabled selected>
								Color
							</option>
							<option>White</option>
							<option>Black</option>
							<option>Red</option>
							<option>Blue</option>
							<option>Yellow</option>
							<option>Green</option>
						</Select>
						<Select>
							<option disabled selected>
								Size
							</option>
							<option>XS</option>
							<option>S</option>
							<option>M</option>
							<option>L</option>
							<option>XL</option>
						</Select>
					</div>
					<div className="filter">
						<span>Sort Products:</span>
						<Select>
							<option selected>Newest</option>
							<option>Price (asc)</option>
							<option>Price (desc)</option>
						</Select>
					</div>
				</FiltersContainer>
				<Products />
				<Newsletter />
			</Main>
		</>
	)
}

Category.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default Category
