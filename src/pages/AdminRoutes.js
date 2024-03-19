import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';


import DashboardIcon from "@mui/icons-material/Dashboard";
import { Add,Chat as ChatIcon, Description, Update, Event, Info, Announcement, CheckCircle, AccountBalance, Group } from '@mui/icons-material';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from  "@mui/icons-material/ShoppingCart"



// admin pages
import Admin from './admin/Admin';
import AdminHeader from '../components/AdminComponents/AdminHeader';
import SetAppointmentDate from './admin/SetAppointmentDate'
import AddAdmin from './admin/AddAdmin.js'
import UpdateUserStatus from './admin/UpdateUserStatus2'
import PostCalls from './admin3/PostCalls'
import PostPublications from './admin3/PostPublications'
import PostAcceptedProjects from './admin3/PostAcceptedProjects';
import PostInstitutes from './admin3/PostInstitutes';
import PostCollaborations from './admin3/PostCollaborations.js'
import PostNews from './admin3/PostNews'
import ViewFile from './admin/ViewFile';
import ViewFeedback from "./admin/ViewFeedback.js"
import ViewNews from './ViewNews.js';
import ProtectAdmin from '../ProtectAdmin.js';
import ViewReports from './admin/ViewReports.js';

import Header1 from '../components/Layout/Navbar/Navbar1.js'
import Header2 from '../components/Layout/Navbar/Navbar2'
import Header3 from '../components/Layout/Navbar/Navbar3'
import Footer from './Footer.js';
import Sider from  '../components/Layout/Sidebar'
import {ThemedLayout} from '../components/Layout/ThemdLayout.js'
import Admin2 from './admin2/Admin2.js';
import ViewReports2 from './admin2/ViewReports2.js';
import ProjectFeedback from './admin2/ProjectFeedback.js';
import SubmitReport from './admin2/SubmitReport.js';


import Admin3 from './admin3/Admin3.js';



const  AdminRoutes = () =>{
   
const adminSidebarItems =  [
  {
    label: 'Set Appointment Date',
    path: '/admin/appointments/add-appointment',
    icon: <Event/>,
  },
  {
    label: 'Update User Status',
    path: '/admin/user-status/add-user-status',
    icon: <Update />,
  },
  {
    label: 'View Feedback',
    path: '/admin/viewFeedback/view-feedback',
    icon: <ChatIcon />,
  },
  {
    label: 'View Reports',
    path: '/admin/viewReports',
    icon: <Description />,
  },
  {
    label: 'Add Admin',
    path: '/admin/addAdmin',
    icon: <Add />,
  },
  
]

const admin2SidebarItems = [
  {
    label: 'Give Project Feedback',
    path: '/admin2/projectFeedback',
    icon: <ChatIcon />,
  },
  {
    label: 'View Reports',
    path: '/admin2/viewReports',
    icon: <Description />,
  },
  {
    label: 'Submmit Report',
    path: '/admin2/submitReport',
    icon: <Description />,
  },
  // Add more items as needed
]
const admin3SidebarItems = [   {
  label: 'Post News',
  path: '/admin3/news/add-news',
  icon: <Info />,
},
{
  label: 'Post Calls',
  path: '/admin3/calls/add-call',
  icon: <Announcement />,
},
{
  label: 'Post Publications',
  path: '/admin3/publications/add-publication',
  icon: <Description />,
},
{
  label: 'Post Accepted Projects',
  path: '/admin3/accepted-projects/add-accepted-project',
  icon: <CheckCircle/>,
},
{
  label: 'Post To Institutes',
  path: '/admin3/institutes/post-to-institutes',
  icon: <AccountBalance/>,
},
{
  label: 'Post To Collaborations',
  path: '/admin3/collaboration/post-to-collaboration',
  icon: <Group />,
},
]

return(
         <Routes>
                  
          <Route path = '/admin'
                element={
                    
                            <ThemedLayout
                                Header={() =><Header1 />}
                                Footer = {()=> <Footer/>}
                                Sider={() =><Sider   sidebarItems= {adminSidebarItems} />}
                              
                            >
                              <Outlet/>
                            </ThemedLayout>
                            
                                              
                }
            >
                <Route index element={<Admin/>} />
                
                <Route path='appointments/add-appointment' element={<SetAppointmentDate/>}/>
                <Route path='user-status/add-user-status' element={<UpdateUserStatus/>}/>
                <Route path='viewFeedback/view-feedback' element={<ViewFeedback/>}/>
                <Route  path='viewReports' element={<ViewReports/>}></Route>
                <Route  path='viewFile' element={<ViewFile/>}></Route>               
                <Route  path='addAdmin' element={<AddAdmin/>}></Route>                  
          </Route>

            
          <Route path='/admin2' element= {
                <ThemedLayout
                Header={() =><Header2 />}
                Footer = {()=> <Footer/>}
                
                Sider={() => <Sider    sidebarItems = { admin2SidebarItems} />}
              >

                  <Outlet/>

                </ThemedLayout>
              }
            >
          <Route  index  element={<Admin2 />}/>
          <Route  path='viewReports' element={<ViewReports2/>}></Route>
          <Route  path='viewFile' element={<ViewFile/>}></Route>
          <Route  path='projectFeedback' element={<ProjectFeedback/>}/>
          <Route  path='submitReport' element={<SubmitReport/>}/>

          </Route>

          <Route path='/admin3' element= {
                <ThemedLayout
                Header={() =><Header3 />}
                Footer = {()=> <Footer/>}
                
                Sider={() => <Sider    sidebarItems = { admin3SidebarItems} />}
              >

                  <Outlet/>

                </ThemedLayout>
              }
            >
            <Route  index  element={<Admin3 />}/>

            <Route path='news/add-news' element={<PostNews/>}/>
            <Route path='calls/add-call' element={<PostCalls/>}/>
            <Route path='publications/add-publication' element={<PostPublications/>}/>
            <Route path='accepted-projects/add-accepted-project' element={<PostAcceptedProjects/>}/>
            <Route path='institutes/post-to-institutes' element={<PostInstitutes/>}/>
            <Route path='collaboration/post-to-collaboration' element={<PostCollaborations/>}/>


          </Route>

      
        
        </Routes> 
)}

export default AdminRoutes