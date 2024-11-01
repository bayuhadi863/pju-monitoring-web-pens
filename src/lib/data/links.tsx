import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidCctv } from 'react-icons/bi';
import { GiStreetLight } from 'react-icons/gi';
import { BsChatTextFill } from 'react-icons/bs';
import { FaUserGroup } from 'react-icons/fa6';
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
    to: '/dashboard/select-chatbot',
    label: 'Chatbot AI',
    icon: <BsChatTextFill />,
  },
];

export const operatorSidebarLinks: SidebarLinkDataType[] = [
  {
    to: '/dashboard/pju1',
    label: 'Device PJU 1',
    icon: <GiStreetLight />,
  },
  {
    to: '/dashboard/pju2',
    label: 'Device PJU 2',
    icon: <GiStreetLight />,
  },
];

export const adminSidebarLinks: SidebarLinkDataType[] = [
  {
    to: '/dashboard/users',
    label: 'Manajemen User',
    icon: <FaUserGroup />,
  },
];
