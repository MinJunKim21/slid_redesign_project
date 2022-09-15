import Image from 'next/image';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

function TopBar() {
  const { user } = useAuth();
  const { logout } = useAuth();

  return (
    <div>
      {user ? (
        <div className="fixed pt-2 px-4 mb-5 z-50 bg-white w-full">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <Link href="/">
                <Image
                  src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
                  layout="fixed"
                  height={50}
                  width={100}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center text-xs font-semibold space-x-2 sm:space-x-4 sm:text-sm lg:text-base">
              <div className="hidden md:flex md:text-gray-700 md:space-x-4">
                <Link href="https://slid.oopy.io/career/ko/about">
                  <span>제품 소개</span>
                </Link>
                <Link href="https://slid.oopy.io/career/ko/team">
                  <span>회사 소개</span>
                </Link>
                <Link href="https://www.venturesquare.net/859637">
                  <span>언론소식</span>
                </Link>
                <Link href="https://slid.oopy.io/career/ko">
                  <span>채용</span>
                </Link>
                <span>FAQ</span>
                <div onClick={logout} className="cursor-pointer">
                  로그아웃
                </div>
              </div>
              <div className=" hidden sm:flex text-gray-600  ">
                <Link href="https://www.slid.cc/en">
                  <div className="flex items-center space-x-2  group">
                    <HiOutlineGlobeAlt className="lg:text-2xl sm:text-xl" />
                    <span className="hidden group-hover:flex group-hover:text-lg font-normal ">
                      Eng
                    </span>
                  </div>
                </Link>
              </div>
              <Link href="/pricing">
                <span className="border border-black rounded-lg py-1.5 px-3 cursor-pointer hover:bg-slate-200">
                  요금제
                </span>
              </Link>

              <Link href="/docs">
                <span className="text-white bg-[#2e90ff] rounded-lg py-2 px-3 hover:bg-blue-500">
                  내 노트함
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed pt-2 px-4 mb-5 z-50 bg-white w-full">
          <div className="flex items-center justify-between cursor-pointer">
            <Link href="/">
              <Image
                src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
                layout="fixed"
                height={50}
                width={100}
                alt=""
              />
            </Link>

            <div className="text-xs items-center flex font-semibold space-x-2 sm:space-x-4 sm:text-sm lg:text-base ">
              <div className="hidden md:flex md:text-gray-700 md:space-x-4">
                <Link href="https://slid.oopy.io/career/ko/about">
                  <span>제품 소개</span>
                </Link>
                <Link href="https://slid.oopy.io/career/ko/team">
                  <span>회사 소개</span>
                </Link>
                <Link href="https://www.venturesquare.net/859637">
                  <span>언론소식</span>
                </Link>
                <Link href="https://slid.oopy.io/career/ko">
                  <span>채용</span>
                </Link>
                <span>FAQ</span>
              </div>
              <div className=" hidden sm:flex text-gray-600  ">
                <Link href="https://www.slid.cc/en">
                  <div className="flex items-center space-x-2  group">
                    <HiOutlineGlobeAlt className="lg:text-2xl md:text-xl" />
                    <span className="hidden group-hover:flex group-hover:text-lg font-normal ">
                      Eng
                    </span>
                  </div>
                </Link>
              </div>
              <Link href="/signin">
                <span className="border border-black rounded-lg py-1.5 px-3 cursor-pointer hover:bg-slate-200">
                  로그인
                </span>
              </Link>
              <Link href="/signup">
                <span className="text-white bg-[#2e90ff] rounded-lg py-2 px-3 hover:bg-blue-500">
                  무료 플랜 시작하기
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
