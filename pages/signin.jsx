import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

function Signin() {
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

  const onSubmit = async ({ email, password }) => {
    if (login === false) {
      await signIn(email, password);
    }
  };

  return (
    <div className="flex flex-col justify-center px-4 mt-20 max-w-md mx-auto ">
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

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <label className="mt-4">이메일</label>
        <input
          type="email"
          placeholder="hello@slid.cc"
          className="border-[2px] rounded-md p-1 px-3 mt-2"
          {...register('email', { required: true })}
        />
        {errors.email && <p>이메일을 입력해주세요.</p>}

        <label className="mt-4">비밀번호</label>
        <input
          type="password"
          className="border-[2px] rounded-md p-1 px-3 mt-2"
          {...register('password', { required: true })}
        />
        {errors.password && <span>비밀번호를 입력해주세요.</span>}

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
        <Link href="/signup">
          <span className="text-[#2d85e9] hover:underline cursor-pointer ">
            회원가입
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
