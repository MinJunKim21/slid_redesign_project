import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

function DownloadVersion() {
  return (
    <div>
      <div>
        <div>
          <h3>지금 슬리드를 사용해보세요!</h3>
          <h4>같이 사용하면 시너지도 두 배</h4>
        </div>

        <div>
          <Image
            src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_chrome_logo.png&w=64&q=75"
            // layout="fill"
            height={50}
            width={50}
            objectFit="contain"
            alt=""
          />
          <Image
            src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_whale_logo.png&w=64&q=75"
            // layout="fill"
            height={50}
            width={50}
            objectFit="contain"
            alt=""
          />
          <Image
            src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_edge_logo.png&w=64&q=75"
            // layout="fill"
            height={50}
            width={50}
            objectFit="contain"
            alt=""
          />
        </div>

        <div>
          <h5>웹 익스텐션</h5>
          <h6>브라우저에서 가볍게 즐기는 슬리드</h6>
        </div>
        <button className="flex items-center">
          <span>Chrome에 무료로 추가하기</span>
          <i>
            <AiOutlineRight />
          </i>
        </button>
      </div>

      <div>
        <div>
          <Image
            src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_windows_logo.png&w=64&q=75"
            // layout="fill"
            height={50}
            width={50}
            objectFit="contain"
            alt=""
          />
          <Image
            src="https://www.slid.cc/_next/image?url=%2Fsrc%2Fdesign%2Fassets%2Fslid_landing_download_mac_logo.png&w=64&q=75"
            // layout="fill"
            height={50}
            width={50}
            objectFit="contain"
            alt=""
          />
        </div>

        <div>
          <h5>데스크톱 앱</h5>
          <h6>실시간 강의부터 웨비나까지 모두</h6>
        </div>
        <button className="flex items-center">
          <span>데스크톱용 슬리드 다운로드</span>
          <i>
            <AiOutlineRight />
          </i>
        </button>
      </div>
    </div>
  );
}

export default DownloadVersion;
