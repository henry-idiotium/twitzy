'use client';

import { useBoolean } from 'react-use';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import cn from 'clsx';
import { Icon } from '@phosphor-icons/react';

export type NavItemProps = (React.Attributes & LinkProps) & {
  icon: Icon;
  displayName: string;
  href: string;
};

export function NavItem(props: NavItemProps) {
  const { icon: Icon, displayName, ..._props } = props;

  const activePathname = usePathname();
  const [isActive, setIsActive] = useBoolean(false);

  useEffect(() => {
    const linkPathname = new URL(String(props.as || props.href), location.href).pathname;
    setIsActive(linkPathname === activePathname);
  }, [props.as, props.href, activePathname]);

  return (
    <Link {..._props}>
      <div className="w-full pl-4 py-2">
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center wh-8 [&>*]:wh-full [&>*]:stroke-0">
            <Icon weight={isActive ? 'fill' : 'regular'} />
          </div>

          <div
            className={cn('font-semibold text-xl xl-max:hidden', {
              'text-cyan-700': isActive,
            })}
          >
            {displayName}
          </div>
        </div>
      </div>
    </Link>
  );
}
