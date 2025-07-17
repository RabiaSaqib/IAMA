import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';
import Members from './pages/Members';
import MyCPD from './pages/MyCPD';
import MemberServices from './pages/MemberServices';
import MemberSocieties from './pages/MemberSocieties';
import UsefulLinks from './pages/UsefulLinks';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <TopBar />
        <Navbar />
        <main className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseDetails />} />
            <Route path="/members" element={<Members />} />
            <Route path="/my-cpd" element={<MyCPD />} />
            <Route path="/member-services" element={<MemberServices />} />
            <Route path="/member-societies" element={<MemberSocieties />} />
            <Route path="/useful-links" element={<UsefulLinks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;