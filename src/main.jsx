import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UpvoteProvider} from "~/UpvoteContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UpvoteProvider>
        <App />
      </UpvoteProvider>
  </StrictMode>,
)
