import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-[60px] pl-2 md:flex md:flex-row-reverse items-center ">
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

        <div className="min-w-[280px] space-y-6 mx-auto justify-center">
          <div className="space-y-2 py-4 md:ml-4 lg:ml-6">
            <h1 className="text-2xl font-semibold text-center md:text-left lg:text-3xl">
              영상 속 지식이
              <br />
              클릭만 하면 내 것으로
            </h1>
          </div>
          <h3 className="text-md text-center flex flex-col md:text-left md:ml-4  lg:ml-6 lg:text-lg">
            <span>
              슬리드만의 <b>쉽고 빠른 캡쳐 필기</b>로
            </span>
            <span>영상 속 지식을 간편하게 기록하세요.</span>
            필기 시간을 절반으로 줄여드릴게요.
          </h3>
          <div>
            <button className="flex justify-center  mx-auto mt-10">
              <span className="text-white bg-[#2e90ff] rounded-lg py-4 px-7 hover:bg-blue-500">
                Chrome에 무료로 추가하기
              </span>
            </button>
            <button className="flex items-center space-x-1 justify-center mx-auto mt-4">
              <span className="text-[#1981f8] font-semibold">
                데스크톱용 슬리드 다운로드
              </span>
              <i>
                <AiOutlineRight className="text-[#1981f8] text-sm" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
