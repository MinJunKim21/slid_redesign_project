import useAuth from '../hooks/useAuth';
import { CgMenu } from 'react-icons/Cg';
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
          placeholder="🔎제목 또는 내용을 검색하세요."
          className="p-2 w-full shadow-md rounded-full"
        />
      </div>
      {/* <div onClick={logout}>logout</div> */}
      <div className="px-10 pt-10">
        <h3 className="font-bold">내 노트함</h3>
        <h4>
          Folders <span>0</span>
        </h4>
        <select name="" id="">
          <option value="0">생성일순</option>
          <option value="1">이름순</option>
          <option value="2">최종 수정일순</option>
        </select>
        <button>새 폴더 만들기</button>
        <h4>
          Notes <span>5</span>
        </h4>
        {showMenu === true ? <LoggedInMenu /> : <></>}
      </div>
    </div>
  );
}

export default Docs;
