import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InterestCalculator from './Calculator/InterestCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterestCalculator />
  </StrictMode>,
)
