import Image from 'next/image'
import React from 'react'
import { MdVisibility } from 'react-icons/md'

import { Button, Container, ImageContainer, User } from './styles'

const WidgetSm: React.FC = () => {
	return (
		<Container>
			<span>New Join Members</span>
			<ul>
				<li>
					<ImageContainer>
						<Image
							src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Widget"
							layout="fill"
							objectFit="cover"
						/>
					</ImageContainer>
					<User>
						<span className="username">Anna Keller</span>
						<span className="usertitle">Software Engineer</span>
					</User>
					<Button>
						<MdVisibility size={16} />
						Display
					</Button>
				</li>
			</ul>
		</Container>
	)
}

export default WidgetSm
