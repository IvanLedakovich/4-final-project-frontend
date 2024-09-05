import clsx from 'clsx';
import React from 'react';
import { cardDifficultySmallContainer } from '../../../ui/styles';

const Difficulty: React.FC<{
	difficulty: string;
}> = ({ difficulty }) => {
	const DifficultyStyles = {
		Easy: clsx(
			cardDifficultySmallContainer,
			'border-[#168914]',
			'bg-[#03b1001f]'
		),

		EasyText: clsx('nunito-sans-normal', 'text-xl', 'text-[#168914]'),

		Medium: clsx(
			cardDifficultySmallContainer,
			'border-[#C65F00]',
			'bg-[#ff99001a]'
		),

		MediumText: clsx('nunito-sans-normal', 'text-xl', 'text-[#C65F00]'),

		Hard: clsx(
			cardDifficultySmallContainer,
			'border-[#D20C0C]',
			'bg-[#d20c0c1b]'
		),

		HardText: clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')
	};

	return (
		<div className={DifficultyStyles[difficulty]}>
			<h5 className={DifficultyStyles[`${difficulty}Text`]}>{difficulty}</h5>
		</div>
	);
};

export default Difficulty;
