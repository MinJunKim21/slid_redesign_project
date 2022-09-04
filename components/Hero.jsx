import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <div className="pt-[60px] pl-2">
        <div className="flex justify-center ml-3 mx-auto">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslid_landing_one_click_capture.1c2c71eb.png&w=1080&q=75"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="space-y-2 py-4">
          <h1 className="text-3xl font-semibold text-center">영상 속 지식이</h1>
          <h1 className="text-3xl font-semibold text-center">
            클릭만 하면 내 것으로
          </h1>
        </div>
        <h3 className="text-lg text-center flex flex-col">
          <span>
            슬리드만의 <b>쉽고 빠른 캡쳐 필기</b>로
          </span>
          <span>영상 속 지식을 간편하게 기록하세요.</span>
          필기 시간을 절반으로 줄여드릴게요.
        </h3>
      </div>
      <button className="flex justify-center space-x-3 mx-auto mt-10">
        <a className="text-white bg-[#2e90ff] rounded-lg py-4 px-7 hover:bg-blue-500">
          무료 플랜 시작하기
        </a>
        <a className="border border-black rounded-lg py-3.5 px-7 cursor-pointer hover:bg-slate-200 font-bold">
          가입 없이 체험하기
        </a>
      </button>
    </div>
  );
}
