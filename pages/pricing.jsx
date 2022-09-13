import TopBar from '../components/TopBar';
import { HiCheck } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';
import HelpPopup from '../components/HelpPopup';
import MessageModal from '../components/MessageModal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Link from 'next/link';

function Pricing() {
  const [showModal, setShowModal] = useRecoilState(modalState);

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
    <div className="max-w-xl px-4 pt-2 mb-20">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
              layout="fixed"
              height={40}
              width={80}
              alt=""
            />
          </Link>
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

      <div className="bg-gray-200 rounded-md p-1 mt-4 ">
        <div className=" relative bg-gray-200 rounded-md flex justify-around p-1">
          <div
            className={`bg-white absolute left-0 top-0 h-full p-2 x w-[50%] rounded-md py-1 ${
              isMoved
                ? 'translate-x-[100%]  ease-out duration-300'
                : 'translate-x-[0%] ease-out duration-300'
            } `}
          ></div>
          <button
            onClick={() => moveButtonLeft()}
            className={`flex w-full rounded-md py-1 z-50 ${
              isMoved
                ? 'text-gray-400 ease-out duration-300'
                : 'text-black ease-out duration-300'
            }`}
          >
            <span className="mx-auto ">12개월 회원권</span>
          </button>
          <button
            onClick={() => moveButtonRight()}
            className={`flex w-full rounded-md py-1 z-50 ${
              isMoved
                ? 'text-black ease-out duration-300'
                : 'text-gray-400 ease-out duration-300'
            }`}
          >
            <span className="mx-auto ">1개월 회원권</span>
          </button>
        </div>
      </div>

      <div className="border-2 rounded-xl mt-8 py-8 px-6 h-[560px] flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl border-b-2 border-black pb-2">
            무료
          </h3>
          <h2 className="pt-4 text-3xl font-semibold">0원</h2>

          <div className="mt-12">
            <ul className="flex flex-col space-y-2">
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
              <li className="text-[#969696] space-x-2 flex items-baseline">
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
        </div>
        <button className="text-lg font-semibold text-gray-300 bg-gray-100 rounded-lg w-full py-4 mt-8">
          현재 이용 중
        </button>
      </div>

      <div className="border-[3px] rounded-xl mt-8 py-8 px-6 border-[#2e90ff] h-[560px] flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl border-b-2 border-[#2e90ff] text-[#2e90ff] pb-2">
            기본
          </h3>
          <h2 className="pt-4 text-3xl font-semibold">월 6,600원</h2>
          <h5 className="text-gray-400 pt-1">
            총 결제액 <span className="line-through">96,000</span> 80,000원
          </h5>

          <div className="mt-12">
            <ul className="flex flex-col space-y-2">
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무료 회원권의 모든 기능</span>
              </li>
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무제한 원클릭 캡처</span>
              </li>
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무제한 캡쳐 속 텍스트 추출</span>
              </li>
              <li className="text-[#969696] space-x-2 flex items-baseline">
                <span>
                  <HiCheck />
                </span>
                <div>
                  슬리드 200% 활용 1:1 원격강의
                  <br /> * 공부 생산성 10배 향상을 경험해보세요!
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="text-lg font-semibold text-white bg-[#2e90ff] rounded-lg w-full py-4 mt-8">
          결제하기
        </button>
      </div>

      <div className="border-2 rounded-xl mt-8 py-8 px-6 h-[560px] flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl border-b-2 border-[#2e90ff] pb-2 text-[#2e90ff]">
            프리미엄
          </h3>
          <h2 className="pt-4 text-3xl font-semibold">월 6,600원</h2>
          <h5 className="text-gray-400 pt-1">
            총 결제액 <span className="line-through">96,000</span> 80,000원
          </h5>

          <div className="mt-12">
            <ul className="flex flex-col space-y-2">
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무료 회원권의 모든 기능</span>
              </li>
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무제한 원클릭 캡처</span>
              </li>
              <li className="price-list">
                <span>
                  <HiCheck />
                </span>
                <span>무제한 캡쳐 속 텍스트 추출</span>
              </li>
              <li className="text-[#969696] space-x-2 flex items-baseline">
                <span>
                  <HiCheck />
                </span>
                <div>
                  무제한 60초 영상 클립 녹화
                  <br />
                  브라우저(크롬, 웨일 등)에서만 가능해요.
                  <br />
                  데스크톱(Zoom 등)에서는 준비 중이에요!
                </div>
              </li>
              <li className="text-[#969696] space-x-2 flex items-baseline">
                <span>
                  <HiCheck />
                </span>
                <div>
                  슬리드 200% 활용 1:1 원격강의
                  <br />* 공부 생산성 10배 향상을 경험해보세요!
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="text-lg font-semibold text-white bg-[#2e90ff] rounded-lg w-full py-4 mt-8">
          결제하기
        </button>
      </div>

      <HelpPopup />
      {showModal === true ? <MessageModal /> : <></>}
    </div>
  );
}

export default Pricing;
