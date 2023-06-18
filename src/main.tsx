import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './Pages/Main'
import './index.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/Test'
// import Configurator from "./Pages/Configurator.tsx";
import Test from "./test";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OIDC_CLIENTID}><Login /></GoogleOAuthProvider>} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function NotFound() {
  return <h1>404 - Page not found</h1>;
}