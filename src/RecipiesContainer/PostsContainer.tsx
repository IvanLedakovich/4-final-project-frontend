import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { MAX_HEADER_LENGTH } from '../utils/constants';
import PostCard from './RecipeCard/PostCard';

const PostsContainer: React.FC = () => {
	const posts = useSelector((state: any) => state.posts);
	const postsLoaded = useSelector((state: any) => state.postsLoaded);

	return (
		<div
			className={clsx(
				'grid',
				'justify-center',
				'grid-cols-[repeat(auto-fit,minmax(410px,440px))]',
				'gap-[2.5em]',
				'mt-[50px]',
				'mx-[45px]',
				'xl:grid-cols-3'
			)}
		>
			{postsLoaded ? (
				posts.length === 0 ? (
					<p className="mx-auto">There are no such posts 😓</p>
				) : (
					<>
						{posts.map((element: any) => (
							<PostCard
								key={element.id}
								id={element.id}
								imageUrl={element.imageUrl}
								header={element.header.substring(0, MAX_HEADER_LENGTH).toUpperCase()}
								text={element.text}
								authorId={element.authorId}
								likesQuantity={element.likesQuantity}
							/>
						))}
					</>
				)
			) : (
				<p className="mx-auto">Loading...</p>
			)}
			<div className={clsx('h-[100px]')} />
		</div>
	);
};

export default PostsContainer;
