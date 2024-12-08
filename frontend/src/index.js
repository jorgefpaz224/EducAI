import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MainContent from './MainContent';
import Bienvenida from './pages/Bienvenida';
import NuestrosServicios from './pages/NuestrosServicios';
import Tutorias from './pages/Tutorias';
import AgendarTutorias from './pages/AgendarTutoria';
import EvaluacionPage from './pages/EvaluacionPage'; // Import the new page
import PresentacionPage from './pages/PresentacionPage'; // Import the PresentacionPage


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/main',
    element: <MainContent />,
    children: [
      {
        path: '',
        element: <Bienvenida />,
      },
      {
        path: 'nuestrosServicios',
        element: <NuestrosServicios />,
      },
      {
        path: 'tutorias',
        element: <Tutorias />,
      },
      {
        path: 'agendarTutorias',
        element: <AgendarTutorias />,
      },
      {
        path: 'evaluacion/:id_curso',
        element: <EvaluacionPage />, // Add the new route
      },
      {
        path: 'presentacion/:id_estudiante/:id_curso',
        element: <PresentacionPage />, // Add the new route
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);