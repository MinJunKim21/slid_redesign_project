import Image from 'next/image';
import Link from 'next/link';

function Partners() {
  return (
    <div>
      <h3>PARTNERS</h3>
      <h4>
        새로운 온라인 학습 환경을 만드는 슬리드의 비전에 함께 해주시는
        분들입니다.
      </h4>

      <div>
        <Link href="http://www.mashupangels.com/?ref=slid">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmashup_angels_logo.7f77371e.png&w=256&q=75"
            // layout="fill"
            height={65}
            width={200}
            objectFit="contain"
            alt=""
          />
        </Link>
        <Link href="https://dcamp.kr/?ref=slid">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdcamp_logo.acb58063.png&w=640&q=75"
            // layout="fill"
            height={65}
            width={200}
            objectFit="contain"
            alt=""
          />
        </Link>
        <Link href="https://front1.kr/">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffront1_logo.2c9a0c30.png&w=1080&q=75"
            // layout="fill"
            height={65}
            width={200}
            objectFit="contain"
            alt=""
          />
        </Link>
        <Link href="https://www.likelion.net/?ref=slid">
          <Image
            src="https://www.slid.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flikelion_logo.9d6e8533.png&w=3840&q=75"
            // layout="fill"
            height={65}
            width={200}
            objectFit="contain"
            alt=""
          />
        </Link>
      </div>
      <button>
        <span>슬리드에 대해 더 알아보기</span>
      </button>
    </div>
  );
}

export default Partners;
