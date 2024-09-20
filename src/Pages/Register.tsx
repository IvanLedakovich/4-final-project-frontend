import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';
import {
	isEmailValid,
	isNicknameValid,
	isPasswordValid
} from '../utils/macros';

const Register: React.FC = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [nicknameError, setNicknameError] = useState('');

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

	const handleEnterClick = () => {
		if (
			!emailError &&
			!passwordError &&
			!nicknameError &&
			email &&
			password &&
			nickname
		) {
			registerAxios(email, password, nickname, writeCredentialsToState);
			navigate('/');
		}
	};

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[5%]', 'mx-auto')}>REGISTER</h1>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[154px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleEmailChange(e);
					}}
				></input>

				{emailError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[15%]', 'text-[#FF0000]')}>
						{emailError}
					</p>
				)}

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="password"
					name="password"
					placeholder="Password"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[279px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handlePasswordChange(e);
					}}
				></input>

				{passwordError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[23%]', 'text-[#FF0000]')}>
						{passwordError}
					</p>
				)}

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="text"
					name="nickname"
					placeholder="Nickname"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[405px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleNicknameChange(e);
					}}
				></input>

				{nicknameError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[31%]', 'text-[#FF0000]')}>
						{nicknameError}
					</p>
				)}

				<button
					className={clsx(
						'w-[300px]',
						'h-[75px]',
						'bg-[#000000]',
						'justify-self-center',
						'mt-[50px]',
						'rounded-[25px]',
						'text-white',
						'text-4xl'
					)}
					onClick={handleEnterClick}
				>
					ENTER
				</button>

				<p
					className={clsx(
						'w-auto',
						'justify-self-center',
						'mt-[20px]',
						'text-[#807e7e]',
						'text-2xl'
					)}
				>
					already have an account?
				</p>

				<Link to="/login" className={clsx('justify-self-center')}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'justify-self-center',
							'mt-[20px]',
							'rounded-[25px]',
							'text-[#807e7e]',
							'text-4xl',
							'border-[3px]',
							'border-solid',
							'border-[#807e7e]'
						)}
					>
						LOG IN
					</button>
				</Link>
			</div>
		</>
	);
};

export default Register;
