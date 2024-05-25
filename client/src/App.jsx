import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Template, Home, Blogs, Projects, Contact } from "./components/pages/export"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
