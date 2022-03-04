import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	borderRadius: '2rem',
	colors: {
		main: '#0070f3',
		secondary: '#eaeaea',
		tertiary: '#fafafa',
		white: '#ffffff',
		red: '#ff0000',
		grey: '#555555',
		green: '#00ff00',
		lightGreen: '#3bb077',
		lighterGrey: '#eeeef7',
		status: {
			background: {
				approved: '#e5faf2',
				declined: '#fff0f1',
				pending: '#ebf1fe',
			},
			color: {
				approved: '#3bb017',
				declined: '#d95087',
				pending: '#2a7ade',
			},
		},
	},
}

export default theme
