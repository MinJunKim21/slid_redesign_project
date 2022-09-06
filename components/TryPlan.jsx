function TryPlan() {
  return (
    <div className="bg-[#eef6ff] pt-16 pb-14">
      <h3 className="font-bold text-2xl text-center">
        똑똑하게 온라인 강의를
        <br /> 공부하는 방법, 슬리드
      </h3>
      <h4 className="pt-5 text-center text-gray-400">
        Chrome 확장자를 설치해, 무료로 시작할 수 있습니다.
      </h4>

      <button className="flex justify-center space-x-3 mx-auto mt-10">
        <span className="text-white bg-[#2e90ff] rounded-lg py-4 px-7 hover:bg-blue-500">
          무료 플랜 시작하기
        </span>
        <span className="border border-black rounded-lg py-3.5 px-7 cursor-pointer hover:bg-slate-200 font-bold">
          가입 없이 체험하기
        </span>
      </button>
    </div>
  );
}

export default TryPlan;
