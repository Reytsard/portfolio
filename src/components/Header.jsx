import "../styles/main.css";

export const Header = () => (
  <header>
    <div className="headerLogo">r.dm</div>
    <div className="headerOptions d-flex">
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
);
