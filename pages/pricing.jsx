import TopBar from '../components/TopBar';
import { HiCheck } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';

function pricing() {
  const [isMoved, setIsMoved] = useState(false);
  const moveButtonRight = () => {
    if (isMoved === false) {
      setIsMoved(true);
    }
  };
  const moveButtonLeft = () => {
    if (isMoved === true) {
      setIsMoved(false);
    }
  };

  return (
    <div className="max-w-xl px-4  pt-2">
      <div className="flex justify-between">
        <div className="">
          <Image
            src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
            layout="fixed"
            height={40}
            width={80}
            alt=""
          />
        </div>
        <button>
          <span className="text-sm font-semibold border border-black rounded-lg px-3 py-2 hover:bg-gray-200">
            내 노트함
          </span>
        </button>
      </div>
      <div className="pt-10">
        <h1 className="text-center mx-auto text-2xl font-semibold">
          슬리드와 함께 영상 속 지식을
          <br />
          캡처하러 가볼까요?
        </h1>
        <h5 className="text-[14px] font-light text-center mx-auto mt-4">
          나에게 맞는 회원권을 선택해주세요.
        </h5>
      </div>

      <div className="bg-gray-200 rounded-md p-1 mt-4">
        <div className=" relative bg-gray-200 rounded-md flex justify-around p-2">
          <div
            className={`bg-white absolute left-0 top-0 h-full p-2 x w-[50%] rounded-md py-1 ${
              isMoved
                ? 'translate-x-[100%]  ease-out duration-300'
                : 'translate-x-[0%] ease-out duration-300'
            } `}
          ></div>
          <button
            onClick={() => moveButtonLeft()}
            className="flex w-full rounded-md py-1 z-50"
          >
            <span className="mx-auto ">12개월 회원권</span>
          </button>
          <button
            onClick={() => moveButtonRight()}
            className="flex w-full rounded-md py-1 z-50 "
          >
            <span className="mx-auto ">1개월 회원권</span>
          </button>
        </div>
      </div>

      <div>
        <h3>무료</h3>
        <hr />
        <h2>0원</h2>
      </div>

      <div>
        <ul className="flex flex-col">
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>화면 분할된 동영상 노트</span>
          </li>
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>매달 원클릭 캡처 200회</span>
          </li>
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>캡처 속 텍스트 추출 200회</span>
          </li>
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>캡처 위 펜 필기</span>
          </li>
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>노트를 PDF / 워드로 변환</span>
          </li>
          <li className="price-list">
            <span>
              <HiCheck />
            </span>
            <span>캡쳐한 구간 영상 다시 보기</span>
          </li>
          <li className="text-[#828282] space-x-1 flex items-baseline">
            <span>
              <HiCheck />
            </span>
            <div>
              매달 60초 영상 클립 녹화 20회
              <br /> 브라우저(크롬, 웨일 등)에서만 가능해요.
              <br />
              데스크톱(Zoom 등)에서는 준비 중이에요!
            </div>
          </li>
        </ul>
      </div>

      <button>현재 이용 중</button>
    </div>
  );
}

export default pricing;
