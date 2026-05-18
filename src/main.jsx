import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import {store} from './features/slices/Store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
      <Router>
     <ScrollToTop />
        <Routes>

        <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
