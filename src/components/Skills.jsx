import Image8 from "../images/HTML.png";
import Image9 from "../images/CSS.png";
import Image10 from "../images/JS.png";
import Image11 from "../images/React.png";
import Image12 from "../images/Redux.png";
import Image13 from "../images/SASS.png";
import Image14 from "../images/next-js.png";
import Image15 from "../images/Bootstrap.png";
import Image18 from "../images/react-router-stacked-color.png";

export const Skills = () => (
  <>
    <h2 style={{ margin: "10px 0" }}>Skills</h2>
    <div id="skills" className="fs-5">
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex align-items-center gap-3 m-2">
          <img src={Image14} alt="nextjs" className="skill-image" />
          <div className="bg-white border d-flex m-2 px-2 rounded-2 shadow-lg">
            Vercel
          </div>
        </div>
        Website rendering and deploying
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex gap-3 m-2">
          <img className="skill-image" src={Image11} alt="react" />
        </div>
        Development of multi-page applications and app optimization (React)
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
        <img className="skill-image mx-2" src={Image18} alt="React-Router" />
        Routing, navigation, and forms development
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex gap-3 m-2">
          <img className="skill-image" src={Image8} alt="html" />
          <img className="skill-image" src={Image9} alt="css" />
          <img className="skill-image" src={Image13} alt="Sass" />
          <img className="skill-image" src={Image15} alt="bootstrap" />
        </div>
        Adaptive and responsive website layout and styling (HTML, CSS, SASS)
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex gap-3 m-2">
          <img className="skill-image" src={Image10} alt="js" />
        </div>
        Development of function and manipulation of strings and arrays
        (JavaScript)
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
          DOM
        </div>
        Connection of functions in JavaScript and an HTML layout
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
          HTTP
        </div>
        <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
          API
        </div>
        <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
          Axios
        </div>
        Connection of server and client data
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
          NPM
        </div>
        Libraries installation and management
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex gap-3 m-2">
          <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg bg-white">
            Unit Testing
          </div>
          <div className="border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg bg-white">
            React Testing
          </div>
        </div>
        Code Testing and bug fixing
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex flex-wrap justify-content-around gap-3 m-2">
          <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
            Git
          </div>
          <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
            GitHub
          </div>
          <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
            SemVer
          </div>
          <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
            Gitflow
          </div>
        </div>
        Product versions management, collaboration and pull requests, and
        portfolio creation
      </div>
      <div className="skill d-flex flex-wrap h-auto w-auto mx-3 p-1 justify-content-center">
        <div className="skillDiv d-flex gap-3 m-2">
          <div className="bg-white border d-flex gap-3 m-2 px-2 rounded-2 shadow-lg">
            Auth0
          </div>
        </div>
        Data safety through authentication and authorization
      </div>
    </div>
  </>
);
