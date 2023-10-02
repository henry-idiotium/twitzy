'use client';
import { NavItem, NavItemProps } from './nav-item/nav-item';

import * as Icon from '@phosphor-icons/react';

const navItems: NavItemProps[] = [
  { displayName: 'Home', href: '/home', icon: Icon.House },
  { displayName: 'Notifications', href: '/notifications', icon: Icon.Bell },
  { displayName: 'Messages', href: '/messages', icon: Icon.ChatsTeardrop },
  { displayName: 'Friends', href: '/friends', icon: Icon.UsersThree },
  { displayName: 'Profile', href: '/profile', icon: Icon.UserCircle },
];

export function Sidebar() {
  // const isHidden = useMedia(`(max-width: ${theme`screens.sm`})`, false);
  // if (isHidden) return <>sidebar hidden</>;

  return (
    <div className="wh-full flex flex-col justify-center bg-red-500">
      <div className="flex flex-col gap-2 bg-red-500">
        {navItems.map((args, index) => (
          <NavItem key={args.displayName + index} {...args} />
        ))}
      </div>
    </div>
  );
}
