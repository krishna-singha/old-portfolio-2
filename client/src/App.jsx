import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Template, Home, Blogs, Projects, Contact, Admin, Build, Error, Auth } from "./components/pages/export"
import ContactMessage from './components/Contact.message'
import BuildMessage from './components/Build.message'

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return(
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/build' element={<Build />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/admin/contact-message' element={<ContactMessage />} />
          <Route path='/admin/build-message' element={<BuildMessage />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
