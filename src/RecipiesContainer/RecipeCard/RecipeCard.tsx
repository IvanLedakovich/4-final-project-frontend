import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import cuisineImage from '../../images/cuisineImage.svg';
import timerImage from '../../images/timerImage.svg';
import {
	cardDifficultyBigContainer,
	cookingTimeContainer,
	cookingTimeTextContainer,
	cuisineContainer,
	cuisineNameContainer,
	recipeCard,
	recipeName
} from '../../ui/styles';
import Difficulty from './Difficulty/Difficulty';
import RecipeCardImage from './RecipeCardImage';
import RecipeCardTags from './RecipeCardTags';

const RecipeCard: React.FC<{
	id: number;
	image: string;
	name: string;
	cookTimeMinutes: string;
	difficulty: string;
	cuisine: string;
	tags: Array<string>;
}> = ({ id, image, name, cookTimeMinutes, difficulty, cuisine, tags }) => {
	return (
		<>
			<Link to={`/recipes/${id}`} className={recipeCard}>
				<RecipeCardImage imgSrc={image} />
				<RecipeCardTags tags={tags} />
				<div className={recipeName}>
					<h3
						className={clsx(
							'just-me-again-down-here-small',
							'w-auto',
							'ml-3',
							'text-5xl',
							'mt-[4%]',
							'mb-[2%]'
						)}
					>
						{name}
					</h3>
				</div>
				<div className={cuisineContainer}>
					<img className={cuisineImage} src={cuisineImage} alt="cuisineImage" />
					<h5 className={clsx('nunito-sans-normal', 'text-2xl')}>Cuisine</h5>
					<div className={cuisineNameContainer}>
						<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')}>
							{cuisine}
						</h5>
					</div>
				</div>
				<div className={cookingTimeContainer}>
					<img className={timerImage} src={timerImage} alt="timerImage" />
					<h5 className={clsx('nunito-sans-normal', 'text-2xl')}>Cooking Time</h5>
					<div className={cookingTimeTextContainer}>
						<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#244FE9]')}>
							{cookTimeMinutes}
						</h5>
					</div>
				</div>
				<div className={cardDifficultyBigContainer}>
					<Difficulty difficulty={difficulty} />
				</div>
			</Link>
		</>
	);
};

export default RecipeCard;
