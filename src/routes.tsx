import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/home/landing-page';
import DashboardPage from './pages/dashboard/dashboard-page';
import RootLayout from './layouts/root-layout';
import LoginPage from './pages/auth/login-page';
import DashboardLayout from './layouts/dashboard-layout';
import PjuPage from './pages/dashboard/pju-page';
import CctvPage from './pages/chatbot/cctv-page';
import ProtectedRoute from './layouts/protected-route';
import NotFound from './pages/error/not-found';
import ChatbotLayout from './pages/chatbot/chatbot-layout';
import ChatbotWelcomePage from './pages/chatbot/chatbot-welcome-page';
import Chatbot from './pages/dashboard/chatbot-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
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
            element: (
              <ProtectedRoute>
                <PjuPage />
              </ProtectedRoute>
            ),
          },
          {
            path: 'cctv',
            element: <CctvPage />,
          },
        ],
      },
      {
        path: 'chatbot',
        element: <ChatbotLayout />,
        children: [
          {
            index: true,
            element: <ChatbotWelcomePage />,
          },
          {
            path: ':conversationId',
            element: <Chatbot />,
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
