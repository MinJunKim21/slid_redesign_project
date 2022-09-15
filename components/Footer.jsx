import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-gray-100 pt-5 pb-10">
      <div className=" px-4 pb-5 pt-5 flex  justify-between max-w-7xl mx-auto  ">
        <div className="">
          <span className="text-xs text-[#7b7b7b]">
            Copyright © 2022 이 사이트는 Slid 사이트 clone 입니다.
          </span>
          <div className="flex flex-wrap pt-2 text-xs text-gray-400 max-w-sm">
            <span>주식회사 비브리지&nbsp;</span>
            <span> |&nbsp; </span>
            <span>사업자 등록번호 380-81-01791&nbsp; </span>
            <span>|&nbsp; </span>
            <span>통신판매업 2021-서울마포-1675&nbsp; </span>
            <span>|&nbsp; </span>
            <span>대표 박정현&nbsp; </span>
            <span>|&nbsp; </span>
            <span>이메일 master@slid.cc&nbsp; </span>
            <span>|&nbsp; </span>
            <span>대표전화 070-7750-3330&nbsp; </span>
            <span>|&nbsp; </span>
            <span>
              주소 서울시 마포구 마포대로 122, 18층(공덕동, 프론트원)&nbsp;{' '}
            </span>
          </div>
        </div>

        <di className="flex sm:flex-col sm:items-end space-y-4">
          <div className="text-xs pt-2 min-w-sm">
            <span>개인정보 처리방침&nbsp; </span>
            <span> |&nbsp; </span>
            <span>이용 약관</span>
          </div>
          <div className="cursor-pointer hidden sm:flex ">
            <Link href="/">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=283961&theme=light" />
            </Link>
          </div>
        </di>
      </div>
    </div>
  );
}

export default Footer;
