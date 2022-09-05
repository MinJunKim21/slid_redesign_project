import Link from 'next/link';
import { GoPlus } from 'react-icons/go';

function ReviewOne({ mentOne, mentTwo, mentThree, webLink }) {
  return (
    <div>
      <Link href={`${webLink}`}>
        <div className="bg-[#e8f3ff] rounded-xl py-4 px-5 flex flex-col w-[330px] h-[170px] justify-between">
          <div>
            <h6 className="text-sm font-semibold mb-2 text-[#135db2]">
              {mentOne}
            </h6>
            <span className="text-sm mb-6 text-[#2f77c9]">{mentTwo}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 flex justify-end mb-2">
              {mentThree}
            </span>
            <div className="flex items-center space-x-1 text-gray-500 text-xs justify-end">
              <span>자세히 보기</span>
              <i>
                <GoPlus />
              </i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ReviewOne;
