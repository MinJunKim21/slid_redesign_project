import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

function ReviewOne({ mentOne, mentTwo, mentThree, webLink }) {
  return (
    <div className="sm:p-2 lg:p-4 cursor-pointer ">
      <Link href={`${webLink}`}>
        <div className="bg-[#e8f3ff] rounded-xl py-4 px-5 flex flex-col w-[330px] h-[170px] justify-between lg:w-[500px] lg:h-[250px] shadow-md lg:shadow-lg">
          <div>
            <h6 className="text-sm font-semibold mb-2 text-[#135db2] lg:text-lg">
              {mentOne}
            </h6>
            <span className="text-sm mb-6 text-[#2f77c9] lg:text-base">
              {mentTwo}
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-500 flex justify-end mb-2 lg:text-sm">
              {mentThree}
            </span>
            <div className="flex items-center space-x-1 text-gray-700 text-xs justify-end font-semibold lg:text-sm">
              <span className="">블로그 후기 자세히 보기</span>
              <i>
                <AiOutlineRight />
              </i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ReviewOne;
