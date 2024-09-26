import clsx from 'clsx';
import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPostAxios } from '../api/axios';

const CreatePost: React.FC = () => {
	const navigate = useNavigate();

	const [image, setImage] = useState();
	const [header, setHeader] = useState('');
	const [text, setText] = useState('');

	const [errors, setErrors] = useState({ imageError: '', headerError: '' });

	const handleImageUrlChange = (event) => {
		setImage(event.target.files[0]);
	};

	const handleHeaderChange = (e) => {
		setHeader(e.target.value);
	};

	const handleCreateClick = (event) => {
		event.preventDefault();
		let newErrors = errors;
		if (!image) {
			newErrors.imageError = 'The image URL can not be empty.';
			return;
		}
		if (!header) {
			newErrors.headerError = 'The header can not be empty.';
			return;
		}

		createPostAxios(image, header, text);
		navigate('/post/created');
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
					type="file"
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
					onChange={handleImageUrlChange}
				></input>

				{errors.imageError && (
					<p className={clsx('absolute', 'ml-[5%]', 'mt-[18%]', 'text-[#FF0000]')}>
						{errors.imageError}
					</p>
				)}

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
					type="text"
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
						handleHeaderChange(e);
					}}
				></input>

				{errors.headerError && (
					<p className={clsx('absolute', 'ml-[5%]', 'mt-[26%]', 'text-[#FF0000]')}>
						{errors.headerError}
					</p>
				)}

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
						onClick={handleCreateClick}
					>
						CREATE
					</button>
				</div>
				<div className={clsx('h-[150px]')}></div>
			</div>
		</>
	);
};

export default memo(CreatePost);
