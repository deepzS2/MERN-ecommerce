import React, { forwardRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Container } from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	icon?: React.ReactNode
	invalid?: boolean
	invalidMessage?: string
}

const Input: React.ForwardRefRenderFunction<
	HTMLInputElement,
	Props & Partial<UseFormRegisterReturn>
> = ({ invalidMessage, invalid, icon, ...props }, ref) => {
	return (
		<Container className="input-wrapper" invalid={invalid}>
			{props.label && <label>{props.label}</label>}
			{icon ? (
				<div>
					<input ref={ref} {...props} />
					{icon}
				</div>
			) : (
				<input ref={ref} {...props} />
			)}
			{invalid && invalidMessage && (
				<span className="input__error">{invalidMessage}</span>
			)}
		</Container>
	)
}

export default forwardRef(Input)
