import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function MessageModal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div open={true}>
      <div className="fixed top-0 z-50 bg-black bg-opacity-70 w-screen h-screen"></div>
      <div className="bg-[#f2f2f2] w-50 h-50 fixed top-0 left-0 mt-12 z-50 w-full h-full rounded-t-[30px]">
        <div className="px-6 pt-2">
          <div className="flex items-center justify-between">
            <Image
              src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
              layout="fixed"
              height={40}
              width={80}
              alt=""
            />
            <div onClick={handleClose} className="cursor-pointer">
              <i>
                <GrClose />
              </i>
            </div>
          </div>
          <h5 className="text-gray-400">Slid Customer Support</h5>
        </div>

        <div className=" bg-white rounded-xl mx-4 mt-4 p-4  ">
          <div className="flex">
            <div className="">
              <Image
                src="/favicon.png"
                layout="fixed"
                height={30}
                width={30}
                alt=""
              />
            </div>
            <div className="mx-3">
              <h5 className="text-sm font-semibold">Slid</h5>
              <p className="text-sm">
                안녕하세요, 슬리드 팀입니다!👋
                <br />
                알고 싶은 내용을 아래에서 선택해주세요!
                <br />
                <br />
                미리 준비된 답변을 통해 더욱 빠르게 궁금증을 해소할 수 있어요!😄
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-center bg-gradient-to-r from-[#4a9eff] to-blue-600 rounded-xl py-3 text-white text-sm font-semibold mt-4">
            <i>
              <FaPaperPlane />
            </i>
            <span>새 문의하기</span>
          </div>
          <div className="flex space-x-1 items-center justify-center text-xs text-gray-500 mt-2">
            <i>
              <BsLightningChargeFill />
            </i>
            <span>보통 몇 분 내 빠른 답변</span>
          </div>
        </div>

        <div className=" bg-white rounded-xl mx-4 mt-4 px-4 py-3 flex justify-between items-center ">
          <span className="text-sm text-gray-400">다른 방법으로 상담</span>
          <span className="flex items-center space-x-2 ">
            <i className="bg-yellow-400 p-1 text-xl rounded-xl">
              <RiKakaoTalkFill />
            </i>
            <i className="bg-gray-300 text-xl text-gray-500 p-1 rounded-xl">
              <MdPhone />
            </i>
          </span>
        </div>
        <span className="text-xs text-gray-500 justify-center flex mt-4">
          채널톡 미사용중
        </span>
      </div>
    </div>
  );
}

export default MessageModal;
