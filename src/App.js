import logo from './logo.svg';
import './App.css';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import $ from 'jquery';



function App() {
  return (
<>
  <MainPage/>


</>

  );

}
function MainPage() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'section4'],
  };

  return (
      <div>
          <Header>
              <div className="nav">
                  <a href="#sectionOne" className="opa">Intro</a>
                  <a href="#sectionTwo">time line</a>
                  <a href="#sectionThree">project</a>
                  <a href="#section4">end</a>
              </div>

              <Footer>
                  <a href="" className="opa">Dcoumentation</a>
                  <a href="">Example Source</a>
                  <a href="">About</a>
              </Footer>
          </Header>

          <SectionsContainer {...options}>

              <Section>
                  <div className="wrapper">
            <div className="typing-demo">
              <span>안녕하세요.</span>
            </div>
              <div className="typing-demo">
                  <span>끊임없이 도전하는</span>
              </div>
              <div className="typing-demo">
                  <span>웹개발자 김정호입니다.</span>
              </div>
          </div>

                  페이지1


              </Section>

              <Section>Page 2</Section>

              <Section>Page 3</Section>

              <Section>Page 4</Section>


          </SectionsContainer>
      </div>
  );
}

export default App;
