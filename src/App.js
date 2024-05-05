import logo from './logo.svg';
import './App.css';
import './App.scss';
import {SectionsContainer, Section, Header, /*Footer*/} from 'react-fullpage';
import $ from 'jquery';
import React , { useState, useEffect } from "react";
// 오류 메시지에 따라 변경할 임포트
// 오류 메시지에 따라 변경할 임포트
// import { Typed } from 'react-typed';
// 또는
import { ReactTyped as Typed } from 'react-typed';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; //css는 이렇게 가져온다.
import { Navigation, Pagination, A11y, Autoplay, EffectCards } from 'swiper/modules';
// 스와이퍼 CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
  return (
<>
  <MainPage/>


</>

  );

}
function MainPage() {
  let options = {
    anchors: ['/', 'sectionTwo', 'sectionThree', 'section4', 'section5'],
  };
    const settings = {
        arrows: true, // 양 끝 화살표 생성여부
        dots: true, // 슬라이더 아래에 슬라이드 개수를 점 형태로 표시
        infinite: true, // 슬라이드가 맨 끝에 도달했을 때 처음 슬라이드를 보여줄지 여부
        slidesToShow: 3, // 화면에 한번에 표시할 슬라이드 개수 설정
        slidesToScroll: 1, // 옆으로 스크롤할 때 보여줄 슬라이드 수 설정
        speed: 500, // 슬라이드 넘길 때 속도
        autoplay: true, // 슬라이드를 자동으로 넘길지 여부
        autoplaySpeed: 3000, // 자동으로 넘길 시 시간 간격
    }

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            // URL의 해시값을 가져옵니다.
            const hash = window.location.hash.substr(1); // #을 제외한 해시값을 가져옵니다.
            setActiveSection(hash);
        };
        // 페이지가 로드될 때 해시값을 확인하여 sectionOne을 활성화합니다.
        // 만약 해시값이 없다면 기본적으로 sectionOne을 활성화합니다.
        const initialHash = window.location.hash.substr(1);
        if (!initialHash) {
            setActiveSection('sectionOne');
        }

        // hashchange 이벤트에 대한 이벤트 리스너를 추가합니다.
        window.addEventListener('hashchange', handleHashChange);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);


  return (
      <div>
          <Header style={{ position: 'static' }}>
              <div className="nav">
                  <a href="/" className={activeSection === 'sectionOne' ? 'active' : ''}>Intro</a>
                  <a href="#sectionTwo" className={activeSection === 'sectionTwo' ? 'active' : ''}>About me</a>
                  <a href="#sectionThree" className={activeSection === 'sectionThree' ? 'active' : ''}>Career</a>
                  <a href="#section4" className={activeSection === 'section4' ? 'active' : ''}>Project</a>
                  <a href="#section5" className={activeSection === 'section5' ? 'active' : ''}>Outro</a>
              </div>

              {/*<Footer>
                  <a href="" className="opa">Dcoumentation</a>
                  <a href="">Example Source</a>
                  <a href="">About</a>
              </Footer>*/}
          </Header>

          <SectionsContainer {...options}>

              <Section>


                  <div id="particle-container">
                      <Typed className="main_text"
                          strings={[
                              '안녕하세요.',
                              '끊임없이 도전하는',
                              '웹개발자 김정호입니다.'
                          ]}
                          typeSpeed={100}
                          backSpeed={50}
                          loop
                      />
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                  </div>

              </Section>

              <Section>
                      <div className="container">

                          <h3 className="title">
                              <img src="https://cdg-portfolio.com/images/black-link.png"></img>
                              ABOUT ME</h3>
                          <div className="about_cont_container">
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/person-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">이름</p>
                                          <p className="text text2">김정호</p>
                                      </div>

                                  </div>
                              </div>
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/calendar-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">생년월일</p>
                                          <p className="text text2">1994.01.29</p>
                                      </div>
                                  </div>

                              </div>
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/geo-alt-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">주소지</p>
                                          <p className="text text2">인천광역시 남동구</p>
                                      </div>
                                  </div>

                              </div>
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/envelope-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">연락처</p>
                                          <p className="text text2">010-5630-9493</p>
                                      </div>
                                  </div>

                              </div>
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/envelope-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">이메일</p>
                                          <p className="text text2">jhjhjh21jh21@gmail.com</p>
                                      </div>
                                  </div>

                              </div>
                              <div className="about_content">
                                  <div className="inner">
                                      <p>
                                          <img src="https://cdg-portfolio.com/images/about-me/pencil-fill.svg"></img>
                                      </p>
                                      <div className="text_box">
                                          <p className="text">학력</p>
                                          <p className="text text2">가톨릭대학교<br/>1전공 화학과<br/>2전공 정보통신학과</p>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>


              </Section>

              {/*경력*/}
              <Section className="se">
                  <div className="container">
                      <h3 className="title"><img src="https://cdg-portfolio.com/images/black-link.png"></img>CAREER</h3>


                      <Swiper
                          effect={'cards'}
                          grabCursor={true}
                          modules={[EffectCards]}
                          className="mySwiper"
                      >
                          <SwiperSlide>
                              <div className="career_img">
                                  <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230721_122%2F1689915122935OELSk_PNG%2Fbplace_logo_new02.png"/>
                              </div>
                              <div className="career_content">
                                  <p className="title_text">(주)비플레이스</p>
                                  <p className="hr_line"></p>
                                  <p className="term">2022.09. ~2023.12 </p>

                                  <p className="text">(주)비플레이스는 <span className="font_blue">빅데이터 솔루션 서비스를 개발 공급</span>하는 회사이며,<br/>
                                      저는 <span className="font_blue">웹 개발 포지션</span>으로<br/>
                                      <span className="font_blue">웹 인터페이스(UI/UX)를 개선</span>하고 기존의 소스를 <span className="font_blue">리팩토링</span>하여 전반적인 반응성을 개선하였으며<br/>
                                      기존 솔루션의 유지보수와 확장성을 고려하여 개발을 진행해왔습니다.
                                  </p>
                              </div>

                          </SwiperSlide>
                          <SwiperSlide>

                              <div className="career_content card">
                                  <p className="title_text">차세대 국방부 디지털 정보 디스플레이 센터(DIDC) 웹 인터페이스 최적화</p>
                                  <p className="hr_line"></p>
                                  <p className="term">2023년 1월 ~ 2023년 5월</p>
                                  <p className="text">기술 스택 : <span className="font_blue">Vue.js</span></p>
                                  <p className="text">ㆍ기존 웹 인터페이스의 사용성 및 시각적 요소 개선을 위해 <span className="font_blue">UI 업데이트</span></p>
                                  <p className="text">
                                      ㆍ프론트 기능성 향상을 위해 JavaScript 기반 <span className="font_blue">프론트 리팩토링 및 최적화</span> 작업 수행,
                                      이를 통해 <span className="font_blue">사용자 인터랙션(UI)와 웹 애플리케이션의 전반적인 반응성 개선</span></p>
                                  <p className="text">ㆍ기존 솔루션의 <span className="font_blue">유지보수성과 확장성을 고려 하여 코드 구조 재검토 및 리팩토링</span> 실행,
                                      효율적인 <span className="font_blue">프로젝트 관리 및 팀 내 커뮤니케이션 강화</span>.</p>
                              </div>

                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="career_content card">
                                  <p className="title_text">나이스 정보통신 차세대 웹 UI 개발 및 최적화</p>
                                  <p className="hr_line"></p>
                                  <p className="term"> 2023년 9월 ~ 2023년 11월</p>
                                  <p className="text"><span className="font_blue">Spring Boot, WebSquare5</span></p>
                                  <p className="text">ㆍ<span className="font_blue">컨트롤러 레이어에서 서비스 레이어로 비즈니스 로직 이동</span>을 통해
                                      소프트웨어 아키텍처의 체계성 및 가독성 향상.
                                      이를 통해 <span className="font_blue">코드의 모듈화 및 유지보수 효율성 증가</span></p>
                                  <p className="text">ㆍ WebSquare5를 활용한 프론트엔드 개발 중,
                                      <span className="font_blue">버전 업데이트로 인해 발생한 호환성 문제 해결</span>.
                                      기존 코드를 최신 버전과 호환되도록 수정하여 애플리케이션의 안정성 및 성능 유지.</p>
                                  <p className="text">ㆍ체계적인 <span className="font_blue">소스 코드 리팩토링하여 시스템의 유지보수 용이성 및 미래 확장성 보장</span></p>
                              </div>

                          </SwiperSlide>

                      </Swiper>
                  </div>

              </Section>

              <Section>
                  <div className="container">

                      <h3 className="title">
                          <img src="https://cdg-portfolio.com/images/black-link.png"></img>
                          PROJECT
                      </h3>

                      <div className="project_text">
                          <h3>게시판 프로젝트</h3>
                          <div className="project_img">
                              <img src="https://github.com/yujeong-world/project-board/assets/124220083/7de54ae6-3c36-4cb6-8ac2-cf25597b7af0"/>
                          </div>
                          <div className="project_content">
                              게시판 프로젝트는 Java 17 및 Spring Boot 2.7을 기반으로 구현되었습니다.
                              <br/>
                              또한, Docker와 GitHub Action을 이용한 CI/CD 파이프라인 구축으로
                              배포 과정의 자동화를 구현하였습니다.
                              <br/>
                              <br/>
                              <span className="bord">주요 기능</span>
                              <br/>
                              회원가입 소셜 로그인을 통한 간편한 접근성을 제공함으로써 사용자 경험을 대폭 향상시켰습니다.
                              <br/>
                              게시글 및 댓글 작성, 수정, 삭제 기능을 사용할 수 있습니다.
                              <br/>
                              사용자는 검색, 좋아요, 북마크, 인기글 보기와 같은 기능을 통해 컨텐츠를 보다 효율적으로 탐색하고 관리할 수 있습니다.
                              <br/>
                              <br/>
                              <span className="bord">GitHub</span> <a target="_blank" href="https://github.com/jeongho22/Board_personal">https://github.com/jeongho22/Board_personal</a>:
                              <br/>
                              <span className="bord">URL</span> :<a target="_blank" href="http://jeonghologin2.link/login">http://jeonghologin2.link/login</a>
                              <br/>
                              <span className="bord">Frontend</span> : Thymleaf , javascript , CSS, HTML
                              <br/>
                              <span className="bord">Backend</span> : Spring Boot
                              <br/>
                              <span className="bord">Database</span> : MySQL
                              <br/>
                              <span className="bord">Deployment</span> : EC2, RDS , Docker, Github Action
                          </div>
                      </div>


                  </div>

              </Section>
              <Section>
                  <div className="container">


                      <div className="outro_container">
                          <div>
                              <span className="outro_title nanum-pen">
                                  <Typed
                                      strings={[
                                          "지금 보다 더 나은 방향은 없을까?"
                                      ]}
                                      typeSpeed={80}
                                      backSpeed={50}
                                      loop
                                  /></span>
                              <br/>
                              <br/>
                              <br/>

                              안녕하세요 ! 1년차 웹 주니어 개발자 김정호 입니다.
                              <br/>
                              <br/>
                              1년차 개발자로서 경험을 쌓아가며, 전문적인 역량을 키워나가고 있습니다.
                              <br/>
                              이전 직장을 다니면서 실무와 맞닿아있는 프로젝트를 진행하며 웹 개발의 핵심 프로세스를 이해하고,
                              현재는 더 다양한 기술을 탐구하며 더 나은 솔루션을 찾고 있습니다.
                              <br/>
                              <br/>
                              최근에는 AWS와 Doker와 같은 클라우드 및 컨테이너 기술에 대해서 집중적으로 학습하고 있습니다.
                              <br/>
                              이를 통해 확장성 있는 애플리케이션 아키텍쳐를 설계하고, 효율적인 배포 및 관리를 위한 노력을 기울이고 있습니다.
                              <br/>
                              <br/>
                              새로운 도전과 성장의 기회를 제공하는 회사에서 함께 일하며, 제 비전을 현실로 만들어가고자 합니다.
                          </div>
                      </div>




                  </div>

              </Section>


          </SectionsContainer>
      </div>
  );
}

export default App;
