import React from 'react';
import {AbsoluteFill} from 'remotion';

export default function BottomComponent() {
	return (
		<AbsoluteFill
			style={{
				height: '0%',
				alignSelf: 'flex-end',
			}}
			id={'BottomComponent'}
			className="bg-[#D9A441]"
		>
			<h1 className="text-9xl  items-center flex flex-col font-bold text-center text-black mb-4">
				<div className="overflow-clip">
					<div
						style={{
							transform: 'translateY(100%)',
						}}
						id={'Title'}
					>
						MODERN
					</div>
				</div>
				<div
					id="Fashion"
					style={{
						width: '0%',
						opacity: 0,
					}}
					className="text-white overflow-clip bg-black px-2"
				>
					FASHION
				</div>
			</h1>
			<p id={'MarketingCopy'} className="text-5xl  text-black text-center mb-4">
				The worst part about getting sober is scrolling through a website about
				getting sober
			</p>
			<WebsiteLink />
		</AbsoluteFill>
	);
}

function WebsiteLink() {
	const shades = [
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'pink',
		'indigo',
		'teal',
		'orange',
		'gray',
		'#fef08a',
	];

	return (
		<div className="relative w-full h-fit bg-red-400">
			{shades.map((shade, index) => (
				<div
					key={shade}
					id={'shades'}
					style={{
						zIndex: index,
						width: '0%',
						backgroundColor: shade,
					}}
					className="self-center absolute opacity-0 h-6 mx-auto right-0 left-0 "
				/>
			))}

			<div
				id={'Link'}
				style={{
					zIndex: shades.length,
					width: '0%',
				}}
				className="text-center opacity-0 absolute text-4xl self-center mx-auto  right-0 left-0  text-black font-bold"
			>
				WWW.YOURWEBSITE.COM
			</div>
		</div>
	);
}
