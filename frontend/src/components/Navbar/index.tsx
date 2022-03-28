import React from 'react'
import { MdSearch, MdOutlineShoppingCart } from 'react-icons/md'
import { useTheme } from 'styled-components'

import Input from '../Input'
import { Badge, Container, Language, Logo, MenuItem, Wrapper } from './styles'

const Navbar: React.FC = () => {
	const { colors } = useTheme()

	return (
		<Container>
			<Wrapper>
				<div className="left">
					<Language>EN</Language>
					<Input
						icon={<MdSearch size={18} color={colors.gray} />}
						type="text"
					/>
				</div>
				<div className="center">
					<Logo>deepz.</Logo>
				</div>
				<div className="right">
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge>
							<MdOutlineShoppingCart size="20px" />
							<span>4</span>
						</Badge>
					</MenuItem>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Navbar
