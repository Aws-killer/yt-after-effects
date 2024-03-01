import gsap from 'gsap';
import {useEffect, useRef} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const useGsapTimeline = (gsapTimelineFactory) => {
	// Animations untill the component is mounted and they won't work with remotion untill they are linked with remotion through the frame and fps(since fps changes sometimes so we need to keep track of it and update the timeline accordingly) and the animationScopeRef is used to keep track of the component is mounted or not and the timelineRef is used to keep track of the timeline of the animation and the frame is used to keep track of the current frame and the fps is used to keep track of the current fps of the video

	const animationScopeRef = useRef(null);
	const timelineRef = useRef();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// for the scope
	useEffect(() => {
		if (animationScopeRef.current) {
			// check if the component is mounted
			const ctx = gsap.context(() => {
				timelineRef.current = gsapTimelineFactory();
				timelineRef.current.pause();
			}, animationScopeRef);
			return () => ctx.revert();
		}
		//Only proceed untill a timeline has been created
		if (timelineRef.current) {
			const timeline = timelineRef.current;
			return () => {
				if (timeline) {
					timeline.kill(); // Ensure proper cleanup of the GSAP timeline
				}
			};
		}
	}, [animationScopeRef.current]);

	// for the frame
	useEffect(() => {
		if (animationScopeRef.current)
			if (timelineRef.current) {
				// check if the component is mounted
				timelineRef.current.seek(frame / fps);
			}
	}, [frame, fps, animationScopeRef.current]);

	return animationScopeRef;
};
