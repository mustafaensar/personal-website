import './App.css';
import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Resume from './pages/Resume';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
