
// src/Routes.js
import React  from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';
import Collaborations from './pages/Collaborations';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.js';
import News from './pages/News';
import Login from './pages/Login.js';
import Register from './pages/Register';
import Footer from './pages/Footer.js';
import GraphicalAnalysis from './pages/GraphicalAnalysis.js';
import NationalResearchInstitutes from './components/Institutes/NationalResearchInstitutes.js';
import InternationalResearchInstitutes from './components/Institutes/InternationalResearchInstitutes.js';
import Laboratories from './components/Institutes/Laboratories';
import GovernmentAgencies from './components/Institutes/GovernmentAgencies';
import IctPartners from './components/Institutes/IctPartners';
import Others from './components/Institutes/Others.js';
import Publications from './pages/Publications';
import Institutes from './pages/Institutes';
import ProjectDescription from './pages/ProjectDescription';
import AcceptedProjects from './pages/AcceptedProjects';
import FooterForm from './components/footerComponents/FooterForm.js';
import StartApplication from './pages/StartApplication.js';



import ViewNews from './pages/ViewNews.js';
import ProtectAdmin from './ProtectAdmin.js';


//user page 

import UserHeader from './components/UserComponents/UserHeader';
import UserDashboard from './pages/user/UserDashboard';
import ConfirmAppointment from './pages/user/ConfirmAppointment';
import CheckStatus from './pages/user/CheckStatus';

import AdminRoutes from './pages/AdminRoutes.js';

import { useAuthContext } from './AuthContext.js';


const ConditionalNavbar = () => {
  const navigate = useNavigate(); 
  const path = window.location.pathname;


 
  if (
  path.startsWith('/login') ||
  path.startsWith('/register') ||
  path.startsWith('/admin') || 
  path.startsWith('/admin2') || 
  path.startsWith('/admin3') 
 
   ) {
    return null
  }

  // Check if the path starts with '/admin/'
  // if (path.startsWith('/admin')) {
  //   return <AdminHeader />;
  // }

   // Check if the path starts with '/user'
    if (path.startsWith('/user') || 
    path.startsWith('/confirm-appointment') || 
    path.startsWith('/check-status') ) {
      return <UserHeader />;
    }


  // If the path is neither Login/Register nor under /admin, render Navbar
  return <Navbar />;
};




const ConditionalFooter = () => {
  
  const path = window.location.pathname;

  if (path.startsWith('/admin') || 
  path.startsWith('/admin2') || 
  path.startsWith('/admin3') ) {
    return null
  }
  return <Footer />;
}

const RoutesComponent = () => {
  
const  {user} = useAuthContext()
console.log(user)
  return (
    <Router>
      <ConditionalNavbar />
      
      <Routes>
    
      <Route path='/user' element={<UserDashboard />} />
      <Route path='/confirm-appointment' element={<ConfirmAppointment />} />
      <Route path='/check-status' element={<CheckStatus />} />
      <Route  path='/viewNews' element={<ViewNews/>}></Route>
      <Route  path='/startApplication' element={<StartApplication/>}></Route>


        <Route path="/graph" element={<GraphicalAnalysis />} />
        <Route path="/protect" element={<ProtectAdmin/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route  path='/resources/accepted-projects' element={<AcceptedProjects/>}/>
        <Route  path='/footer' element={<FooterForm/>}/>
        <Route  path='/resources/publications' element={<Publications/>}/>
        <Route  path='/institutes' element={<Institutes />}/>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route  path='viewNews' element={<ViewNews/>}></Route>
        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>
        <Route  path='/institutes/national-research' element={<NationalResearchInstitutes />}></Route>
        <Route  path='/institutes/international-research' element={<InternationalResearchInstitutes />}></Route>
        <Route  path='/institutes/labs' element={<Laboratories />}></Route>
        <Route  path='/institutes/ict' element={<IctPartners />}></Route>
        <Route  path='/institutes/government' element={<GovernmentAgencies />}></Route>
        <Route  path='/institutes/other' element={<Others />}></Route>   
                             
      </Routes>          
    
      <AdminRoutes/>           
     
      <ConditionalFooter />
      </Router>
      
      
  );
}

export default RoutesComponent;