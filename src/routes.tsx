import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/home/landing-page';
import DashboardPage from './pages/dashboard/dashboard-page';
import RootLayout from './layouts/root-layout';
import LoginPage from './pages/auth/login-page';
import DashboardLayout from './layouts/dashboard-layout';
import PjuPage from './pages/dashboard/pju/pju-page';
import CctvPage from './pages/dashboard/cctv-page';
import ProtectedRoute from './layouts/protected-route';
import NotFound from './pages/error/not-found';
import ChatbotLayout from './pages/chatbot/chatbot-layout';
import ChatbotWelcomePage from './pages/chatbot/chatbot-welcome-page';
import Chatbot from './pages/chatbot/chatbot-page';
import AccountPage from './pages/dashboard/account-page';
import UserManagementPage from './pages/dashboard/user-management/user-management-page';
import Pju2Page from './pages/dashboard/pju/pju2-page';
import SelectChatbotPage from './pages/dashboard/select-chatbot/select-chatbot-page';

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
            path: 'pju1',
            element: (
              <ProtectedRoute>
                <PjuPage />
              </ProtectedRoute>
            ),
          },
          {
            path: 'pju2',
            element: (
              <ProtectedRoute>
                <Pju2Page />
              </ProtectedRoute>
            ),
          },
          {
            path: 'cctv',
            element: <CctvPage />,
          },
          {
            path: 'account',
            element: (
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            ),
          },
          {
            path: 'users',
            element: (
              <ProtectedRoute>
                <UserManagementPage />
              </ProtectedRoute>
            ),
          },
          {
            path: 'select-chatbot',
            element: <SelectChatbotPage />,
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
