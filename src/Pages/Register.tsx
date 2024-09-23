import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registerAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';
import {
	isEmailValid,
	isNicknameValid,
	isPasswordValid
} from '../utils/macros';

type FormData = {
	email: string;
	password: string;
	nickname: string;
};

const schema = yup
	.object({
		email: yup.string().required().email(),
		password: yup.string().required().min(6),
		nickname: yup.string().required()
	})
	.required();

const Register: React.FC = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data) => handleEnterClick(data);

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

	const handleEnterClick = (data) => {
		registerAxios(
			data.email,
			data.password,
			data.nickname,
			writeCredentialsToState
		);
		navigate('/');
	};

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[5%]', 'mx-auto')}>REGISTER</h1>

				<form onSubmit={handleSubmit(onSubmit)}>
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
						{...register('email')}
						placeholder="Email"
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[-75px]',
							'border-black',
							'ml-5',
							'w-[600px]',
							'h-[75px]',
							'justify-self-center',
							'bg-transparent',
							'border-none'
						)}
					/>

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
						{...register('password')}
						placeholder="Password"
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[-75px]',
							'border-black',
							'ml-5',
							'w-[600px]',
							'h-[75px]',
							'justify-self-center',
							'bg-transparent',
							'border-none'
						)}
					/>

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
						{...register('nickname')}
						placeholder="Nickname"
						className={clsx(
							'absolute',
							'text-3xl',
							'mt-[-75px]',
							'border-black',
							'ml-5',
							'w-[600px]',
							'h-[75px]',
							'justify-self-center',
							'bg-transparent',
							'border-none'
						)}
					/>
					<input
						type="submit"
						value="ENTER"
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'bg-[#000000]',
							'justify-self-center',
							'mt-[50px]',
							'ml-[150px]',
							'rounded-[25px]',
							'text-white',
							'text-4xl'
						)}
					/>

					<p
						className={clsx(
							'w-auto',
							'justify-self-center',
							'mt-[20px]',
							'ml-[150px]',
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
								'ml-[150px]',
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
				</form>
			</div>
		</>
	);
};

export default Register;
