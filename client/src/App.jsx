import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import ClientSatisfaction from './components/ClientSatisfaction';
import SalesforceAds from './components/SalesforceAds';
import ClientAssurity from './components/ClientAssurity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ThankYou from './components/auth/ThankYou';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <About />
                  <ClientAssurity />
                  <SalesforceAds />
                  <Projects />
                  <Services />
                  <ClientSatisfaction />
                  <Contact />
                </main>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
