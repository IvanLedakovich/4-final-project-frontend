import clsx from 'clsx';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toggleLikeOnAccountAxios } from '../api/axios';
import heartEmpty from '../images/heartEmpty.svg';
import heartFull from '../images/heartFull.svg';
import postImage from '../images/postImage.png';
import { fillInitially } from '../redux/posts/actionCreators';
import { fill } from '../redux/user/actionCreators';

const PostPage: React.FC = () => {
	const user = useSelector((state: any) => state.user);
	let { id } = useParams();
	const post = useSelector((state: any) =>
		state.posts.find((post) => post.id === Number(id))
	);

	const dispatch = useDispatch();

	const [iLikedThisPost, setILikedThisPost] = useState(
		user.likedPosts.find((element) => element == id)
	);

	const toggleLike = () => {
		setILikedThisPost(!iLikedThisPost);
		toggleLikeOnAccountAxios(
			user,
			post,
			refreshUser,
			refreshPosts,
			iLikedThisPost
		);
	};

	const refreshPosts = (posts) => {
		dispatch(fillInitially(posts));
	};

	const refreshUser = (newUser) => {
		dispatch(fill(newUser));
	};

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
					src={iLikedThisPost ? heartFull : heartEmpty}
					alt="heartImage"
					onClick={toggleLike}
				/>

				<p className={clsx('text-xl', 'font-semibold', 'ml-2')}>
					{post.likesQuantity}
				</p>
			</div>

			<div className={clsx('h-150px')}></div>
		</>
	);
};

export default PostPage;
