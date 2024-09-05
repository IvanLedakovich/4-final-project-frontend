import clsx from 'clsx';
import React from 'react';
import {
	recipeTagContainer,
	recipeTagsContainerSinglePage
} from '../../ui/styles';
import {
	MAX_TAG_LENGTH_SINGLE_PAGE,
	MAX_TAGS_PER_RECIPE
} from '../../utils/constants';

const RecipeTagsSinglePage: React.FC<{ tags: Array<string> }> = ({ tags }) => {
	return (
		<div className={recipeTagsContainerSinglePage}>
			{tags.slice(0, MAX_TAGS_PER_RECIPE).map((element, i) => (
				<div className={recipeTagContainer} key={i}>
					<h3 className={clsx('nunito-sans-normal', 'text-[#c65f00]')}>
						{element.substring(0, MAX_TAG_LENGTH_SINGLE_PAGE)}
					</h3>
				</div>
			))}
		</div>
	);
};

export default RecipeTagsSinglePage;
