import { IoIosArrowBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { menuModalState } from '../atoms/modalAtom';

function LoggedInMenu() {
  const [showMenu, setShowMenu] = useRecoilState(menuModalState);

  return (
    <div className="max-w-lg absolute top-0 left-0 flex h-screen w-full bg-red-300">
      <div className="flex">
        <div>
          <button
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <h3>메뉴</h3>
      </div>
    </div>
  );
}

export default LoggedInMenu;
