import React from "react";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      {/* 풀스크린 사용하기. */}
      <section className="banner">
        <span>영상을 위해 유투브 api 이용하기.</span>
        <video className="video" autoPlay loop muted>
          <source src="https://www.drdiary.co.kr/video/pc_ver.mp4" />
        </video>
      </section>
      <section>
        <div>앱(당뇨 관련해서)의 간단한 소개(배너 텍스트용)</div>
        <div>이용하기 버튼</div>
      </section>
      <section>
        앱(당뇨 관련해서) 사용해야하는 이유: 이미지 슬라이드로 구현
      </section>
      <section>앱의 간단한 소개(배너 텍스트용)</section>
      <section>앱 기능(돕다 구버전 or 닥터다이어리 디자인 참고)</section>
      <section>앱의 간단한 소개(배너 텍스트용, 배경 이미지 고정)</section>
    </HomeContainer>
  );
};

export default Home;
