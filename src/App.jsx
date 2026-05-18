import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './Layout/Layout'
import Gallery from './components/pages/Gallery'
import Portal from './components/pages/Portal'
import Admissions from './components/pages/AdmissionPage'
import Events from './components/pages/Events'
import FAQ from './components/pages/Faqs'
import Nursery from './components/pages/Nursery'
import Primary from './components/pages/Primary'
import Secondary from './components/pages/Scholl'
import ICTTraining from './components/pages/ICtTraining'
import Sports from './components/pages/Supports'
import ContactPage from './components/pages/Contact'
import Programs from './components/Programs'
import ProgramsPage from './components/pages/Programs'
import AboutPage from './components/pages/About'
import SchoolProfileSystem from './components/pages/prs'
const App = () => {
  return (
      <Routes>

        <Route path="/" element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/Programs' element={<ProgramsPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Admissions' element={<Admissions />} />
        <Route path='/Portal' element={<Portal />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Nursery' element={<Nursery />} />
        <Route path='/Primary' element={<Primary />} />
        <Route path='/Secondary' element={<Secondary />} />
        <Route path='/ICTTraining' element={<ICTTraining />} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='/SchoolProfile/:position' element={<SchoolProfileSystem/>} />
        </Route>
      </Routes>
  )
}

export default App
