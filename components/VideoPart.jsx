import ReactPlayer from 'react-player/lazy';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

function VideoPart() {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });
  return (
    <div>
      <ReactPlayer
        url="https://slid-public-assets.s3.us-west-1.amazonaws.com/Design/landing_slid_extension_intro.webm"
        width="100%"
        height="100%"
        // style={{ position: 'absolute', top: '0', left: '0' }}
        playing
        muted={true}
      />
    </div>
  );
}

export default VideoPart;
