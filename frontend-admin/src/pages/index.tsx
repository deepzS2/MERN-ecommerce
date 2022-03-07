import type { NextPage } from 'next'

import Chart from '@components/Chart'
import FeaturedInfo from '@components/FeaturedInfo'
import WidgetLg from '@components/WidgetLg'
import WidgetSm from '@components/WidgetSm'
import { homeChartData } from '@services/dummyData'
import { Container, Widgets } from '@styles/pages/Home'

const Home: NextPage = () => {
	return (
		<Container>
			<FeaturedInfo />
			<Chart
				title="User Analytics"
				data={homeChartData}
				dataKey="Active Users"
				grid
			/>
			<Widgets>
				<WidgetSm />
				<WidgetLg />
			</Widgets>
		</Container>
	)
}

export default Home
