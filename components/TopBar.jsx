import Image from 'next/image';

function TopBar() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Image
          src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
          layout="fixed"
          height={50}
          width={100}
          alt=""
        />
        <div>
          <a>로그인</a>
          <a href="">무료 플랜 시작하기</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
