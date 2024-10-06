import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidCctv } from 'react-icons/bi';
import { GiStreetLight } from 'react-icons/gi';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsChatTextFill } from 'react-icons/bs';
import { SidebarLinkDataType } from '../types/sidebar-types';

export const userSidebarLinks: SidebarLinkDataType[] = [
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
    to: '/chatbot',
    label: 'Chatbot AI',
    icon: <BsChatTextFill />,
  },
];

export const adminSidebarLinks: SidebarLinkDataType[] = [
  {
    to: '/dashboard/pju',
    label: 'Device PJU',
    icon: <GiStreetLight />,
  },
];
