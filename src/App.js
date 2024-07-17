import './App.css';
import MainPage from "./components/MainPage";
import Firstpage from './components/Firstpage'
import Expertise from './components/Expertise'
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

function App() {
  return (
    <>
      <div className="page h-full w-full bg-[#1C1C1E] overflow-x-hidden">
        <MainPage background="bg-[#2f2e2e]" />
        <Firstpage background="bg-[#2f2e2e]" />
        <Expertise />
        <Projects />
        <Achievements />
      </div>
    </>
  );
}

export default App;
