import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPractice1 from '../app/AppPractice1'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <AppPractice1 />
  </StrictMode>,
)
