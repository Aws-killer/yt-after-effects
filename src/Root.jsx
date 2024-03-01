import {Composition} from 'remotion';
import HelloWorld from './HelloWorld';

import './index.css';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={3000}
				fps={30}
				height={1920}
				width={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
