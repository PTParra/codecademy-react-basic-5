import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { Video } from './components/video';

/*
  Video Player

  You just learned your first programming pattern. Let’s put it to use!
  For this project, you’ll make three React components work together to create a responsive video player.
*/

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

export const App = () => {
  const [src, setSrc] = useState(VIDEOS.fast);

	return (
      <div>
        <h1>Video Player</h1>
        <Menu />
        <Video />
      </div>
    );
}