import { NextPage } from 'next'
import React from 'react'

import { Container, FormItem } from '@styles/pages/NewUser'

const NewUser: NextPage = () => {
	return (
		<Container>
			<h1>New User</h1>
			<form>
				<FormItem>
					<label htmlFor="username">Username</label>
					<input type="text" placeholder="john" name="username" id="username" />
				</FormItem>
				<FormItem>
					<label htmlFor="fullname">Fullname</label>
					<input
						type="text"
						placeholder="John Smith"
						name="fullname"
						id="fullname"
					/>
				</FormItem>
				<FormItem>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						placeholder="john@gmail.com"
						name="email"
						id="email"
					/>
				</FormItem>
				<FormItem>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="password"
						name="password"
						id="password"
					/>
				</FormItem>
				<FormItem>
					<label htmlFor="phone">Phone</label>
					<input
						type="text"
						placeholder="+1 123 456 78"
						name="phone"
						id="phone"
					/>
				</FormItem>
				<FormItem>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						placeholder="New York | USA"
						name="address"
						id="address"
					/>
				</FormItem>
				<FormItem>
					<label htmlFor="gender">Gender</label>

					<div className="gender">
						<input type="radio" name="gender" value="male" id="male" />
						<label htmlFor="male">Male</label>
						<input type="radio" name="gender" value="female" id="female" />
						<label htmlFor="female">Female</label>
						<input type="radio" name="gender" value="other" id="other" />
						<label htmlFor="other">Other</label>
					</div>
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
