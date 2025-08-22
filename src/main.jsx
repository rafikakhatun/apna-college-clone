import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,  
  once: true,       
})





const route = createBrowserRouter([

{
  path:"/",
  element:<App></App>
}



])





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={route}/>
    
   
  </StrictMode>,
)
