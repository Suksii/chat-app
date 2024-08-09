import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext.jsx";
import {ConversationsProvider} from "./context/ConversationsContext.jsx";
import {SocketProvider} from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <ConversationsProvider>
                  <SocketProvider>
                      <App />
                  </SocketProvider>
              </ConversationsProvider>
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
