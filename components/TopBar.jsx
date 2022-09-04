import Image from 'next/image';

function TopBar() {
  return (
    <div className="fixed pt-2 px-4 mb-5 z-50 bg-white w-full">
      <div className="flex items-center justify-between">
        <Image
          src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
          layout="fixed"
          height={50}
          width={100}
          alt=""
        />
        <div className="text-xs font-semibold space-x-2">
          <span className="border border-black rounded-lg py-1.5 px-3 cursor-pointer hover:bg-slate-200">
            로그인
          </span>
          <span
            href="/signup"
            className="text-white bg-[#2e90ff] rounded-lg py-2 px-3 hover:bg-blue-500"
          >
            무료 플랜 시작하기
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
