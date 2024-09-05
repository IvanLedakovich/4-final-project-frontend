import clsx from 'clsx';
import React from 'react';
import { servingsParameter } from '../ui/styles';

const Servings: React.FC<{
	servings: any;
}> = ({ servings }) => {
	return (
		<div className={clsx(servingsParameter, 'border-[#C65F00]')}>
			<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#C65F00]')}>
				{servings}
			</h5>
		</div>
	);
};

export default Servings;
