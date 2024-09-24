import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registerAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';

const schema = yup
	.object({
		email: yup.string().required().email(),
		password: yup.string().required().min(6),
		nickname: yup.string().required()
	})
	.required();

const Register: React.FC = () => {
	const navigate = useNavigate();

	const [emailRedShadow, setEmailRedShadow] = useState('');
	const [passwordRedShadow, setPasswordRedShadow] = useState('');
	const [nicknameRedShadow, setNicknameRedShadow] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data) => handleEnterClick(data);

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
							'mt-[50px]',
							'shadow-[#ff0000]',
							`${emailRedShadow}`
						)}
					></div>

					<input
						{...register('email', { required: 'Email Address is required' })}
						aria-invalid={errors.email ? 'true' : 'false'}
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

					{errors.email?.type === 'required' && (
						<p role="alert" className={clsx('absolute', 'ml-5', 'text-[#FF0000]')}>
							{errors.email.message}
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
							'mt-[50px]',
							'shadow-[#ff0000]',
							`${passwordRedShadow}`
						)}
					></div>

					<input
						{...register('password', { required: true, minLength: 6 })}
						aria-invalid={errors.password ? 'true' : 'false'}
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

					{errors.password?.type === 'required' && (
						<p role="alert" className={clsx('absolute', 'ml-5', 'text-[#FF0000]')}>
							{errors.password.message}
						</p>
					)}

					{errors.password?.type === 'minLength' && (
						<p role="alert" className={clsx('absolute', 'ml-5', 'text-[#FF0000]')}>
							Password must be at least 6 characters long
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
							'mt-[50px]',
							'shadow-[#ff0000]',
							`${nicknameRedShadow}`
						)}
					></div>

					<input
						{...register('nickname', { required: true })}
						aria-invalid={errors.password ? 'true' : 'false'}
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

					{errors.nickname?.type === 'required' && (
						<p role="alert" className={clsx('absolute', 'ml-5', 'text-[#FF0000]')}>
							{errors.nickname.message}
						</p>
					)}

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

export default memo(Register);
