import Image from 'next/image';
import { HiCheck } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdBrowsers } from 'react-icons/io';
import { BiLaptop } from 'react-icons/bi';
import { useState } from 'react';

function Instruction() {
  const [leftClicked, setLeftClicked] = useState(true);

  return (
    <div className="lg:max-w-7xl mx-auto">
      <div className="md:flex md:mt-10 md:items-center md:mt-20 ">
        <div className="mx-auto justify-center">
          <h3 className="font-semibold text-lg mt-20 px-4 md:text-xl ">
            동영상 핵심 장면을 1초 만에 <br className="lg:hidden" /> 내 것으로
            만드는 &#39;원클릭 캡쳐&#39;
          </h3>
          <h4 className="text-md px-4 pt-5 pb-5 ">
            클릭 한번으로 원하는 부분을 캡쳐하고, 캡쳐에 바로 메모까지!
          </h4>
        </div>
        <div className="px-4 mx-auto">
          <Image
            src="/image.webp"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      <div className="md:flex-row-reverse md:flex md:items-center md:mt-10 md:items-center md:mt-20 md:mx-auto ">
        <div className="md:flex-col md:flex md:mx-auto">
          <h3 className="font-semibold text-lg mt-20  px-4 text-right md:my-auto md:text-xl ">
            안전하게 저장되고, 실시간 동기화 되는 내 노트함
          </h3>
          <h4 className="text-md px-4 pt-5 pb-5  text-right md:text-lg">
            내 노트함에 자동 저장되어, 모바일/태블릿에서 언제든지 복습가능
          </h4>
        </div>
        <div className="px-4 mx-auto">
          <Image
            src="/image1.webp"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      <div className="md:flex md:mt-10 md:items-center md:mt-20 ">
        <div className="mx-auto justify-center">
          <h3 className="font-semibold text-lg mt-20 px-4 md:my-auto md:text-xl">
            작성한 노트를 다양한 포맷으로 공유 및 다운로드
          </h3>
          <h4 className="text-md px-4 pt-5 pb-5 md:text-lg ">
            작성한 노트를 다양한 포맷으로 공유해보세요. (PDF, 워드, 이미지, 노션
            지원)
          </h4>
        </div>
        <div className="px-4 mx-auto">
          <Image
            src="/image2.webp"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex lg:mx-auto lg:justify-center lg:mt-20 lg:space-x-20">
        <div>
          <button className="flex justify-center mx-auto space-x-5 mt-20">
            <div
              onClick={() => {
                setLeftClicked(true);
              }}
              className={`flex items-center space-x-2 py-5 px-3 bg-white  rounded-lg text-md font-semibold ${
                leftClicked ? 'text-[#1981f8] drop-shadow-md ' : 'text-black'
              }`}
            >
              <i>
                <IoMdBrowsers />
              </i>
              <span>웹 익스텐션</span>
            </div>
            <div
              onClick={() => {
                setLeftClicked(false);
              }}
              className={`flex items-center space-x-2 py-5 px-3 bg-white  rounded-lg text-md font-semibold ${
                leftClicked ? 'text-black' : 'text-[#1981f8] drop-shadow-md '
              }`}
            >
              <i>
                <BiLaptop />
              </i>
              <span>데스크톱용 앱</span>
            </div>
          </button>

          <div>
            {leftClicked ? (
              <div>
                <h2 className="font-semibold text-2xl mt-10 px-4 text-center ">
                  이렇게나 간편한 공부
                </h2>
                <h5 className="text-center text-md font-light text-gray-400 mt-7">
                  가장 효율적인 공부 방법, 브라우저에서 만나는 슬리드
                </h5>
                <div className="px-7 mt-7 space-y-5 font-light flex flex-col justify-center mx-auto">
                  <div className="mx-auto justify-center space-y-4">
                    <div className="flex items-center space-x-2 text-sm font-normal ">
                      <i className="text-[#1981f8] font-bold text-lg">
                        <HiCheck />
                      </i>
                      <span className="font-normal">
                        설치 없이 브라우저에 추가해 간편하게 쓸 수 있어요.
                      </span>
                    </div>
                    <div className="flex items-begin space-x-2  text-sm font-normal ">
                      <i className="text-[#1981f8] font-bold text-lg">
                        <HiCheck />
                      </i>
                      <span>
                        캡쳐와 동시에 구간 북마크까지, 공부에 꼭 필요한
                        <br />
                        유용한 기능들만 모아뒀어요.
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center space-x-1 justify-center mx-auto mt-7">
                  <span className="text-[#1981f8] text-sm font-semibold">
                    Chrome에 무료로 추가하기
                  </span>
                  <i>
                    <AiOutlineRight className="text-[#1981f8] text-sm" />
                  </i>
                </button>
              </div>
            ) : (
              <div>
                <h2 className="font-semibold text-2xl mt-10 px-4 text-center ">
                  제약없는 영상 필기
                </h2>
                <h5 className="text-center text-md font-light text-gray-400 mt-7">
                  브라우저 밖에서도 사용하고 싶다면, 정답은 데스크톱 슬리드!
                </h5>
                <div className="px-7 mt-7 space-y-5 font-light flex flex-col justify-center mx-auto">
                  <div className="mx-auto justify-center space-y-4">
                    <div className="flex items-center space-x-2 text-sm font-normal ">
                      <i className="text-[#1981f8] font-bold text-lg">
                        <HiCheck />
                      </i>
                      <span className="font-normal">
                        Zoom, Webex 등 외부 플레이어에서도 사용 가능해요.
                      </span>
                    </div>
                    <div className="flex items-begin space-x-2  text-sm font-normal ">
                      <i className="text-[#1981f8] font-bold text-lg">
                        <HiCheck />
                      </i>
                      <span>
                        저장하고 싶은 화면을 직접 지정해 원하는 모든 화면을
                        <br />
                        캡쳐할 수 있어요.
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center space-x-1 justify-center mx-auto mt-7">
                  <span className="text-[#1981f8] text-sm font-semibold">
                    데스크톱용 슬리드 다운로드
                  </span>
                  <i>
                    <AiOutlineRight className="text-[#1981f8] text-sm" />
                  </i>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex justify-center mx-4">
          <Image
            src="/image3.webp"
            // layout="fill"
            height={455}
            width={635}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Instruction;
