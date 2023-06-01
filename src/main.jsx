import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GameHome from './components/GameHome.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/game",
    element : <GameHome.jsx />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
