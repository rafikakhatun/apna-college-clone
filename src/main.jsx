import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'
import DsaSheet from './navbarPage/DsaSheet.jsx'
import OurResult from './navbarPage/OurResult.jsx'
import NewCourse from './navbarPage/NewCourse.jsx'

AOS.init({
  duration: 1000,  
  once: true,       
})





const route = createBrowserRouter([

{
  path:"/",
  element:<App></App>
},

{
  path:"/dsa-Sheet",
  element:<DsaSheet></DsaSheet>
},

{
  path:"/Our-Result",
  element:<OurResult></OurResult>
},

{
  path:"/NewCourse",
  element:<NewCourse></NewCourse>
}







])





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={route}/>
    
   
  </StrictMode>,
)
