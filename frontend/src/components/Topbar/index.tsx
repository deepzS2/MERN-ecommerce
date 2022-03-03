import Image from 'next/image'
import React from 'react'
import { MdNotificationsNone, MdSettings, MdLanguage } from 'react-icons/md'

import { Container, Logo, Wrapper, Icon } from './styles'

const Topbar: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<div className="left">
					<Logo>deepzadmin</Logo>
				</div>
				<div className="right">
					<Icon>
						<MdNotificationsNone size={24} />
						<div className="badge">2</div>
					</Icon>
					<Icon>
						<MdLanguage size={24} />
						<div className="badge">2</div>
					</Icon>
					<Icon>
						<MdSettings size={24} />
					</Icon>
					<div className="avatar">
						<Image
							layout="fill"
							alt="Avatar"
							src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						/>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Topbar
