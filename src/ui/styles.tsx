import clsx from 'clsx';

export const pizzaHeaderContainer = clsx(
	'w-full',
	'mt-[-300px]',
	'h-[200px]',
	'items-center',
	'absolute',
	'inline-block',
	'm:mt-[-400px]'
);

export const pizzaHeaderImage = clsx(
	'w-full',
	'h-[200px]',
	'object-cover',
	'm:h-[400px]'
);

export const headerLineLeft = clsx(
	'h-[3px]',
	'w-[25%]',
	'z-10',
	'mt-[200px]',
	'bg-white',
	'float-left',
	'm:w-[30%]'
);

export const headerLineRight = clsx(
	'h-[3px]',
	'w-[25%]',
	'z-10',
	'mt-[200px]',
	'bg-white',
	'float-right',
	'm:w-[30%]'
);

export const headerLogoContainer = clsx(
	'absolute',
	'w-[38%]',
	'translate-x-[-5%]',
	'translate-y-[-50%]',
	'z-10',
	'inline-flex',
	'items-center',
	'justify-center',
	'left-[31%]',
	'top-[50%]'
);

export const bowlReflectionBig = clsx(
	'absolute',
	'w-[2%]',
	'left-[26%]',
	'top-[55%]'
);

export const bowlReflectionSmall = clsx(
	'absolute',
	'w-[0.6%]',
	'left-[28.5%]',
	'top-[72%]'
);

export const searchBarDefault = clsx('w-[400px]');

export const searchBarHovered = clsx(
	'absolute',
	'w-[20%]',
	'mt-[50px]',
	'left-[3%]'
);

export const difficultyContainer = clsx(
	'w-[500px]',
	'flex',
	'items-center',
	'justify-evenly',
	'h-[35px]',
	'mt-[50px]',
	'left-[61%]'
);

export const difficultyButtonDefault = clsx(
	'w-[22%]',
	'h-[35px]',
	'inline-flex',
	'items-center',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black'
);

export const difficultyButtonChosen = clsx(
	'w-[18%]',
	'h-[35px]',
	'inline-flex',
	'items-center',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black'
);

export const recipiesContainer = clsx(
	'grid',
	'justify-center',
	'grid-cols-[repeat(auto-fit,minmax(410px,auto))]',
	'gap-[2.5em]',
	'mt-[50px]',
	'mx-[45px]',
	'xl:grid-cols-3'
);

export const recipeCard = clsx(
	'w-full',
	'h-[585px]',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black',
	'xl:h-[685px]'
);

export const recipeCardImage = clsx(
	'h-[260px]',
	'w-full',
	'object-cover',
	'rounded-[10px]'
);

export const recipeTagsContainer = clsx(
	'grid',
	'grid-cols-4',
	'grid-rows-1',
	'gap-[1em]',
	'mt-[25px]',
	'mx-[10px]'
);

export const recipeTagContainer = clsx(
	'grid',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#c65f00]'
);

export const recipeName = clsx('grid', 'justify-left');

export const cuisineContainer = clsx(
	'flex',
	'w-[95%]',
	'h-[6%]',
	'mx-auto',
	'mt-[4%]'
);

export const cuisineImage = clsx();

export const cuisineNameContainer = clsx(
	'grid',
	'w-[25%]',
	'h-[80%]',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#D20C0C]',
	'ml-auto'
);

export const cookingTimeContainer = clsx(
	'flex',
	'w-[95%]',
	'h-[6%]',
	'mx-auto',
	'mt-[6%]'
);

export const cookingTimeTextContainer = clsx(
	'grid',
	'w-[25%]',
	'h-[80%]',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#244FE9]',
	'ml-auto'
);

export const cardDifficultyBigContainer = clsx(
	'flex',
	'w-[95%]',
	'h-[6%]',
	'mx-auto',
	'mt-[8%]'
);

export const cardDifficultySmallContainer = clsx(
	'grid',
	'w-[20%]',
	'h-[90%]',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid'
);

export const loadMoreButtonBigContainer = clsx(
	'grid',
	'justify-center',
	'h-[300px]',
	'items-center'
);

