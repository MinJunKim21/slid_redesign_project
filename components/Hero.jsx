import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <div>
        <div className="">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslid_landing_one_click_capture.1c2c71eb.png&w=1080&q=75"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
        <h1>영상 속 지식이 클릭만 하면 내 것으로</h1>
        <h3>
          슬리드만의 <b>쉽고 빠른 캡쳐 필기</b>로 영상 속 지식을 간편하게
          기록하세요.
          <br />
          필기 시간을 절반으로 줄여드릴게요.
        </h3>
      </div>
      <div>
        <a>무료 플랜 시작하기</a>
        <a>가입 없이 체험하기</a>
      </div>
    </div>
  );
}
