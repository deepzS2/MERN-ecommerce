import React from 'react'

import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Products from './Products'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Announcement />
			<Navbar />
			{children}
			<Products />
			<Newsletter />
			<Footer />
		</>
	)
}

export default Layout