export const loadMoreButtonSmallContainer = clsx(
	'grid',
	'justify-center',
	'items-center',
	'w-[200px]',
	'h-[20%]',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#000000]'
);

export const searchInput = clsx(
	'absolute',
	'w-[335px]',
	'h-[51.25px]',
	'ml-[65px]',
	'rounded-[10px]',
	'bg-transparent',
	'border-none',
	'border-transparent'
);

export const goBackButton = clsx(
	'w-[200px]',
	'h-[70px]',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',

	'just-me-again-down-here-regular-no-scale',
	'text-6xl',
	'ml-[3%]'
);

export const headerLineLeftSingle = clsx(
	'absolute',
	'h-[3px]',
	'w-[15%]',
	'z-10',
	'bg-black',
	'ml-[55%]',
	'm:ml-[23%]'
);

export const headerLineRightSingle = clsx(
	'absolute',
	'h-[3px]',
	'w-[30%]',
	'z-10',
	'left-[70%]',
	'bg-black',
	'hidden',
	'm:block'
);

export const headerLogoContainerSingle = clsx(
	'absolute',
	'w-[38%]',
	'translate-x-[-5%]',
	'translate-y-[-50%]',
	'z-10',
	'inline-flex',
	'items-center',
	'justify-center',
	'left-[32%]',
	'm:top-[12%]',
	'top-[6%]'
);

export const headerTextSingle = clsx(
	'absolute',
	'just-me-again-down-here-regular-no-scale',
	'text-5xl',
	'ml-[30%]',
	'hidden',
	'm:block'
);

export const infoContanerSingle = clsx(
	'm:flex',
	'm:mt-[40px]',
	'm:mt-[140px]',
	'mt-[40px]',
	'h-[500px]',
	'block',
	'mb-[200px]'
);
export const infoContanerSingleBottom = clsx(
	'm:flex',
	'm:mt-[40px]',
	'm:mt-[140px]',
	'mt-[40px]',
	'h-[600px]',
	'block',
	'mb-[200px]'
);

export const photoContainerSinglePage = clsx(
	'border-[1.5px]',
	'border-solid',
	'border-[#000000]',
	'm:w-[45%]',
	'w-[95%]',
	'm:h-[100%]',
	'h-[50%]',
	'ml-[3%]'
);

export const recipeImageSinglePage = clsx('h-full', 'w-full', 'object-cover');

export const infoContainerSinglePage = clsx(
	'm:w-[45%]',
	'h-[65%]',
	'ml-[6%]',
	'mr-[2%]',
	'mt-[4%]'
);

export const recipeTagsContainerSinglePage = clsx(
	'grid',
	'grid-cols-4',
	'grid-rows-1',
	'gap-[1em]'
);

export const recipeNameSingle = clsx(
	'absolute',
	'just-me-again-down-here-regular-no-scale',
	'text-7xl',
	'mt-[2%]'
);

export const parametersContainer = clsx(
	'mt-[170px]',
	'grid',
	'h-[200px]',
	'm:w-[60%]',
	'grid-cols-1',
	'grid-rows-4',
	'gap-[1em]'
);

export const parameterSinglePage = clsx('flex', 'w-[100%]', 'items-center');

export const parameterName = clsx('nunito-sans-normal', 'ml-[1%]');

export const servingsParameter = clsx(
	'grid',
	'w-[10%]',
	'h-[80%]',
	'ml-auto',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid'
);

export const logoContainer = clsx(
	'w-[200px]',
	'h-[100px]',
	'mt-[175px]',
	'mx-auto',
	'm:w-[400px]',
	'm:mt-[150px]'
);

export const headerText = clsx(
	'just-me-again-down-here-regular',
	'text-4xl',
	'float-right',
	'm:text-7xl'
);

export const headerImage = clsx(
	'float-left',
	'h-[50px]',
	'w-[50px]',
	'm:h-[90px]',
	'm:w-[90px]'
);

export const bowlSinglePage = clsx(
	'ml-[200%]',
	'mb-[15%]',
	'm:mr-[130px]',
	'm:mb-[5%]',
	'm:ml-[0%]'
);
