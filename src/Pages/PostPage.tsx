import clsx from 'clsx';
import React from 'react';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import heartEmpty from '../images/heartEmpty.svg';
import postImage from '../images/postImage.png';

const PostPage: React.FC = () => {
	let { id } = useParams();
	const post = useSelector((state: any) =>
		state.posts.find((post) => post.id === Number(id))
	);

	return (
		<>
			<Link to={`/`}>
				<button
					className={clsx(
						'absolute',
						'w-[15%]',
						'h-[50px]',
						'bg-[#00000080]',
						'rounded-[15px]',
						'text-white',
						'text-2xl',
						'ml-[5%]',
						'border-[3px]',
						'border-solid',
						'border-[#ffffff]',
						'mt-[50px]'
					)}
				>
					Home
				</button>
			</Link>

			<img
				className={clsx('w-full', 'h-[350px]', 'object-cover')}
				src={post ? post.imageUrl : postImage}
				alt="pizzaHeader"
			/>

			<h1
				className={clsx(
					'mx-[5%]',
					'text-black',
					'text-5xl',
					'font-bold',
					'mt-[30px]'
				)}
			>
				{post ? post.header : 'no header'}
			</h1>

			<p
				className={clsx(
					'mx-[5%]',
					'text-black',
					'text-2xl',
					'font-semibold',
					'mt-[30px]'
				)}
			>
				{post ? post.text : ''}
			</p>

			<div className={clsx('flex', 'items-center', 'mt-[50px]')}>
				<img
					className={clsx('w-[22px], h-[22px]', 'ml-[5%]')}
					src={heartEmpty}
					alt="heartImage"
				/>

				<p className={clsx('text-xl', 'font-semibold', 'ml-2')}>0</p>
			</div>

			<div className={clsx('h-150px')}></div>
		</>
	);
};

export default PostPage;
