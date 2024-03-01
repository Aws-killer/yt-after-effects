import React from 'react';
import {Img, staticFile} from 'remotion';

export default function BackGroundImage() {
	return (
		<Img
			id={'BackGroundImage'}
			className="h-full object-cover"
			src={staticFile('BackgroundCool.jpg')}
		/>
	);
}
