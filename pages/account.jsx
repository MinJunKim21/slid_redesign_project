import useAuth from '../hooks/useAuth';
import { VscChevronLeft } from 'react-icons/vsc';
import Link from 'next/link';

function account() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col">
      <Link href="/docs">
        <button className="absolute top-12 text-3xl px-4 ">
          <VscChevronLeft />
        </button>
      </Link>
      <h3 className="mx-auto mt-12 text-lg border-b w-full flex justify-center pb-4  ">
        메뉴
      </h3>
      <div className="px-6 flex flex-col space-y-3 mt-6 pb-6 border-b">
        <h5 className="text-xl font-bold">사용자 아이디</h5>
        <h6 className="text-gray-400 text-lg font-light">{user.email}</h6>
      </div>
      <h5 className="px-6 mt-6 pb-6 border-b text-lg">삭제된 노트</h5>
      <div className="px-6 flex flex-col text-lg pt-6 space-y-6">
        <h5>회원권</h5>
        <h5>결제 내역</h5>
        <h5>로그아웃</h5>
        <div className="flex justify-between">
          <h5>앱 버전</h5>
          <span className="text-gray-400 font-light text-sm">v 2.18 2</span>
        </div>
        <h5 className="text-red-400">회원 탈퇴</h5>
      </div>
    </div>
  );
}

export default account;
