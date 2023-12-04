import "./App.css";
import "./styles/main.css";

import { Header } from "./components/Header";
import { Greeting } from "./components/Greeting";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="home">
          <Greeting />
          <Skills />
          <About />
          <Projects />
          <ContactMe />
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
