import useAuth from '../hooks/useAuth';
import { CgMenu } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import LoggedInMenu from '../components/LoggedInMenu';
import { useRecoilState } from 'recoil';
import { menuModalState } from '../atoms/modalAtom';
import Link from 'next/link';
import HelpPopup from '../components/HelpPopup';
import { modalState } from '../atoms/modalAtom';
import MessageModal from '../components/MessageModal';
import Image from 'next/image';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { MdAccountCircle } from 'react-icons/md';

function Docs() {
  const { user } = useAuth();
  const { logout } = useAuth();
  const { nickName } = useAuth();
  // user.displayName = { nickName };
  const [showMenu, setShowMenu] = useRecoilState(menuModalState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div className="flex">
      {showMenu && (
        <div className="bg-gray-100 h-screen w-[360px] hidden md:flex">
          <div className="w-full px-4">
            <div className="flex items-center  pt-6 justify-between">
              <Link href="/">
                <Image
                  src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
                  layout="fixed"
                  height={40}
                  width={80}
                  alt=""
                />
              </Link>
              <div
                onClick={() => setShowMenu(false)}
                className="text-2xl text-gray-500"
              >
                <HiOutlineChevronDoubleLeft />
              </div>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex flex-col">
                <h5 className="text-xl font-bold">사용자 아이디</h5>
                <h6 className="text-gray-400 text-md font-light">
                  {user?.email}
                </h6>
              </div>
              <span className="border border-black rounded-lg max-h-[35px]   px-4 cursor-pointer hover:bg-slate-200">
                계정
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-gray-100 h-screen w-[60px] hidden ${
          !showMenu && 'md:flex'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center px-4 pt-8 justify-between">
            <div
              onClick={() => setShowMenu(true)}
              className="text-2xl text-gray-500"
            >
              <HiOutlineChevronDoubleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex relative space-x-6 sm:space-x-10 pt-6 px-4 items-center max-w-xl mx-auto ">
          <div className="flex md:hidden">
            <Link href="/account">
              <button className="  text-2xl">
                <CgMenu />
              </button>
            </Link>
          </div>

          <input
            type="text"
            placeholder="🔎 제목 또는 내용을 검색하세요."
            className="px-5 py-3 w-full shadow-md rounded-full"
          />
          <div className="text-3xl flex md:hidden">
            <MdAccountCircle />
          </div>
        </div>
        <div className="px-10 pt-10">
          <h3 className="font-bold mb-6">내 노트함</h3>
          <div className="flex justify-between">
            <h4>
              Folders <span className="text-[#1981f8]">0</span>
            </h4>
            <select className="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
              <option value="0">생성일순</option>
              <option value="1">이름순</option>
              <option value="2">최종 수정일순</option>
            </select>
          </div>
          <button className="mt-6 w-full flex border rounded-lg border-gray-300 text-sm p-4 max-w-[240px]">
            <div className="flex items-center justify-center mx-auto space-x-2 text-gray-500">
              <i>
                <AiOutlinePlus />
              </i>
              <span>새 폴더 만들기</span>
            </div>
          </button>
          <h4 className="mt-8">
            Notes <span className="text-[#1981f8]">5</span>
          </h4>
          <div className="flex flex-col  border rounded-lg w-full h-[250px] max-w-[300px] relative">
            <div className="h-[130px]">picture</div>
            <p className="px-4 text-xs">you can note something here </p>
            <span className="absolute p-4 text-xs text-gray-400 left-0 bottom-0">
              2022.09.12
            </span>
          </div>

          <HelpPopup />
          {showModal === true ? <MessageModal /> : <></>}
          {/* {showMenu === true ? <LoggedInMenu /> : <></>} */}
        </div>
      </div>
    </div>
  );
}

export default Docs;
