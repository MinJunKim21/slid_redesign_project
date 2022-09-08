import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function MessageModal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div open={showModal} onClose={handleClose}>
      <div className="fixed top-0 z-50 bg-black bg-opacity-70 w-screen h-screen">
        bg
      </div>
      <div className="bg-[#f2f2f2] w-50 h-50 fixed top-0 left-0 mt-12 z-50 w-full h-full rounded-t-[30px]">
        <div className="px-4 pt-2">
          <div className="flex items-center justify-between">
            <Image
              src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
              layout="fixed"
              height={40}
              width={80}
              alt=""
            />
            <div onClick={handleClose}>
              <i>
                <GrClose />
              </i>
            </div>
          </div>
          <h5>Slid Customer Support</h5>
        </div>
      </div>
    </div>
  );
}

export default MessageModal;
