import About from "./components/about/About";
import Header from "./components/header/Header";
import "./components/sass/global.scss";
import ProjectsContainer from "./containers/ProjectsContainer";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills/>
      <ProjectsContainer/>
      <Contact/>
    </div>
  );
}

export default App;
