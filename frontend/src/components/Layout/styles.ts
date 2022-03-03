import styled from 'styled-components'

export const Container = styled.div`
	display: flex;

	/* Inside @styles/pages use any of these tags as container */
	> section,
	> div,
	> main {
		flex: 4;
	}
`
