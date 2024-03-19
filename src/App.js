import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import LoginFinal from './components/loginpage';
import Signup from './components/signup'; // Import Signup component
import Home from './components/Home';

export default function app() {
  return (
    <Router>
      <CssVarsProvider>
        <Routes>
          <Route exact path="/" element={<LoginFinal />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </CssVarsProvider>
    </Router>
    
  );
}
