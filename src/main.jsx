import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InterestCalculatorV2 from './Calculator/components/InterestCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterestCalculatorV2 />
  </StrictMode>,
)
