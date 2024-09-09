import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fill } from '../redux/user/actionCreators';

const CreatePost: React.FC = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [header, setHeader] = useState('');
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[5%]', 'mx-auto')}>CREATE POST</h1>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[1400px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="email"
					name="imageUrl"
					placeholder="Image URL"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[192px]',
						'border-black',
						'mx-auto',
						'w-[1360px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
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
						'w-[1400px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="password"
					name="header"
					placeholder="Header"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[317px]',
						'border-black',
						'mx-auto',
						'w-[1360px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setHeader(e.target.value);
					}}
				></input>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[1400px]',
						'h-[500px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<textarea
					name="text"
					placeholder="Your thoughts"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[444px]',
						'border-black',
						'mx-auto',
						'w-[1360px]',
						'h-[500px]',
						'justify-self-center',
						'bg-transparent',
						'border-none',
						'inline-flex',
						'items-start',
						'justify-start'
					)}
					onChange={(e) => {
						setText(e.target.value);
					}}
				></textarea>

				<div className={clsx('flex', 'justify-center', 'mt-[50px]')}>
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
								createPostAxios(imageUrl, header, text);
							}}
						>
							CREATE
						</button>
					</Link>
				</div>
				<div className={clsx('h-[150px]')}></div>
			</div>
		</>
	);
};

export default CreatePost;
