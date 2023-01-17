import Header from "./componets/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./componets/Footer";
import Overview from "./pages/Overview";
import About from "./pages/About";
function App() {
  return (
    <div style={{ width: window.innerWidth }} className="w-full bg-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
