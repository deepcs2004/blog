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
        loader={({ params }) => fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=4w2z0rXNXqtOB7GPm3GCFPkw-G9XOStmOa6sUF5oy_HUZLPhapt3w0SP5E8cUEuzVvZnePBvKtA8Ma2MRja6mDlPgAW7zLk6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE3xg_5SnZk5KCu5ivEpb4efWdzsgJsvh-Nv0Yeh5KT61nHPcvbyBJUic5D5xtNOGvUKPEOUjgd97AoLsGfVXgcNjytG121TBtz9Jw9Md8uu&lib=MpkQqPPNJx1Cns-Lr2G_PjPgbD6tHr73D`)

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
