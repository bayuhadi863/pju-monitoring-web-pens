import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidCctv } from 'react-icons/bi';
import { GiStreetLight } from 'react-icons/gi';
import { BsChatTextFill } from 'react-icons/bs';

type SidebarLink = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

export const sidebarLinks: SidebarLink[] = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: <RiDashboardFill />,
  },
  {
    to: '/dashboard/pju',
    label: 'PJU',
    icon: <GiStreetLight />,
  },
  {
    to: '/dashboard/cctv',
    label: 'CCTV',
    icon: <BiSolidCctv />,
  },
  {
    to: '/dashboard/chatbot',
    label: 'Chatbot AI',
    icon: <BsChatTextFill />,
  },
];
