import Head from 'next/head';
import Hero from '../components/Hero';
import TopBar from '../components/TopBar';
import VideoPart from '../components/VideoPart';

export default function Home() {
  return (
    <div>
      <Head>
        <title>슬리드 | 영상 속 지식을 캡쳐하세요</title>
        <meta
          name="description"
          content=" 슬리드는 글로벌 1등 동영상 필기 노트 서비스입니다. 슬리드를 통해 영상 속 지식을 빠르게 캡쳐해 필기를 남길 수 있습니다. 복습이 필요할 땐, 캡쳐한 순간부터 영상을 다시 돌려 볼 수도 있습니다. 슬리드는 유튜브나 온라인 강의 등 다양한 웹사이트에서 이용할 수 있는 브라우저 확장 프로그램입니다. (크롬, 웨일, 엣지 등) 데스크톱용 슬리드를 이용하면 ZOOM 회의나 다운로드 받은 영상 등에서도 활용할 수 있습니다. "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <TopBar />
        <Hero />
        <VideoPart />
      </main>

      <footer></footer>
    </div>
  );
}
