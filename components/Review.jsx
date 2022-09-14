import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import ReviewOne from './ReviewOne';

function Review() {
  return (
    <div className=" mx-auto">
      <h3 className="flex flex-col space-y-1 justify-center mx-auto text-xl text-center font-bold mt-20 px-10 lg:text-2xl">
        <span>
          1만 명의 온라인 학습자들이 <br className="md:hidden" />
          슬리드로 공부하고 있어요.
        </span>
      </h3>
      <div className="flex justify-center mx-auto space-x-3 mt-5 text-lg">
        <h5>Chrome Ratings</h5>
        <div className="flex items-center space-x-1">
          <span className="flex text-[#1981f8] text-xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <span className="text-[#1981f8] text-md font-bold">4.7</span>
        </div>
      </div>
      <div className="mt-10 mx-4 flex overflow-scroll scrollbar-hide space-x-3 sm:flex sm:flex-wrap sm:mx-auto sm:justify-center sm:space-x-0">
        <ReviewOne
          mentOne="처음 에버노트를 만났을 때의 그런 느낌이랄까..."
          mentTwo="슬리드는 온라인 강의에 특화된 편집 툴"
          mentThree="- [온라인 수업 강의 필수품:slid] 요물이로다...!"
          webLink="https://blog.naver.com/raon2029/222173426676"
        />
        <ReviewOne
          mentOne="완전 신세계를 체험하는 것 같았어요."
          mentTwo="이제는 거의 &#39;슬리드&#39; 없이 강의 듣는 걸 상상할 수가 없을
          정도랍니다...ㅎㅎㅎ"
          mentThree="- 온라인 싸강 시대 필수템! &#39;Slid (슬리드)&#39;"
          webLink="https://blog.naver.com/ann911/222103224356"
        />
        <ReviewOne
          mentOne="이런 앱이 제가 대학생일 때 개발되어서"
          mentTwo="얼마나 다행인지 몰라요 ㅎㅎ"
          mentThree="- 이런 건 미리 알려주지~ / 슬리드 / 강의 화면 캡쳐"
          webLink="https://blog.naver.com/cow612/222126049495"
        />
        <ReviewOne
          mentOne="iPad에서 강의 캡쳐하느라 시간 낭비가 심했는데,"
          mentTwo="Slid로 바로 캡쳐해서 PDF로 다운받으니 너무 편합니다."
          mentThree="- 크롬 확장자 리뷰"
          webLink="https://chrome.google.com/webstore/detail/slid-youtube-screenshot-n/cgajiilhmpfemmdihjnodpibaffakjhj?hl=ko"
        />
      </div>
    </div>
  );
}

export default Review;
