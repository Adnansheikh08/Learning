import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import Step5 from './Component/Step5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Step5/>
  </StrictMode>,
)
