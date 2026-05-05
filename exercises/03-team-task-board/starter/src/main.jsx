import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import EachMember from './Components/EachMember.jsx'
import EachMemberPage from './Pages/EachMemberPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>

    </BrowserRouter>
    </StrictMode>,
)
