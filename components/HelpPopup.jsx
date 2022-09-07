import { useState } from 'react';
import { RiChatCheckLine } from 'react-icons/ri';
import MessageModal from './MessageModal';

function HelpPopup() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="relative">
      <button className="fixed right-0 bottom-0 " onClick={openModal}>
        <RiChatCheckLine className="absolute right-0 bottom-0 h-14 w-14 bg-white text-gray-400  border-2 rounded-full m-3 p-3" />
        <div className="absolute flex justify-center items-center font-extralight m-3 right-0 bottom-10 bg-red-500 w-5 h-5 rounded-full text-white text-xs text-center ">
          1
        </div>
      </button>
      {openModal && <MessageModal />}
    </div>
  );
}

export default HelpPopup;
