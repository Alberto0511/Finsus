import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InterestCalculatorV2 from './components/InterestCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterestCalculatorV2 />
  </StrictMode>,
)
