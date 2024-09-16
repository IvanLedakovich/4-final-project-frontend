import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProfileAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';

const UpdateProfile: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const user = useSelector((state: any) => state.user);

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	const updateProfile = () => {
		let newUser = {
			id: user.id,
			email: email ? email : user.email,
			password: password,
			nickname: nickname ? nickname : user.nickname,
			description: description ? description : user.description,
			imageUrl: imageUrl ? imageUrl : user.imageUrl,
			myPosts: user.myPosts,
			likedPosts: user.likedPosts
		};

		updateProfileAxios(newUser, writeCredentialsToState);
	};

	return (
		<>
			<h1
				className={clsx('flex', 'text-7xl', 'mt-[5%]', 'mx-auto', 'justify-center')}
			>
				UPDATE PROFILE
			</h1>

			<div className={clsx('flex', 'w-full', 'h-[500px]', 'mt-[50px]', 'mx-[5%]')}>
				<div className={clsx('h-[500px]', 'w-[550px]')}>
					<input
						type="email"
						name="email"
						placeholder="Email"
						defaultValue={user.email}
						className={clsx(
							'absolute',
							'text-3xl',
							'border-black',
							'w-[560px]',
							'h-[75px]',
							'bg-transparent',
							'border-none',
							'ml-[1%]'
						)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setEmail(e.target.value);
						}}
					></input>

					<div
						className={clsx(
							'rounded-[25px]',
							'border-[3px]',
							'border-solid',
							'border-[#000000]',
							'w-[600px]',
							'h-[75px]',
							'mx-auto'
						)}
					></div>

					<input
						type="password"
						name="password"
						placeholder="Fill to change the password"
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[30px]',
							'border-black',
							'w-[560px]',
							'h-[75px]',
							'bg-transparent',
							'border-none',
							'ml-[1%]'
						)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setPassword(e.target.value);
						}}
					></input>

					<div
						className={clsx(
							'rounded-[25px]',
							'border-[3px]',
							'border-solid',
							'border-[#000000]',
							'w-[600px]',
							'h-[75px]',
							'mx-auto',
							'mt-[30px]'
						)}
					></div>

					<input
						type="text"
						name="nickname"
						placeholder="Nickname"
						defaultValue={user.nickname}
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[30px]',
							'border-black',
							'w-[560px]',
							'h-[75px]',
							'bg-transparent',
							'border-none',
							'ml-[1%]'
						)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setNickname(e.target.value);
						}}
					></input>

					<div
						className={clsx(
							'rounded-[25px]',
							'border-[3px]',
							'border-solid',
							'border-[#000000]',
							'w-[600px]',
							'h-[75px]',
							'mx-auto',
							'mt-[30px]'
						)}
					></div>

					<input
						type="text"
						name="imageUrl"
						placeholder="Avatar URL"
						defaultValue={user.imageUrl}
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[30px]',
							'border-black',
							'w-[560px]',
							'h-[75px]',
							'bg-transparent',
							'border-none',
							'ml-[1%]'
						)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setImageUrl(e.target.value);
						}}
					></input>

					<div
						className={clsx(
							'rounded-[25px]',
							'border-[3px]',
							'border-solid',
							'border-[#000000]',
							'w-[600px]',
							'h-[75px]',
							'mx-auto',
							'mt-[30px]'
						)}
					></div>
				</div>

				<div className={clsx('h-[500px]', 'ml-[100px]', 'w-[750px]')}>
					<textarea
						name="description"
						placeholder="Description"
						defaultValue={user.description}
						className={clsx(
							'absolute',
							'text-3xl',
							'border-black',
							'w-[700px]',
							'h-[390px]',
							'bg-transparent',
							'border-none',
							'ml-[1%]'
						)}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					></textarea>

					<div
						className={clsx(
							'rounded-[25px]',
							'border-[3px]',
							'border-solid',
							'border-[#000000]',
							'w-[750px]',
							'h-[390px]',
							'mx-auto'
						)}
					></div>
				</div>
			</div>
			<div className={clsx('flex', 'justify-center')}>
				<Link to="/" className={clsx()}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'bg-[#807e7e]',
							'rounded-[25px]',
							'text-white',
							'text-4xl',
							'mx-5'
						)}
					>
						CANCEL
					</button>
				</Link>

				<Link to="/profile" className={clsx()}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'bg-[#000000]',
							'rounded-[25px]',
							'text-white',
							'text-4xl',
							'mx-5'
						)}
						onClick={updateProfile}
					>
						UPDATE
					</button>
				</Link>
			</div>
			<div className={clsx('h-[150px]')}></div>
		</>
	);
};

export default UpdateProfile;
