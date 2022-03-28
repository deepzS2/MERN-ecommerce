import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { slides } from '@services/data'

import { Container, Arrow, Wrapper, Slide } from './styles'

const Slider: React.FC = () => {
	const [slideIndex, setSlideIndex] = useState(0)
	const { colors } = useTheme()

	const handleClick = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}

	return (
		<Container>
			<Arrow onClick={() => handleClick('left')} direction="left">
				<MdOutlineArrowLeft />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{slides.map((slide, index) => (
					<Slide
						key={slide.id}
						background={
							index % 3 === 0
								? colors.lighterPink
								: index % 2 === 0
								? colors.lightPink
								: colors.lightBlue
						}
					>
						<div className="img-container">
							<Image src={slide.img} alt="Slide" layout="fill" />
						</div>
						<div className="info-container">
							<h1>{slide.title}</h1>
							<p>{slide.desc}</p>
							<button>Show now</button>
						</div>
					</Slide>
				))}
			</Wrapper>
			<Arrow onClick={() => handleClick('right')} direction="right">
				<MdOutlineArrowRight />
			</Arrow>
		</Container>
	)
}

export default Slider
