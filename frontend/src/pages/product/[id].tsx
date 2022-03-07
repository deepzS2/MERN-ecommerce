import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdPublish } from 'react-icons/md'

import Chart from '@components/Chart'
import { productChartData } from '@services/dummyData'
import {
	Container,
	ProductContainer,
	ProductChart,
	ProductInfo,
	TitleContainer,
	ImageContainer,
	ProductInfoItem,
	ProductUpdate,
	FormItem,
} from '@styles/pages/Product'

const Product: NextPage = () => {
	const iconsSize = 16

	return (
		<Container>
			<TitleContainer>
				<h1>Product</h1>
				<Link href="/newProduct" passHref>
					<button>Create</button>
				</Link>
			</TitleContainer>
			<ProductContainer>
				<ProductChart>
					<Chart
						data={productChartData}
						dataKey="Sales"
						title="Sales Performance"
					/>
				</ProductChart>
				<ProductInfo>
					<div className="top">
						<ImageContainer>
							<Image
								src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Product image"
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<span>Apple Airpods</span>
					</div>
					<div className="bottom">
						<ProductInfoItem>
							<span className="key">id:</span>
							<span className="value">123</span>
						</ProductInfoItem>
						<ProductInfoItem>
							<span className="key">sales:</span>
							<span className="value">5123</span>
						</ProductInfoItem>
						<ProductInfoItem>
							<span className="key">active:</span>
							<span className="value">yes</span>
						</ProductInfoItem>
						<ProductInfoItem>
							<span className="key">in stock:</span>
							<span className="value">no</span>
						</ProductInfoItem>
					</div>
				</ProductInfo>
			</ProductContainer>
			<ProductUpdate>
				<form>
					<div className="left">
						<FormItem>
							<label htmlFor="name">Product Name</label>
							<input
								type="text"
								placeholder="Apple Airpod"
								name="name"
								id="name"
							/>
						</FormItem>
						<FormItem>
							<label htmlFor="inStock">In Stock</label>
							<select name="inStock" id="inStock">
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</FormItem>
						<FormItem>
							<label htmlFor="active">Active</label>
							<select name="active" id="active">
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</FormItem>
					</div>
					<div className="right">
						<div className="upload">
							<ImageContainer
								style={{ marginRight: '20px' }}
								containerType="upload"
							>
								<Image
									src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt="Product image"
									layout="fill"
									objectFit="cover"
								/>
							</ImageContainer>
							<label htmlFor="avatar">
								<MdPublish size={iconsSize * 1.5} />
							</label>
							<input
								style={{ display: 'none' }}
								type="file"
								name="avatar"
								id="avatar"
							/>
						</div>
						<button type="submit">Update</button>
					</div>
				</form>
			</ProductUpdate>
		</Container>
	)
}

export default Product
