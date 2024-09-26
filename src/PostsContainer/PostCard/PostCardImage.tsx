import React from 'react';
import { postCardImage } from '../../ui/styles';

interface PostCardImageProps {
	imgSrc;
}

const PostCardImage: React.FC<PostCardImageProps> = ({ imgSrc }) => {
	const base64String = btoa(String.fromCharCode(...new Uint8Array(imgSrc)));

	return (
		<img
			className={postCardImage}
			src={`data:image/png;base64,${base64String}`}
		/>
	);
};

export default PostCardImage;
