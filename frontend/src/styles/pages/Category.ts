import styled from 'styled-components'

import { mobile } from '../responsive'

export const Main = styled.main``

export const Title = styled.h1`
	margin: 20px;
`

export const FiltersContainer = styled.div`
	display: flex;
	justify-content: space-between;

	.filter {
		${mobile({ width: '0 20px', display: 'flex', flexDirection: 'column' })}
		margin: 20px;

		span {
			font-size: 20px;
			font-weight: 600;
			margin-right: 20px;
			${mobile({ marginRight: '0' })}
		}
	}
`

export const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: '10px 0' })}

	option {
	}
`
