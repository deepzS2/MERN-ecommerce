import dynamic from 'next/dynamic'
import React from 'react'
import { Props as ChartProps } from 'react-apexcharts'

import { Container } from './styles'

const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

interface Props<T> {
	title: string
	data: T
	dataKey: keyof T
	grid?: boolean
}

function Chart<T>({ title, data, dataKey, grid }: Props<T>) {
	const config: ChartProps = {
		series: [
			{
				name: dataKey,
				data: data[dataKey],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				showForSingleSeries: true,
				labels: {
					useSeriesColors: true,
				},
			},
			stroke: {
				curve: 'smooth',
			},
			grid: !grid
				? { show: false }
				: {
						strokeDashArray: 5,
						borderColor: '#000',
						xaxis: { lines: { show: true } },
						row: {
							colors: ['#e0dfdf'], // takes an array which will be repeated on columns
							opacity: 0.5,
						},
						column: {
							colors: ['#e0dfdf'], // takes an array which will be repeated on columns
							opacity: 0.5,
						},
				  },
			xaxis: {
				axisBorder: {
					color: '#5550bd',
				},
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
			},
		},
	}

	return (
		<Container>
			<h3>{title}</h3>
			<ReactApexCharts type="line" width="100%" {...config} />
		</Container>
	)
}

export default Chart
