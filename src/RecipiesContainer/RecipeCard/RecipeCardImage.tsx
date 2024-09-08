import React from 'react';
import { postCardImage } from '../../ui/styles';

interface PostCardImageProps {
	imgSrc: string;
}

const PostCardImage: React.FC<PostCardImageProps> = ({ imgSrc }) => {
	return <img className={postCardImage} src={imgSrc} />;
};

export default PostCardImage;
