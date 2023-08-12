import "./App.css";
import "./styles/main.css";
import Image1 from "./images/1.png";
import Pfp from "./images/1 (copy).png";
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
import Image18 from "./images/react-router-stacked-color.png";
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
              {/* <img
                className="greetingsImg rounded-circle shadow-lg"
                src={Image1}
                alt="Person in a suit"
                height="200px"
              /> */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="100%"
                id="blobSvg"
                style={{ opacity: "1" }}
                transform="rotate(0)"
                filter="blur(0px)"
              >
                <image
                  x="0"
                  y="40"
                  width="100%"
                  height="100%"
                  clip-path="url(#shape)"
                  href={Image1}
                  preserveAspectRatio="none"
                ></image>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    {" "}
                    <stop
                      offset="0%"
                      style={{ "stop-color": "rgb(238, 205, 163)" }}
                    ></stop>{" "}
                    <stop
                      offset="100%"
                      style={{ "stop-color": "rgb(239, 98, 159)" }}
                    ></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <clipPath id="shape">
                  <path id="blob" fill="url(#gradient)">
                    {" "}
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                    ></animate>{" "}
                  </path>
                </clipPath>
              </svg>
            </div>
            <div className="words">
              <span>
                Hi!{" "}
                <FontAwesomeIcon icon={faHand} style={{ color: "#000000" }} />
              </span>
              <h1>I am Ronald De Mesa</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
          <div
            id="skills"
            className="fs-5 d-flex flex-column align-items-center"
          >
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex align-items-center gap-3 m-2">
                <img src={Image14} alt="nextjs" className="skill-image" />
                <div className="border d-flex m-2 px-2 rounded-2 shadow-lg">
                  Vercel
                </div>
              </div>
              Website rendering and deploying
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <img className="skill-image" src={Image11} alt="react" />
              </div>
              Development of multi-page applications and app optimization
              (React)
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <div className="skillDiv">
                  <img className="skill-image" src={Image12} alt="Redux" />
                </div>
              </div>
              Data management and integration of Google Maps (Redux)
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <img
                className="skill-image mx-2"
                src={Image18}
                alt="React-Router"
              />
              Routing, navigation, and forms development
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <img className="skill-image" src={Image8} alt="html" />
                <img className="skill-image" src={Image9} alt="css" />
                <img className="skill-image" src={Image13} alt="Sass" />
                <img className="skill-image" src={Image15} alt="bootstrap" />
              </div>
              Adaptive and responsive website layout and styling (HTML, CSS,
              SASS)
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <img className="skill-image" src={Image10} alt="js" />
              </div>
              Development of function and manipulation of strings and arrays
              (JavaScript)
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                DOM
              </div>
              Connection of functions in JavaScript and an HTML layout
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                HTTP
              </div>
              <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                API
              </div>
              <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                Axios
              </div>
              Connection of server and client data
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                NPM
              </div>
              Libraries installation and management
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  Unit Testing
                </div>
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  React Testing
                </div>
              </div>
              Code Testing and bug fixing
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex flex-wrap justify-content-around gap-3 m-2">
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  Git
                </div>
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  GitHub
                </div>
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  SemVer
                </div>
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  Gitflow
                </div>
              </div>
              Product versions management, collaboration and pull requests, and
              portfolio creation
            </div>
            <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
              <div className="skillDiv d-flex gap-3 m-2">
                <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
                  Auth0
                </div>
              </div>
              Data safety through authentication and authorization
            </div>
          </div>
          <div id="about">
            <h2>About</h2>
            <span>Age: 22</span>
            <span>Address: Baguio City</span>
            <span>Country: Philippines</span>
          </div>
          <div id="projects" className="p-1">
            <div id="title">Sample Projects</div>
            <div className="projects">
              <div className="card d-flex w-auto flex-column justify-content-evenly">
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

{
  /* <div className="card">
<a
  href="http://reytsard.github.io/news-website-refocus"
  target="_blank"
  rel="noreferrer"
>
  <img src={Image6} alt="online-clothing-store" width="320px" />
</a>
<div className="skills d-flex justify-content-center gap-2 flex-wrap">
  <div className="card mx-1 px-1">Javascript</div>
  <div className="card mx-1 px-1">HTML</div>
  <div className="card mx-1 px-1">CSS</div>
</div>
</div>
<div className="card">
<a
  href="http://reytsard.github.io/news-website-refocus"
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
<div className="card">
<a
  href="http://reytsard.github.io/resume-of-mine"
  target="_blank"
  rel="noreferrer"
>
  <img src={Image5} alt="adaptive-resume" width="320px" />
   change Image if saved already 
</a>
<div className="skills d-flex justify-content-center gap-2 flex-wrap">
  <div className="card mx-1 px-1">Responsive Design</div>
  <div className="card mx-1 px-1">HTML</div>
  <div className="card mx-1 px-1">CSS</div>
</div>
</div> */
}
