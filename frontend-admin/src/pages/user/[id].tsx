import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
	MdPermIdentity,
	MdCalendarToday,
	MdPhoneAndroid,
	MdMailOutline,
	MdLocationSearching,
	MdPublish,
} from 'react-icons/md'

import {
	Container,
	TitleContainer,
	UserContainer,
	ImageContainer,
	UserShow,
	UserUpdate,
	FormItem,
} from '@styles/pages/User'

const User: NextPage = () => {
	const iconsSize = 16

	return (
		<Container>
			<TitleContainer>
				<h1>Edit User</h1>
				<Link href="/newUser" passHref>
					<button>Create</button>
				</Link>
			</TitleContainer>
			<UserContainer>
				<UserShow>
					<div className="top">
						<ImageContainer>
							<Image
								src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Avatar"
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<div className="user">
							<span className="username">Anna Becker</span>
							<span className="title">Software Engineer</span>
						</div>
					</div>
					<div className="bottom">
						<span className="title">Account Details</span>
						<div className="info">
							<MdPermIdentity size={iconsSize} />
							<span className="infoTitle">annabeck99</span>
						</div>
						<div className="info">
							<MdCalendarToday size={iconsSize} />
							<span className="infoTitle">10.12.1999</span>
						</div>

						<span className="title">Contact Details</span>
						<div className="info">
							<MdPhoneAndroid size={iconsSize} />
							<span className="infoTitle">+1 123 456 78</span>
						</div>
						<div className="info">
							<MdMailOutline size={iconsSize} />
							<span className="infoTitle">annabeck99@gmail.com</span>
						</div>
						<div className="info">
							<MdLocationSearching size={iconsSize} />
							<span className="infoTitle">New York | USA</span>
						</div>
					</div>
				</UserShow>
				<UserUpdate>
					<span className="title">Edit</span>
					<form>
						<div className="left">
							<FormItem>
								<label htmlFor="username">Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									name="username"
									id="username"
								/>
							</FormItem>
							<FormItem>
								<label htmlFor="fullname">Fullname</label>
								<input
									type="text"
									placeholder="Anna Becker"
									name="fullname"
									id="fullname"
								/>
							</FormItem>
							<FormItem>
								<label htmlFor="email">Email</label>
								<input
									type="text"
									placeholder="annabeck99@gmail.com"
									name="email"
									id="email"
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
						</div>
						<div className="right">
							<div className="upload">
								<ImageContainer
									style={{ marginRight: '20px' }}
									containerType="upload"
								>
									<Image
										src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
										alt="Avatar"
										layout="fill"
										objectFit="cover"
									/>
								</ImageContainer>
								<label htmlFor="avatar">
									<MdPublish size={iconsSize * 1.5} />
								</label>
								<input
									style={{ display: 'none' }}
									type="file"
									name="avatar"
									id="avatar"
								/>
							</div>
							<button type="submit">Update</button>
						</div>
					</form>
				</UserUpdate>
			</UserContainer>
		</Container>
	)
}

export default User
