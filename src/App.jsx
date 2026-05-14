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
const App = () => {
  return (
      <Routes>

        <Route path="/" element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Admissions' element={<Admissions />} />
        <Route path='/Portal' element={<Portal />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Nursery' element={<Nursery />} />
        <Route path='/Primary' element={<Primary />} />
        <Route path='/Secondary' element={<Secondary />} />
        <Route path='/ICTTraining' element={<ICTTraining />} />
        <Route path='/Sports' element={<Sports/>} />
        </Route>
      </Routes>
  )
}

export default App
