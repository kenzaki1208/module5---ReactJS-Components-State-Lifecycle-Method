import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPractice2 from '../app/AppPractice2.jsx'

createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <AppPractice2 />
  </StrictMode>,
)