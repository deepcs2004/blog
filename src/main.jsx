import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Singleblog from './pages/Singleblog.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsCondition from './pages/TermsCondition.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='blog/' element={<Blog />} />


      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='Privacy-Policy' element={<PrivacyPolicy />} />
      <Route path='Terms&Condition' element={<TermsCondition />} />
      <Route
        path='blog/:id'
        element={<Singleblog />}
        loader={({ params }) => fetch(`https://raw.githubusercontent.com/deepcs2004/blog/main/blogsite/api/blogData.json`)

        }
      />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
