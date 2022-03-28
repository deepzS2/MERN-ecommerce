import type { NextPage } from 'next'
import Head from 'next/head'

import Categories from '@components/Categories'
import Slider from '@components/Slider'
import { Main } from '@styles/pages/Home'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Frontend</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<Slider />
				<Categories />
			</Main>
		</>
	)
}

export default Home
