import Link from 'next/link'
import React from 'react'
import {
	MdLineStyle,
	MdTimeline,
	MdTrendingUp,
	MdPermIdentity,
	MdStorefront,
	MdBarChart,
	MdMailOutline,
	MdDynamicFeed,
	MdAttachMoney,
	MdChatBubbleOutline,
	MdWorkOutline,
	MdReport,
} from 'react-icons/md'

import { Container, Menu, Wrapper } from './styles'

const Sidebar: React.FC = () => {
	const iconsSize = 20

	return (
		<Container>
			<Wrapper>
				<Menu>
					<h3>Dashboard</h3>
					<ul>
						<li>
							<MdLineStyle size={iconsSize} />
							Home
						</li>
						<li>
							<MdTimeline size={iconsSize} />
							Analytics
						</li>
						<li>
							<MdTrendingUp size={iconsSize} />
							Sales
						</li>
					</ul>
				</Menu>
				<Menu>
					<h3>Quick Menu</h3>
					<ul>
						<Link href="/users" passHref>
							<li>
								<MdPermIdentity size={iconsSize} />
								Users
							</li>
						</Link>
						<Link href="/products" passHref>
							<li>
								<MdStorefront size={iconsSize} />
								Products
							</li>
						</Link>
						<li>
							<MdAttachMoney size={iconsSize} />
							Transaction
						</li>
						<li>
							<MdBarChart size={iconsSize} />
							Reports
						</li>
					</ul>
				</Menu>
				<Menu>
					<h3>Notifications</h3>
					<ul>
						<li>
							<MdMailOutline size={iconsSize} />
							Mail
						</li>
						<li>
							<MdDynamicFeed size={iconsSize} />
							Feedback
						</li>
						<li>
							<MdChatBubbleOutline size={iconsSize} />
							Messages
						</li>
					</ul>
				</Menu>
				<Menu>
					<h3>Staff</h3>
					<ul>
						<li>
							<MdWorkOutline size={iconsSize} />
							Manage
						</li>
						<li>
							<MdTimeline size={iconsSize} />
							Analytics
						</li>
						<li>
							<MdReport size={iconsSize} />
							Reports
						</li>
					</ul>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Sidebar
