import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Docs from './Pages/Docs';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/docs' element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
