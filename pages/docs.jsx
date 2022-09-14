import useAuth from '../hooks/useAuth';
import { CgMenu } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import LoggedInMenu from '../components/LoggedInMenu';
import { useRecoilState } from 'recoil';
import { menuModalState } from '../atoms/modalAtom';
import Link from 'next/link';

function Docs() {
  const { user } = useAuth();
  const { logout } = useAuth();
  const { nickName } = useAuth();
  // user.displayName = { nickName };
  const [showMenu, setShowMenu] = useRecoilState(menuModalState);

  return (
    <div className="mx-w-xl">
      <div className="flex relative space-x-3 pt-12 px-4 items-center">
        <Link href="/account">
          <button className="  text-2xl">
            <CgMenu />
          </button>
        </Link>
        {/* <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="text-2xl"
        >
          open menu
        </button> */}
        <input
          type="text"
          placeholder="🔎 제목 또는 내용을 검색하세요."
          className="px-5 py-3 w-full shadow-md rounded-full"
        />
      </div>
      {/* <div onClick={logout}>logout</div> */}
      <div className="px-10 pt-10">
        <h3 className="font-bold">내 노트함</h3>
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
        <button className="mt-6 w-full flex border rounded-lg border-gray-300 text-sm p-4">
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
        <div></div>
        {/* {showMenu === true ? <LoggedInMenu /> : <></>} */}
      </div>
    </div>
  );
}

export default Docs;
