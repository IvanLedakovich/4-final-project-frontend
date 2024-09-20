import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreated: React.FC = () => {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate('/');
	}, 3000);

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-4xl', 'mt-[15%]', 'mx-auto')}>
					THE POST HAS BEEN CREATED SUCCESSFULLY
				</h1>
			</div>
		</>
	);
};

export default PostCreated;
