import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileUpdated: React.FC = () => {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate('/profile');
	}, 3000);

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-4xl', 'mt-[15%]', 'mx-auto')}>
					THE PROFILE HAS BEEN SUCCESSFULLY UPDATED
				</h1>
			</div>
		</>
	);
};

export default ProfileUpdated;
