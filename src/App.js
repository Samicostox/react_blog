import React, { Profiler } from 'react';
import './App.css';
import {  HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Product from './Product'; // Make sure to create this component
import Contact from './contactus';
import SignInUpSwitcher from './auth/switch';
import Message from './message';
import Signin from './auth/signin';
import Signup from './auth/signup';
import OTP from './auth/OTP';
import PDF from './pdf';
import GoogleMap from "./googlemap"
import Newhome from './newhome';
import Profile from './profile';
import Displaycsv from './displaycsv';
import PDFViewer from './technical_documents/embed_pdf';
import MultiStepForm from './technical_documents/modify_pdf';
import ModifyPDF from './technical_documents/modify_pdf';
import Landingpage from './website/landingpage';
import Forgotpassword from './auth/forgot_password';
import Resetpassword from './auth/reset_password';





function App() {
  return (
    <Router>
      <div className="App">

            
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<SignInUpSwitcher />} />
            <Route path="/message" element={<Message />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/OTP" element={<OTP />} />
            <Route path="/PDF" element={<PDF />} />
            <Route path="/googlemap" element={<GoogleMap />} />
            <Route path="/newhome" element={<Newhome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pdfviewer" element={<PDFViewer />} />
            <Route path="/updatepdf" element={<ModifyPDF />} />
            <Route path="/landing" element={<Landingpage />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            
            {/* Add more Routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
