import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidCctv } from 'react-icons/bi';
import { GiStreetLight } from 'react-icons/gi';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsChatTextFill } from 'react-icons/bs';

type SidebarLink = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

export const userSidebarLinks: SidebarLink[] = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: <RiDashboardFill />,
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

export const adminSidebarLinks: SidebarLink[] = [
  {
    to: '/dashboard/pju',
    label: 'Device PJU',
    icon: <GiStreetLight />,
  },
];
