import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';

const UpdateProfile: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
		console.log();
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
						placeholder="Password"
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
							'mx-auto',
							'mt-[30px]'
						)}
					></div>

					<input
						type="password"
						name="password"
						placeholder="Nickname"
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
							'mx-auto',
							'mt-[30px]'
						)}
					></div>

					<input
						type="password"
						name="password"
						placeholder="Avatar URL"
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
							'mx-auto',
							'mt-[30px]'
						)}
					></div>
				</div>

				<div className={clsx('h-[500px]', 'ml-[100px]', 'w-[750px]')}>
					<input
						type="email"
						name="email"
						placeholder="Description"
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
							'w-[750px]',
							'h-[390px]',
							'mx-auto'
						)}
					></div>
				</div>
			</div>
			<div className={clsx('flex', 'justify-center')}>
				<Link to="/login" className={clsx()}>
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

				<Link to="/" className={clsx()}>
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
						onClick={() => {
							registerAxios(email, password, nickname, writeCredentialsToState);
						}}
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
