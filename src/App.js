import About from "./components/about/About";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import "./components/sass/global.scss";
import ProjectsContainer from "./containers/ProjectsContainer";
function App() {
  return (
    <div>
      <Header />
      <About />
      <ProjectsContainer/>
    </div>
  );
}

export default App;
