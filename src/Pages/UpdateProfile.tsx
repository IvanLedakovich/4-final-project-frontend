import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfileAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';
import {
	isEmailValid,
	isNicknameValid,
	isPasswordValid
} from '../utils/macros';

const UpdateProfile: React.FC = () => {
	const navigate = useNavigate();

	const user = useSelector((state: any) => state.user);

	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState(user.nickname);
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [nicknameError, setNicknameError] = useState('');
	const [descriptionError, setDescriptionError] = useState('');

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);

		if (!isEmailValid(e.target.value)) {
			setEmailError('Invalid email format.');
		} else {
			setEmailError('');
		}
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);

		if (!isPasswordValid(e.target.value)) {
			setPasswordError('The password must be at least 6 characters long.');
		} else {
			setPasswordError('');
		}
	};

	const handleNicknameChange = (e) => {
		setNickname(e.target.value);

		if (!isNicknameValid(e.target.value)) {
			setNicknameError('The nickname can be max. 30 characters long.');
		} else {
			setNicknameError('');
		}
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);

		if (description.length > 400) {
			setDescriptionError('The description can not be longer than 300 symbols.');
		} else {
			setDescriptionError('');
		}
	};

	const updateProfile = () => {
		if (
			!emailError &&
			!passwordError &&
			!nicknameError &&
			!descriptionError &&
			email &&
			nickname
		) {
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
			navigate('/profile/updated');
		}
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
							handleEmailChange(e);
						}}
					></input>

					{emailError && (
						<p className={clsx('absolute', 'ml-[1%]', 'mt-[5%]', 'text-[#FF0000]')}>
							{emailError}
						</p>
					)}

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
							handlePasswordChange(e);
						}}
					></input>

					{passwordError && (
						<p className={clsx('absolute', 'ml-[1%]', 'mt-[7%]', 'text-[#FF0000]')}>
							{passwordError}
						</p>
					)}

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
							handleNicknameChange(e);
						}}
					></input>

					{nicknameError && (
						<p className={clsx('absolute', 'ml-[1%]', 'mt-[7%]', 'text-[#FF0000]')}>
							{nicknameError}
						</p>
					)}

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
							handleDescriptionChange(e);
						}}
					></textarea>

					{descriptionError && (
						<p className={clsx('absolute', 'ml-[1%]', 'mt-[26%]', 'text-[#FF0000]')}>
							{descriptionError}
						</p>
					)}

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
				<Link to="/profile" className={clsx()}>
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
			</div>
			<div className={clsx('h-[150px]')}></div>
		</>
	);
};

export default UpdateProfile;
