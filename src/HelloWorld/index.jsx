import gsap from 'gsap';
import React from 'react';
import {SplitText, TextPlugin} from 'gsap-trial/all';
import BackGroundImage from './BackGroundImage';
import LeftComponent from './LeftComponent';
import BottomComponent from './BottomComponent';
import GsapAnimation from '../Components/GsapAnimation';
import {Audio, staticFile} from 'remotion';

import {continueRender, delayRender, staticFile} from 'remotion';

const waitForFont = delayRender();
const font = new FontFace(
	`Roobert-Regular`,
	`url('${staticFile('Roobert-Regular.ttf')}') format('truetype')`
);

font
	.load()
	.then(() => {
		document.fonts.add(font);
		continueRender(waitForFont);
	})
	.catch((err) => console.log('Error loading font', err));

export default function Basic() {
	const plugins = [SplitText, TextPlugin];

	return (
		<GsapAnimation
			style={{
				fontFamily: 'Roobert-Regular',
			}}
			plugins={plugins}
			Timeline={timeLines}
		>
			<BackGroundImage />
			<LeftComponent />
			<BottomComponent />
			<Audio src={staticFile('Bambi.m4a')} />
		</GsapAnimation>
	);
}

const timeLines = () => {
	const mainTimeLine = gsap.timeline();
	const bottomCompTl = gsap.timeline();
	const leftCompTl = gsap.timeline();
	const bgImageTl = gsap.timeline();

	//@@@@ The animations are linked with ids in the div or AbsoluteFill components

	// create the list of words from the marketing copy
	const CopyWords = new SplitText('#MarketingCopy', {
		type: 'words',
	});

	//create the bottom component animation
	bottomCompTl
		.fromTo('#BottomComponent', {height: '0%'}, {height: '30%', duration: 3})
		.to(
			'#BackGroundImage',
			{
				yPercent: -25,
				ease: 'back.inOut(1.7)',
				duration: 2,
			},
			'='
		)
		.fromTo(
			CopyWords.words,
			{opacity: 0, yPercent: 100},
			{
				opacity: 1,
				yPercent: 0,
				duration: 1,
				stagger: 0.1,
				ease: 'back.inOut(1.7)',
			},
			'<0.1'
		)
		.to(
			'#Title',
			{
				yPercent: -100,
				duration: 2.5,
				ease: 'back.inOut(1.7)',
			},
			'<'
		)
		.to(
			'#Fashion',
			{
				width: '60%',
				opacity: 1,
			},
			'>-0.4'
		)
		.to('#shades', {
			width: '50%',
			opacity: 1,
			stagger: 0.1,
			duration: 2,
			ease: 'back.inOut(1.7)',
		})
		.to('#shades', {
			opacity: 0,
			duration: 0,
		})
		.to('#Link', {
			width: '60%',
			opacity: 1,
		});

	// initial BG image animation
	bgImageTl.fromTo(
		'#BackGroundImage',
		{
			xPercent: -100,
		},
		{
			xPercent: 0,
			ease: 'back.inOut(1.7)',
			duration: 5,
			scale: 2,
			stagger: {
				amount: 0.5, // Stagger amount between each animation
				from: 'end', // Stagger from the start of the animation
			},
		}
	);

	// left component animation
	leftCompTl
		.fromTo(
			'#LeftComponent',
			{
				width: '0%',
				duration: 1,
				opacity: 0,
			},
			{
				width: '100%',
				duration: 3,
				opacity: 1,
			}
		)
		.to(
			'#BackGroundImage',
			{
				xPercent: 15,
				duration: 3,
				ease: 'power4.inOut',
			},
			'='
		) // chain the animations together with the same duration
		.fromTo(
			'#Line',
			{xPercent: 100, opacity: 0},
			{
				xPercent: 0,
				opacity: 1,
			}
		) // Line animation
		.fromTo(
			'#LeftText',
			{xPercent: -100, opacity: 0},
			{
				xPercent: 0,
				opacity: 1,
			},
			'>-0.6' // 0.6 seconds before the end of the line animation
		) // chain line animation with the text animation
		.add(bottomCompTl, '-=0.1'); // chain  the bottomComponent  animation to the left component animation with a 0.1 second delay

	bgImageTl.add(leftCompTl); // add the left component animation at the start of to the bgImage animation

	mainTimeLine.add(bgImageTl, 0); // add the bgImage animation to the main timeline
	return mainTimeLine;
};
