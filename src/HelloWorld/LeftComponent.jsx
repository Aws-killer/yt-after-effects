import React from 'react';
import {AbsoluteFill} from 'remotion';
export default function LeftComponent() {
	return (
		<AbsoluteFill
			style={{
				width: '30%',
				position: 'absolute',
			}}
			className="flex justify-center "
		>
			<div
				id={'LeftComponent'}
				className="h-full bg-black/80 relative   w-0 grid-cols-2 gap-0 self-center  grid"
			>
				<div className="flex space-x-4 justify-end col-start-2 ">
					<div
						id={'Line'}
						className="self-start h-full w-2 opacity-0 bg-white"
					/>
					<div className="h-full text-5xl text-white flex overflow-clip w-full items-start justify-start">
						<div
							id="LeftText"
							style={{
								lineHeight: '1',
								fontSize: '120px',
								writingMode: 'vertical-lr',
							}}
							className=" py-10  text-start h-full self-center"
						>
							BASIC INSTAGRAM
						</div>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
