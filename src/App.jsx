import "./App.css";
import "./styles/main.css";
import Image1 from "./images/1.png";
import Image2 from "./images/proj1.png";
import Image3 from "./images/proj2.png";
import Image4 from "./images/proj3.png";
import Image5 from "./images/proj4.png";
import Image6 from "./images/proj5.png";
import Image7 from "./images/proj6.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerLogo">r.dm</div>
        <div className="headerOptions">
          <a href="#projects">Projects</a>
        </div>
      </header>
      <main>
        <div className="home">
          <div className="greetings">
            <div className="greetingsImg">
              <img src={Image1} alt="Person in a suit" height="200px" />
            </div>
            <div className="words">
              <span>Hi! I am Ronald De Mesa</span>
              <span>Web Developer</span>
            </div>
          </div>
          <div id="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">SASS/SCSS</div>
            <div className="skill">Redux</div>
            <div className="skill">Axios</div>
            <div className="skill">REST API</div>
            <div className="skill">Technical Drafting</div>
            <div className="skill">AUTOCAD</div>
          </div>
          <div id="about">
            <h2>About</h2>
            <span>Age: 22</span>
            <span>Address: Baguio City</span>
            <span>Country: Philippines</span>
          </div>
          <div id="projects">
            <div id="title">Sample Projects</div>
            <div className="projects">
              <div className="card d-flex flex-column justify-content-evenly">
                <a
                  href="https://reytsard.github.io/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image7} alt="proj-7" width="320px" height="100%" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">Axios</div>
                  <div className="card mx-1 px-1">Redux</div>
                  <div className="card mx-1 px-1">React</div>
                  <div className="card mx-1 px-1">Bootstrap</div>
                </div>
              </div>
              <div className="card d-flex flex-column justify-content-evenly">
                <a
                  href="http://reytsard.github.io/React-Router-Project-Refocus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image2} alt="project-1" width="320px" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">React Router</div>
                  <div className="card mx-1 px-1">SCSS</div>
                  <div className="card mx-1 px-1">React</div>
                </div>
              </div>
              <div className="card">
                <a
                  href="http://reytsard.github.io/turbo-lamp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image3} alt="project-2" width="320px" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">Javascript</div>
                  <div className="card mx-1 px-1">HTML</div>
                  <div className="card mx-1 px-1">CSS</div>
                </div>
              </div>
              <div className="card d-flex flex-column justify-content-evenly">
                <a
                  href="http://reytsard.github.io/Admin-Dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image4} alt="project-3" width="320px" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">HTML</div>
                  <div className="card mx-1 px-1">CSS</div>
                </div>
              </div>
              <div className="card">
                <a
                  href="http://reytsard.github.io/smolCalculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image5} alt="project-4" width="320px" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">Javascript</div>
                  <div className="card mx-1 px-1">HTML</div>
                  <div className="card mx-1 px-1">CSS</div>
                </div>
              </div>
              <div className="card">
                <a
                  href="http://reytsard.github.io/rock-paper-scissor-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image6} alt="project-5" width="320px" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">Javascript</div>
                  <div className="card mx-1 px-1">HTML</div>
                  <div className="card mx-1 px-1">CSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
