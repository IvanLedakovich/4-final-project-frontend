import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {
	getAllPostsAxios,
	searchPostsAxios,
	searchRecipesAxios,
	sortByAgeAxios,
	sortByLikesAxios
} from '../api/axios';
import defaultUserIcon from '../images/png/defaultUserIcon.png';
import studioLogo from '../images/png/studioLogo.png';
import PostsContainer from '../RecipiesContainer/PostsContainer';
import { fillInitially, postsLoaded } from '../redux/posts/actionCreators';
import { homepageHeaderImage } from '../ui/styles';

const Home: React.FC = () => {
	const user = useSelector((state: any) => state.user);

	const dispatch = useDispatch();

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

	if (!user) {
		Navigate({ to: '/login' });
	}

	return (
		<>
			<img
				className={homepageHeaderImage}
				src={studioLogo}
				alt=""
				onLoad={() => {
					getAllPostsAxios(dispatchFillInitially);
					dispatchPostsLoaded(true);
				}}
			/>

			<div className={clsx('flex', 'w-full', 'h-[150px]', 'bg-[#000000]')}>
				<div
					className={clsx(
						'bg-[#ffffff]',
						'flex',
						'w-[60%]',
						'ml-[11%]',
						'h-[50px]',
						'rounded-[25px]'
					)}
				>
					<input
						type="text"
						name="name"
						placeholder="Search"
						className={clsx(
							'absolute',
							'w-[865px]',
							'h-[50px]',
							'bg-[#000000]',
							'text-3xl',
							'bg-transparent',
							'border-none',
							'ml-[2%]'
						)}
						onChange={searchPosts}
					></input>
				</div>
				<Link to="/profile" className={clsx('ml-[14%]')}>
					<img
						className={clsx(
							'w-[50px], h-[50px]',
							'rounded-[25px]',
							'object-cover',
							'border-[2px]',
							'border-solid',
							'border-[#ffffff]'
						)}
						src={
							user
								? user.imageUrl
									? user.imageUrl
									: defaultUserIcon
								: defaultUserIcon
						}
						alt=""
					/>
				</Link>
			</div>

			<div
				className={clsx(
					'flex',
					'w-full',
					'h-[75px]',
					'border-[3px]',
					'border-solid',
					'border-[#000000]',
					'items-center'
				)}
			>
				<Link
					to="/create-post"
					className={clsx('flex', 'ml-[11%]', 'w-[25%]', 'h-[50px]')}
				>
					<button
						className={clsx(
							'w-full',
							'bg-[#000000]',
							'rounded-[15px]',
							'text-white',
							'text-2xl'
						)}
					>
						Create post +
					</button>
				</Link>

				<button
					className={clsx(
						'w-[15%]',
						'h-[50px]',
						'bg-[#ffffff]',
						'rounded-[15px]',
						'text-black',
						'text-2xl',
						'ml-[5%]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]'
					)}
					onClick={() => {
						getAllPostsAxios(dispatchFillInitially);
						dispatchPostsLoaded(true);
					}}
				>
					Default
				</button>

				<button
					className={clsx(
						'w-[15%]',
						'h-[50px]',
						'bg-[#ffffff]',
						'rounded-[15px]',
						'text-black',
						'text-2xl',
						'ml-[2%]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]'
					)}
					onClick={() => {
						sortByLikesAxios(dispatchFillInitially);
						dispatchPostsLoaded(true);
					}}
				>
					Most liked
				</button>

				<button
					className={clsx(
						'w-[15%]',
						'h-[50px]',
						'bg-[#ffffff]',
						'rounded-[15px]',
						'text-black',
						'text-2xl',
						'ml-[2%]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]'
					)}
					onClick={() => {
						sortByAgeAxios(dispatchFillInitially);
						dispatchPostsLoaded(true);
					}}
				>
					Newest
				</button>
			</div>

			<PostsContainer />

			<div className={clsx('h-[150px]')}></div>
		</>
	);
};

export default Home;
