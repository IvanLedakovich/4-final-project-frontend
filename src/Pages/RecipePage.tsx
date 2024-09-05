import clsx from 'clsx';
import React from 'react';
import {
	bowlSinglePage,
	cookingTimeTextContainer,
	cuisineNameContainer,
	goBackButton,
	headerLineLeftSingle,
	headerLineRightSingle,
	headerLogoContainerSingle,
	headerTextSingle,
	infoContainerSinglePage,
	infoContanerSingle,
	infoContanerSingleBottom,
	parameterName,
	parametersContainer,
	parameterSinglePage,
	photoContainerSinglePage,
	recipeImageSinglePage,
	recipeNameSingle
} from '../ui/styles';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Servings from '../components/Servings';
import bowl from '../images/bowlBlack.svg';
import cuisineImage from '../images/cuisineImage.svg';
import difficulty from '../images/difficulty.svg';
import servingPlate from '../images/servingPlate.svg';
import timerImage from '../images/timerImage.svg';
import DifficultyParameterSingle from '../RecipiesContainer/RecipeCard/Difficulty/DifficultyParameterSingle';
import RecipeTagsSinglePage from '../RecipiesContainer/RecipeCard/RecipeCardTagsSinglePage';

const RecipePage: React.FC = () => {
	let { id } = useParams();
	const recipe = useSelector((state: any) =>
		state.recipes.find((recipe) => recipe.id === Number(id))
	);

	return (
		<>
			<div
				className={clsx(
					'm:mt-[50px]',
					'w-[100%]',
					'h-[100px]',
					'grid',
					'items-center'
				)}
			>
				<Link to="/">
					<button className={clsx(goBackButton, 'scale-1')}>Go back</button>
				</Link>

				<div id="headerLine" className={headerLineLeftSingle} />
				<div id="headerLine" className={headerLineRightSingle} />
				<div className={headerLogoContainerSingle}>
					<img className={clsx(bowlSinglePage)} src={bowl} alt="bowl" />
					<h2 className={headerTextSingle}>Recipe Book</h2>
				</div>
			</div>
			<div className={infoContanerSingle}>
				<div className={photoContainerSinglePage}>
					<img className={recipeImageSinglePage} src={recipe.image} alt="bowl" />
				</div>
				<div className={infoContainerSinglePage}>
					<RecipeTagsSinglePage tags={recipe.tags} />
					<h1 className={clsx(recipeNameSingle, 'text-6xl')}>{recipe.name}</h1>
					<div className={parametersContainer}>
						<div className={parameterSinglePage}>
							<img src={difficulty} alt="" />
							<p className={parameterName}>Level</p>
							<DifficultyParameterSingle difficulty={recipe.difficulty} />
						</div>
						<div className={parameterSinglePage}>
							<img src={servingPlate} alt="" />
							<p className={parameterName}>Servings</p>
							<Servings servings={recipe.servings} />
						</div>
						<div className={parameterSinglePage}>
							<img src={cuisineImage} alt="" />
							<p className={parameterName}>{recipe.cuisine}</p>
							<div className={cuisineNameContainer}>
								<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')}>
									{'Italian'}
								</h5>
							</div>
						</div>
						<div className={parameterSinglePage}>
							<img src={timerImage} alt="" />
							<p className={parameterName}>Cooking Time</p>
							<div className={cookingTimeTextContainer}>
								<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#244FE9]')}>
									{recipe.cookTimeMinutes}
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={clsx(infoContanerSingleBottom)}>
				<div className={clsx('m:w-[45%]', 'h-[400px]', 'ml-[3%]')}>
					<h1
						className={clsx('just-me-again-down-here-regular-no-scale', 'text-7xl')}
					>
						Instructions
					</h1>
					<ol className={clsx('mt-[30px]', 'list-decimal', 'm:ml-[3%]', 'ml-[6%]')}>
						{recipe.instructions.map((instruction) => (
							<li
								key={instruction}
								className={clsx('nunito-sans-normal', 'text-xl', 'text-[#000000]')}
							>
								{instruction}
							</li>
						))}
					</ol>
				</div>
				<div
					className={clsx(
						'm:w-[45%]',
						'h-fit',
						'ml-[3%]',
						'mr-[3%]',
						'm:mr-[0]',

						'rounded-[10px]',
						'border-[1.5px]',
						'border-solid',
						'border-[#000000]'
					)}
				>
					<h1
						className={clsx(
							'just-me-again-down-here-regular-no-scale',
							'text-7xl',
							'ml-[5%]'
						)}
					>
						Ingredients
					</h1>
					<ul
						className={clsx(
							'ml-[10%]',
							'list-disc',
							'mt-[50px]',
							'm:mb-[50px]',
							'mb-[25px]'
						)}
					>
						{recipe.ingredients.map((ingredient) => (
							<li
								key={ingredient}
								className={clsx('nunito-sans-normal', 'text-xl', 'text-[#000000]')}
							>
								{ingredient}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default RecipePage;
