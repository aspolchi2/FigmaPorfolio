import About from "./components/about/About";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import "./components/sass/global.scss";
import './components/sass/button.scss'
import ProjectsContainer from "./containers/ProjectsContainer";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div>
      <Header />
      <About />
      <ProjectsContainer/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
