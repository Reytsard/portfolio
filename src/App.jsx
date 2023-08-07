import "./App.css";
import "./styles/main.css";
import Image1 from "./images/1.png";
import Image2 from "./images/proj1.png";
import Image3 from "./images/proj2.png";
import Image4 from "./images/proj3.png";
import Image5 from "./images/proj4.png";
import Image6 from "./images/proj5.png";
import Image7 from "./images/proj6.png";
import Image8 from "./images/HTML.png";
import Image9 from "./images/CSS.png";
import Image10 from "./images/JS.png";
import Image11 from "./images/React.png";
import Image12 from "./images/Redux.png";
import Image13 from "./images/SASS.png";
import Image14 from "./images/next-js.png";
import Image15 from "./images/Bootstrap.png";
import Image16 from "./images/online-shop.png";
import Image17 from "./images/brewery-locator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerLogo">r.dm</div>
        <div className="headerOptions d-flex gap-1">
          <a href="#projects" className="text-primary text-decoration-none">
            Projects
          </a>
          <a href="#about" className="text-primary text-decoration-none">
            About
          </a>
          <a href="#contactme" className="text-primary text-decoration-none">
            Contact Me
          </a>
        </div>
      </header>
      <main>
        <div className="home">
          <div className="greetings d-flex flex-wrap gap-4 justify-content-center align-items-center">
            <div className="imageContainer">
              <img
                className="greetingsImg rounded-circle shadow-lg"
                src={Image1}
                alt="Person in a suit"
                height="200px"
              />
            </div>
            <div className="words">
              <span>
                Hi!{" "}
                <FontAwesomeIcon icon={faHand} style={{ color: "#000000" }} />
              </span>
              <span>I am Ronald De Mesa</span>
              <span>Web Developer</span>
            </div>
          </div>
          <div id="skills">
            <div className="skillDiv">
              <img className="skill-image" src={Image8} alt="html" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image9} alt="css" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image10} alt="js" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image11} alt="react" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image12} alt="sass" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image13} alt="Redux" />
            </div>
            <div className="skillDiv">
              <img src={Image14} alt="nextjs" className="skill-image" />
            </div>
            <div className="skillDiv">
              <img className="skill-image" src={Image15} alt="bootstrap" />
            </div>

            <div className="skill">Axios</div>
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
                  href="https://online-shop-three-lac.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image16} alt="proj-7" width="320px" height="100%" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">NextJS</div>
                  <div className="card mx-1 px-1">Redux</div>
                  <div className="card mx-1 px-1">React</div>
                  <div className="card mx-1 px-1">Bootstrap</div>
                </div>
              </div>
              <div className="card d-flex flex-column justify-content-evenly">
                <a
                  href="https://reytsard.github.io/brewery-locator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Image17} alt="proj-8" width="320px" height="100%" />
                </a>
                <div className="skills d-flex justify-content-center gap-2 flex-wrap">
                  <div className="card mx-1 px-1">Google Map</div>
                  <div className="card mx-1 px-1">Redux</div>
                  <div className="card mx-1 px-1">React</div>
                  <div className="card mx-1 px-1">Bootstrap</div>
                </div>
              </div>
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
          <div id="contactme" className="bg-black w-100 text-white py-3">
            <h3 className="contact-me-header ">Contact Me</h3>
            <div>
              Email:{" "}
              <a
                href="emailto:rrey.dm@gmail.com"
                className="text-decoration-none text-white curser-pointer"
              >
                Rrey.dm@gmail.com
              </a>
            </div>
            <div>Contact Number: +63 981 322 9906</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
