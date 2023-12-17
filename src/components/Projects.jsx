import Image2 from "../images/proj1.png";
import Image3 from "../images/proj2.png";
import Image4 from "../images/proj3.png";
import Image5 from "../images/proj4.png";
import Image6 from "../images/proj5.png";
import Image7 from "../images/proj6.png";
import Image16 from "../images/online-shop.png";
import Image17 from "../images/brewery-locator.png";

export const Projects = () => (
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
        <div className="skills d-flex justify-content-center align-items-center gap-2 flex-wrap">
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
);
