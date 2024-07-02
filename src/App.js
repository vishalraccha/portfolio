import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Firstpage from './components/Firstpage'

function App() {
  return (
    <>
      <div className="page h-screen w-screen bg-[#1C1C1E]">
        <Navbar/>
        {/* <Firstpage/> */}
      </div>
    </>
  );
}

export default App;
