import ReactPlayer from 'react-player/lazy';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

function VideoPart() {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });
  return (
    <div>
      <div>
        <h2 className="flex justify-center mt-20 text-[#1981f8] font-semibold text-4xl">
          Why Slid?
        </h2>
        <h3 className="font-semibold text-xl mt-20 px-4 text-center md:text-2xl">
          잊기 쉬운 동영상 속 지식을
          <br className="md:hidden" /> 캡쳐 한번으로 평생 소장!
        </h3>
        <h4 className="text-md pl-4 pt-5 pb-5 text-center md:text-xl">
          동영상 강의를 시청하며 영상 캡쳐,
          <br className="md:hidden" /> 메모 작성, 캡쳐 이미지 위 필기를 동시에!
        </h4>
      </div>
      <div className="max-w-6xl mx-auto">
        <ReactPlayer
          url="https://slid-public-assets.s3.us-west-1.amazonaws.com/Design/landing_slid_extension_intro.webm"
          width="100%"
          height="100%"
          // style={{ position: 'absolute', top: '0', left: '0' }}
          playing
          loop
          muted={true}
        />
      </div>
    </div>
  );
}

export default VideoPart;
