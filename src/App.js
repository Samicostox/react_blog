import React, { Profiler } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Home";
import Product from "./Product"; // Make sure to create this component
import Contact from "./contactus";
import SignInUpSwitcher from "./auth/switch";
import Message from "./message";
import Signin from "./auth/signin";
import Signup from "./auth/signup";
import OTP from "./auth/OTP";
import PDF from "./pdf";
import GoogleMap from "./googlemap";
import Newhome from "./newhome";
import Profile from "./profile";
import Displaycsv from "./displaycsv";
import PDFViewer from "./technical_documents/embed_pdf";
import MultiStepForm from "./technical_documents/modify_pdf";
import ModifyPDF from "./technical_documents/modify_pdf";
import Landingpage from "./website/landingpage";
import Forgotpassword from "./auth/forgot_password";
import Resetpassword from "./auth/reset_password";
import Service_mobile from "./website/Services/services-mobile";
import Contact2 from "./website/contact";
import Adminhome from "./adminhome";
import Team from "./website/Team";
import { PastProjects } from "./website/past_project";
import UpdatePDF from "./technical_documents/updatepdf";
import AboutUs from "./website/abous-us";
import Service_web from "./website/Services/services-web";
import Service_data from "./website/Services/services-data";
import Service_benchmarking from "./website/Services/services-benchmarking";
import Service_businessplan from "./website/Services/services_businessplan";
import Service_strategy from "./website/Services/services-strategy";
import ReactGA from 'react-ga4';
import Blogs from "./website/Blog/Blogs";
import Blog1 from "./website/Blog/Blog1";
import Blog2 from "./website/Blog/Blog2";
import Blog3 from "./website/Blog/Blog3";
import { HeroParallaxDemo } from "./new_website/Past_Projects/Paralax";
import PastProjects2 from "./new_website/Past_Projects/Past_Project";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./new_website/Services/services";


const TRACKING_ID = "G-E24FJ6HJJJ"
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/services" element={<Landingpage />} />
            <Route path="/software" element={<Home />} />
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
            <Route path="/updatepdf" element={<UpdatePDF />} />
            <Route path="/landing" element={<Landingpage />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/service-mobile" element={<Service_mobile />} />
            <Route path="/service-web" element={<Service_web />} />
            <Route path="/service-data" element={<Service_data />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Blogs/Software-Development" element={<Blog1 />} />
            <Route path="/Blogs/MVP" element={<Blog2 />} />
            <Route path="/Blogs/REST-APIs" element={<Blog3 />} />
            
            <Route
              path="/service-benchmarking"
              element={<Service_benchmarking />}
            />
            <Route
              path="/service-businessplan"
              element={<Service_businessplan />}
            />
            <Route path="/service-strategy" element={<Service_strategy />} />
            <Route path="/contact2" element={<Contact2 />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/team" element={<Team />} />
            <Route path="/past-projects" element={<PastProjects />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/past-projects2" element={<PastProjects2 />} />
            <Route path="/services2" element={<Services />} />



            {/* Add more Routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
