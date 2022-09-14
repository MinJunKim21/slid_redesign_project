import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

function DownloadVersion() {
  return (
    <div className="bg-zinc-100 mt-20 pb-10">
      <div>
        <div className="flex flex-col justify-center mx-auto text-center pt-10 space-y-4">
          <h3 className="font-semibold mt-5 text-2xl">
            지금 슬리드를 사용해보세요!
          </h3>
          <h4 className="text-xl text-gray-400">
            같이 사용하면 시너지도 두 배
          </h4>
        </div>

        <dd className="px-4 md:flex mt-10 justify-center max-w-7xl mx-auto ">
          <div className="flex justify-between mx-auto m-4 px-5 bg-white rounded-lg py-4   h-[190px] w-full max-w-[450px] md:w-full md:mx-4 ">
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="font-semibold text-lg">웹 익스텐션</h5>
                <h6 className="text-gray-400 text-sm ">
                  브라우저에서 가볍게 즐기는 슬리드
                </h6>
              </div>
              <Link href="https://chrome.google.com/webstore/detail/slid-youtube-screenshot-n/cgajiilhmpfemmdihjnodpibaffakjhj">
                <button className="flex items-center  text-[#1981f8]">
                  <span>Chrome에 무료로 추가하기</span>
                  <i>
                    <AiOutlineRight />
                  </i>
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Image
                  src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_chrome_logo.png&w=64&q=75"
                  // layout="fill"
                  height={50}
                  width={50}
                  objectFit="contain"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_whale_logo.png&w=64&q=75"
                  // layout="fill"
                  height={50}
                  width={50}
                  objectFit="contain"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_edge_logo.png&w=64&q=75"
                  // layout="fill"
                  height={50}
                  width={50}
                  objectFit="contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mx-auto m-4 px-5 bg-white rounded-lg py-4   h-[190px] w-full max-w-[450px] md:w-full md:mx-4 ">
            <div className="flex flex-col justify-between">
              <div>
                <h5 className="font-semibold text-lg">데스크톱 앱</h5>
                <h6 className="text-gray-400 text-sm ">
                  실시간 강의부터 웨비나까지 모두
                </h6>
              </div>
              <Link href="https://www.slid.cc/download">
                <button className="flex items-center  text-[#1981f8]">
                  <span>데스크톱용 슬리드 다운로드</span>
                  <i>
                    <AiOutlineRight />
                  </i>
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-start space-y-2 ">
              <div>
                <Image
                  src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_windows_logo.png&w=64&q=75"
                  // layout="fill"
                  height={50}
                  width={50}
                  objectFit="contain"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_mac_logo.png&w=64&q=75"
                  // layout="fill"
                  height={50}
                  width={50}
                  objectFit="contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </dd>
      </div>
    </div>
  );
}

export default DownloadVersion;
