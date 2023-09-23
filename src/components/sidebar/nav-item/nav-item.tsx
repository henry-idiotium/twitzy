'use client';

import { Container, DisplayText, IconWrapper, Wrapper } from './nav-item.css';

import { useBoolean } from 'react-use';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
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
      <Container>
        <Wrapper>
          <IconWrapper>
            <Icon weight={isActive ? 'fill' : 'regular'} />
          </IconWrapper>

          <DisplayText $active={isActive}>{displayName}</DisplayText>
        </Wrapper>
      </Container>
    </Link>
  );
}
