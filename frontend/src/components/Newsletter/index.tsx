import React from 'react'
import { MdSend } from 'react-icons/md'
import { useTheme } from 'styled-components'

import Input from '../Input'
import { Container, Description, InputContainer, Title } from './styles'

const Newsletter: React.FC = () => {
	const { colors } = useTheme()

	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates from your favorite products.</Description>
			<InputContainer>
				<Input placeholder="Your email" type="email" />
				<button>
					<MdSend color={colors.white.default} size="24px" />
				</button>
			</InputContainer>
		</Container>
	)
}

export default Newsletter
