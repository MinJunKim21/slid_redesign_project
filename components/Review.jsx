import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

function Review() {
  return (
    <div>
      <h3>1만 명의 온라인 학습자들이 슬리드로 공부하고 있어요.</h3>
      <div>
        <h5>Chrome Ratings</h5>
        <div className="flex items-center">
          <span className="flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <span>4.7</span>
        </div>
      </div>

      <Link href="https://blog.naver.com/raon2029/222173426676">
        <div>
          <h6>처음 에버노트를 만났을 때의 그런 느낌이랄까...</h6>
          <span>슬리드는 온라인 강의에 특화된 편집 툴</span>
          <span>[온라인 수업 강의 필수품:slid] 요물이로다...!</span>
        </div>
      </Link>
      <Link href="https://blog.naver.com/raon2029/222173426676">
        <div>
          <h6>처음 에버노트를 만났을 때의 그런 느낌이랄까...</h6>
          <span>슬리드는 온라인 강의에 특화된 편집 툴</span>
          <span>[온라인 수업 강의 필수품:slid] 요물이로다...!</span>
        </div>
      </Link>
      <Link href="https://blog.naver.com/raon2029/222173426676">
        <div>
          <h6>처음 에버노트를 만났을 때의 그런 느낌이랄까...</h6>
          <span>슬리드는 온라인 강의에 특화된 편집 툴</span>
          <span>[온라인 수업 강의 필수품:slid] 요물이로다...!</span>
        </div>
      </Link>
      <Link href="https://blog.naver.com/raon2029/222173426676">
        <div>
          <h6>처음 에버노트를 만났을 때의 그런 느낌이랄까...</h6>
          <span>슬리드는 온라인 강의에 특화된 편집 툴</span>
          <span>[온라인 수업 강의 필수품:slid] 요물이로다...!</span>
        </div>
      </Link>
    </div>
  );
}

export default Review;
