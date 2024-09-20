import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';
import { isEmailValid, isPasswordValid } from '../utils/macros';

const LogIn: React.FC = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const user = useSelector((state: any) => state.user);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const writeCredentialsToState = (res) => {
		if (res) {
			dispatch(fill(res));
			navigate('/');
		} else {
			setLoginError('Invalid credentials.');
		}
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

	const handleLoginButton = () => {
		try {
			logInAxios(email, password, writeCredentialsToState);
		} catch (e) {}
	};

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[15%]', 'mx-auto')}>LOG IN</h1>

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
					placeholder="Email"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[219px]',
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
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[20%]', 'text-[#FF0000]')}>
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
						'mt-[344px]',
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
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[28%]', 'text-[#FF0000]')}>
						{passwordError}
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
					onClick={handleLoginButton}
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
					don't have an account?
				</p>

				<Link to="/register" className={clsx('justify-self-center')}>
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
						REGISTER
					</button>
				</Link>

				{loginError && (
					<p className={clsx('absolute', 'ml-[46%]', 'mt-[47%]', 'text-[#FF0000]')}>
						{loginError}
					</p>
				)}
			</div>
		</>
	);
};

export default LogIn;
