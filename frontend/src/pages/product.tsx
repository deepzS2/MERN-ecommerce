import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MdAdd, MdRemove } from 'react-icons/md'

import {
	Main,
	ImageContainer,
	InfoContainer,
	Filter,
	FilterColor,
	AmountContainer,
} from '@styles/pages/Product'

const Product: NextPage = () => {
	return (
		<>
			<Head>
				<title>Frontend</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<ImageContainer>
					<Image
						src="/products/jean.png"
						layout="fill"
						objectFit="cover"
						alt=""
					/>
				</ImageContainer>
				<InfoContainer>
					<h1>Denim Jumpsuit</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
						tenetur eos quae aut corrupti aspernatur nisi esse, ipsa molestiae
						quidem, repellat ab accusantium? Nisi vel natus magnam nesciunt
						rerum sapiente. Doloremque aspernatur corrupti ipsa optio ullam sit,
						reprehenderit quam. Odio laborum quasi quae incidunt soluta
						consectetur distinctio, eaque obcaecati quisquam quis animi tempora,
						assumenda consequatur dolores necessitatibus ullam culpa fuga.
					</p>
					<span>$ 20</span>
					<div className="filters">
						<Filter type="color">
							<span className="title">Color</span>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter type="size">
							<span className="title">Size</span>
							<select>
								<option>XS</option>
								<option>S</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
							</select>
						</Filter>
					</div>
					<div className="add-amount">
						<AmountContainer>
							<MdAdd />
							<span>1</span>
							<MdRemove />
						</AmountContainer>
						<button>Add to cart</button>
					</div>
				</InfoContainer>
			</Main>
		</>
	)
}

export default Product
