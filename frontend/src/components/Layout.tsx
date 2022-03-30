import React from 'react'

import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Announcement />
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout
