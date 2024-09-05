import React from 'react';
import { recipeCardImage } from '../../ui/styles';

interface RecipeCardImageProps {
	imgSrc: string;
}

const RecipeCardImage: React.FC<RecipeCardImageProps> = ({ imgSrc }) => {
	return <img className={recipeCardImage} src={imgSrc} />;
};

export default RecipeCardImage;
