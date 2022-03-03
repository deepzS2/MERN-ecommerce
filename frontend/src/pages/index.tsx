import type { NextPage } from 'next'

import Chart from '@components/Chart'
import FeaturedInfo from '@components/FeaturedInfo'
import dummyData from '@services/dummyData'
import { Container } from '@styles/pages/Home'

const Home: NextPage = () => {
	return (
		<Container>
			<FeaturedInfo />
			<Chart
				title="User Analytics"
				data={dummyData}
				dataKey="Active Users"
				grid
			/>
		</Container>
	)
}

export default Home
