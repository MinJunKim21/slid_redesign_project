import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

function signin() {
  return (
    <div className="flex flex-col justify-center mx-16 mt-32 max-w-xl ">
      <div className="justify-center mx-auto">
        <Image
          src="https://www.slid.cc/src/logo/slid_logo_with_text.png"
          layout="fixed"
          height={50}
          width={100}
          alt=""
        />
      </div>
      <button className="flex items-center justify-center space-x-3 text-lg font-semibold border border-black rounded-lg px-5 py-4  mt-8 ">
        <i className="text-xl">
          <FcGoogle />
        </i>
        <span>구글 계정으로 로그인하기</span>
      </button>
      <button className="flex items-center justify-center space-x-3 text-lg font-semibold border border-black rounded-lg px-5 py-4  mt-4 ">
        <i className="text-2xl">
          <AiFillApple />
        </i>
        <span>애플 계정으로 로그인하기</span>
      </button>

      <div className="flex mt-8 items-center space-x-2 ">
        <hr className="border-1 border-gray-600 flex flex-grow opacity-30" />
        <span className="text-xs  text-gray-500">또는</span>
        <hr className="border-1 border-gray-600 flex flex-grow opacity-30" />
      </div>

      <form className="flex flex-col ">
        <label className="mt-4">이메일</label>
        <input
          type="email"
          placeholder="hello@slid.cc"
          className="border-[2px] rounded-md p-1 px-3 mt-2"
        />
        <label className="mt-4">비밀번호</label>
        <input
          type="password"
          className="border-[2px] rounded-md p-1 px-3 mt-2"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-md text-lg font-semibold text-white mt-8 py-2 px-4"
        >
          로그인
        </button>
      </form>
      <hr className="border-1 border-gray-600 flex flex-grow mt-4 opacity-30" />

      <span className="mt-4 text-[#2d85e9]">비밀번호를 잊으셨나요?</span>
      <div className="mt-2 flex space-x-2">
        <span>슬리드에 처음이신가요?</span>
        <span className="text-[#2d85e9]">회원가입</span>
      </div>
    </div>
  );
}

export default signin;
