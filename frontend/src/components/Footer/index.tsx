import Image from 'next/image'
import React from 'react'
import { IoLogoInstagram, IoLogoTwitter, IoLogoPinterest } from 'react-icons/io'
import { MdFacebook, MdRoom, MdPhone, MdMailOutline } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { Center, Container, Left, Right, SocialIcon } from './styles'

const Footer: React.FC = () => {
	const iconsSize = '65%'
	const { colors } = useTheme()

	return (
		<Container>
			<Left>
				<h1 className="logo">deepz</h1>
				<div className="description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
					cupiditate ullam enim quidem quia at quibusdam facilis ipsa eos non
					aut ipsam, illo sed, neque maiores, architecto unde praesentium
					voluptatum.
				</div>
				<div className="social-container">
					<SocialIcon backgroundColor="#3B5999">
						<MdFacebook color={colors.white.default} size={iconsSize} />
					</SocialIcon>
					<SocialIcon backgroundColor="#E4405F">
						<IoLogoInstagram color={colors.white.default} size={iconsSize} />
					</SocialIcon>
					<SocialIcon backgroundColor="#55ACEE">
						<IoLogoTwitter color={colors.white.default} size={iconsSize} />
					</SocialIcon>
					<SocialIcon backgroundColor="#E60023">
						<IoLogoPinterest color={colors.white.default} size={iconsSize} />
					</SocialIcon>
				</div>
			</Left>
			<Center>
				<h3>Useful Links</h3>
				<ul>
					<li>Home</li>
					<li>Cart</li>
					<li>Man Fashion</li>
					<li>Woman Fashion</li>
					<li>Accessories</li>
					<li>My Account</li>
					<li>Order Tracking</li>
					<li>Wishlist</li>
					<li>Terms</li>
				</ul>
			</Center>
			<Right>
				<h3>Contact</h3>
				<div className="contact-item">
					<MdRoom />
					622 Dixie Path, South Tobinchester 98336
				</div>
				<div className="contact-item">
					<MdPhone />
					+1 234 56 78
				</div>
				<div className="contact-item">
					<MdMailOutline />
					contact@deepz.dev
				</div>
				<div className="payment">
					<Image
						src="https://i.ibb.co/Qfvn4z6/payment.png"
						alt="Payment"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Right>
		</Container>
	)
}

export default Footer
