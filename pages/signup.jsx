import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Signup() {
  const router = useRouter();
  const { user } = useAuth();
  if (user) {
    router.push('/');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const onSubmit = async ({ displayName, email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(displayName, email, password);
    }
  };

  return (
    <div className="flex flex-col justify-center px-4 mt-20 max-w-md mx-auto">
      <div className="justify-center mx-auto cursor-pointer">
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
      <button className="flex items-center justify-center space-x-3 text-lg font-semibold border border-black rounded-lg px-5 py-4  mt-8 ">
        <i className="text-xl">
          <FcGoogle />
        </i>
        <span>구글 계정으로 가입하기</span>
      </button>
      <button className="flex items-center justify-center space-x-3 text-lg font-semibold border border-black rounded-lg px-5 py-4  mt-4 ">
        <i className="text-2xl">
          <AiFillApple />
        </i>
        <span>애플 계정으로 가입하기</span>
      </button>

      <div className="flex mt-8 items-center space-x-2 ">
        <hr className="border-1 border-gray-600 flex flex-grow opacity-30" />
        <span className="text-xs  text-gray-500">또는</span>
        <hr className="border-1 border-gray-600 flex flex-grow opacity-30" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <label className="mt-4">닉네임</label>
        <input
          type="text"
          placeholder="Sliddy"
          className="border-[1px] border-gray-300 rounded-md p-1 px-3 mt-2"
          {...register('displayName', { required: true })}
        />
        <label className="mt-4">이메일</label>
        <input
          type="email"
          placeholder="hello@slid.cc"
          className="border-[2px] rounded-md p-1 px-3 mt-2"
          {...register('email', { required: true })}
        />
        <span className="text-xs text-gray-500 mt-1">
          테스트용 임시 이메일을 사용해주세요.
        </span>
        <label className="mt-4">비밀번호</label>
        <input
          type="password"
          placeholder=""
          className="border-[2px] rounded-md p-1 px-3 mt-2"
          {...register('password', { required: true })}
        />
        <span className="text-xs text-gray-500 mt-1">
          8자 이상의 비밀번호를 입력해주세요.
        </span>
        <button
          type="submit"
          className="bg-blue-500 rounded-md text-lg font-semibold text-white mt-8 py-2 px-4"
        >
          회원가입
        </button>
      </form>
      <span className="text-xs text-gray-500 mt-8">
        가입하기 버튼을 클릭하면 Slid의
        <span className="text-[#2d85e9]"> 서비스 약관</span>과{' '}
        <span className="text-[#2d85e9]">개인정보 수집 및 이용 동의서</span>에
        동의하게 됩니다. 슬리드로부터 이메일을 받을 수 있으며 알림은 언제든지
        수신 거부할 수 있습니다.
      </span>
      <hr className="border-1 border-gray-600 flex flex-grow mt-4 opacity-30" />

      <div className="mt-2 flex space-x-2">
        <span>이미 회원이신가요?</span>
        <Link href="/signin">
          <span className="text-[#2d85e9] mb-20 cursor-pointer">로그인</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
