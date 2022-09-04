import Image from 'next/image';
import { BsCheck2 } from 'react-icons/Bs';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdBrowsers } from 'react-icons/io';
import { BiLaptop } from 'react-icons/bi';

function Instruction() {
  return (
    <div>
      <div>
        <h3 className="font-semibold text-lg mt-20 px-4 ">
          동영상 핵심 장면을 1초 만에 <br /> 내 것으로 만드는 &#39;원클릭
          캡쳐&#39;
        </h3>
        <h4 className="text-md px-4 pt-5 pb-5 ">
          클릭 한번으로 원하는 부분을 캡쳐하고, 캡쳐에 바로 메모까지!
        </h4>
        <Image
          src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslid_landing_one_click_capture.1c2c71eb.png&w=1080&q=75"
          // layout="fill"
          height={455}
          width={635}
          objectFit="contain"
          alt=""
        />
      </div>

      <div>
        <h3 className="font-semibold text-lg mt-20 px-4 text-right ">
          안전하게 저장되고, 실시간 동기화 되는 내 노트함
        </h3>
        <h4 className="text-md px-4 pt-5 pb-5  text-right">
          내 노트함에 자동 저장되어, 모바일/태블릿에서 언제든지 복습가능
        </h4>
        <Image
          src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslid_landing_my_docs.2662558d.png&w=640&q=75"
          // layout="fill"
          height={455}
          width={635}
          objectFit="contain"
          alt=""
        />
      </div>

      <div>
        <h3 className="font-semibold text-lg mt-20 px-4 ">
          작성한 노트를 다양한 포맷으로 공유 및 다운로드
        </h3>
        <h4 className="text-md px-4 pt-5 pb-5 ">
          작성한 노트를 다양한 포맷으로 공유해보세요. (PDF, 워드, 이미지, 노션
          지원)
        </h4>
        <Image
          src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslid_share_and_export.0dcf07f4.png&w=640&q=75"
          // layout="fill"
          height={455}
          width={635}
          objectFit="contain"
          alt=""
        />
      </div>

      <button className="flex justify-center mx-auto space-x-5 mt-20">
        <div className="flex items-center space-x-2 py-5 px-3 bg-white drop-shadow-md rounded-lg text-md font-semibold text-[#1981f8]">
          <i>
            <IoMdBrowsers />
          </i>
          <span>웹 익스텐션</span>
        </div>
        <div className="flex items-center space-x-2 py-5 px-3 bg-white drop-shadow-md rounded-lg text-md font-semibold">
          <i>
            <BiLaptop />
          </i>
          <span>데스크톱용 앱</span>
        </div>
      </button>

      <div>
        <h2 className="font-semibold text-2xl mt-10 px-4 text-center ">
          이렇게나 간편한 공부
        </h2>
        <h5 className="text-center text-md font-light text-gray-600 mt-7">
          가장 효율적인 공부 방법, 브라우저에서 만나는 슬리드
        </h5>
        <div className="flex items-center space-x-2 justify-center text-sm font-normal ">
          <i>
            <BsCheck2 />
          </i>
          <span>설치 없이 브라우저에 추가해 간편하게 쓸 수 있어요.</span>
        </div>
        <div className="flex items-center space-x-2 justify-center text-sm font-normal ">
          <i>
            <BsCheck2 />
          </i>
          <span>
            캡쳐와 동시에 구간 북마크까지, 공부에 꼭 필요한 유용한 기능들만
            모아뒀어요.
          </span>
        </div>

        <button>
          <span>Chrome에 무료로 추가하기</span>
          <i>
            <AiOutlineRight />
          </i>
        </button>
        <Image
          src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_extension_platform.png&w=640&q=75"
          // layout="fill"
          height={455}
          width={635}
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
}

export default Instruction;
