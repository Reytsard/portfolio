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
          <Projects />
          <About />
          <Skills />
          <ContactMe />
        </div>
      </main>
    </div>
  );
}

export default App;
