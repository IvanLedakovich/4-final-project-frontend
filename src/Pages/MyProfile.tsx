import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {
	getMyPostsAxios,
	getPostsILikedAxios,
	logOutAxios,
	searchPostsAxios,
	searchRecipesAxios
} from '../api/axios';
import defaultUserIcon from '../images/defaultUserIcon.png';
import PostsContainer from '../RecipiesContainer/PostsContainer';
import { fillInitially, postsLoaded } from '../redux/posts/actionCreators';

const MyProfile: React.FC = () => {
	const user = useSelector((state: any) => state.user);

	const dispatch = useDispatch();

	const refreshPage = () => {
		window.location.reload();
	};

	const dispatchFillInitially = (res) => {
		dispatch(fillInitially(res));
	};

	const searchRecipes = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchRecipesAxios(e.target.value, dispatchFillInitially);
	};

	const dispatchPostsLoaded = (boolean) => {
		dispatch(postsLoaded(boolean));
	};

	const searchPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchPostsAxios(e.target.value, dispatchFillInitially);
	};

	const getMyPosts = () => {
		getMyPostsAxios(user.id, dispatchFillInitially);
	};

	const getPostsILiked = () => {
		getPostsILikedAxios(user, dispatchFillInitially);
	};

	if (!user) {
		Navigate({ to: '/login' });
	}

	return (
		<>
			<Link to={`/`}>
				<button
					className={clsx(
						'absolute',
						'w-[13%]',
						'h-[50px]',
						'bg-[#00000080]',
						'rounded-[15px]',
						'text-white',
						'text-2xl',
						'ml-[82%]',
						'border-[3px]',
						'border-solid',
						'border-[#ffffff]',
						'mt-[75px]'
					)}
				>
					Home
				</button>
			</Link>

			<div
				className={clsx(
					'flex',
					'w-full',
					'h-[200px]',
					'bg-[#000000]',
					'items-center'
				)}
			>
				<img
					className={clsx('w-[150px], h-[150px]', 'rounded-[75px]', 'ml-[5%]')}
					src={
						user ? (user.imageUrl ? user.imageUrl : defaultUserIcon) : defaultUserIcon
					}
					alt="pizzaHeader"
				/>
				<h1 className={clsx('text-white', 'text-4xl', 'ml-10', 'font-bold')}>
					{user ? user.nickname : ''}
				</h1>
			</div>

			<p
				className={clsx(
					'text-black',
					'text-3xl',
					'mx-[5%]',
					'font-semibold',
					'mt-[30px]'
				)}
			>
				{user ? (user.description ? user.description : 'No bio') : 'No bio'}
			</p>

			<div className={clsx('flex', 'w-[90%]', 'h-[50px]', 'mx-[5%]', 'mt-[30px]')}>
				<h4 className={clsx('text-black', 'text-3xl', 'font-bold')}>EMAIL:</h4>
				<p className={clsx('text-black', 'text-3xl', 'ml-5')}>
					{user ? user.email : ''}
				</p>

				<button
					className={clsx(
						'w-[200px]',
						'h-[50px]',
						'bg-[#807e7e]',
						'rounded-[15px]',
						'text-white',
						'text-2xl',
						'ml-[45%]'
					)}
					onClick={() => {
						logOutAxios(refreshPage);
					}}
				>
					Log out
				</button>

				<Link to={`/change-info`} className={clsx('ml-auto')}>
					<button
						className={clsx(
							'w-[200px]',
							'h-[50px]',
							'bg-[#000000]',
							'rounded-[15px]',
							'text-white',
							'text-2xl'
						)}
					>
						Change info
					</button>
				</Link>
			</div>

			<div
				className={clsx('flex', 'w-full', 'h-[75px]', 'items-center', 'mt-[15px]')}
			>
				<button
					className={clsx(
						'w-[15%]',
						'h-[50px]',
						'bg-[#ffffff]',
						'rounded-[15px]',
						'text-black',
						'font-bold',
						'text-2xl',
						'ml-[5%]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]'
					)}
					onClick={getMyPosts}
				>
					My posts
				</button>

				<button
					className={clsx(
						'w-[15%]',
						'h-[50px]',
						'bg-[#ffffff]',
						'rounded-[15px]',
						'text-black',
						'font-bold',
						'text-2xl',
						'ml-[2%]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]'
					)}
					onClick={getPostsILiked}
				>
					Liked posts
				</button>
			</div>

			<PostsContainer />
		</>
	);
};

export default MyProfile;
