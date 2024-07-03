import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Firstpage from './components/Firstpage'
import Expertise from './components/Expertise'

function App() {
  return (
    <>
      <div className="page h-full w-full bg-[#1C1C1E] overflow-x-hidden">
        <Navbar/>
        <Firstpage/>
        <Expertise/>
      </div>
    </>
  );
}

export default App;
