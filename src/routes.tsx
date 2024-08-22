import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/home/landing-page';
import DashboardPage from './pages/dashboard/dashboard-page';
import RootLayout from './layouts/root-layout';
import LoginPage from './pages/auth/login-page';
import DashboardLayout from './layouts/dashboard-layout';
import PjuPage from './pages/dashboard/pju-page';
import CctvPage from './pages/dashboard/cctv-page';
import ChatbotPage from './pages/dashboard/chatbot-page';

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
          {
            path: 'chatbot',
            element: <ChatbotPage />,
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
