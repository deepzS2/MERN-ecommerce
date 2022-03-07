import { NextPage } from 'next'
import React from 'react'

import { Container, FormItem } from '@styles/pages/NewProduct'

const NewUser: NextPage = () => {
	return (
		<Container>
			<h1>New User</h1>
			<form>
				<FormItem>
					<label htmlFor="name">Product Name</label>
					<input type="text" placeholder="Apple Airpod" name="name" id="name" />
				</FormItem>
				<FormItem>
					<label htmlFor="inStock">In Stock</label>
					<select name="inStock" id="inStock">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</FormItem>
				<FormItem>
					<label htmlFor="active">Active</label>
					<select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</FormItem>
				<button type="submit">Create</button>
			</form>
		</Container>
	)
}

export default NewUser
