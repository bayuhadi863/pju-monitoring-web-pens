import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import RootLayout from './layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import PjuPage from './pages/PjuPage';
import CctvPage from './pages/CctvPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'pju',
            element: <PjuPage />,
          },
          {
            path: 'cctv',
            element: <CctvPage />,
          },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
