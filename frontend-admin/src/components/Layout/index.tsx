import React from 'react'

import Sidebar from '@components/Sidebar'
import Topbar from '@components/Topbar'

import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Topbar />
			<Container>
				<Sidebar />
				{children}
			</Container>
		</>
	)
}

export default Layout
