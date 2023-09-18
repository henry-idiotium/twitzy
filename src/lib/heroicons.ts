import { createElement } from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

export type HeroIconName = keyof typeof SolidIcons;
export type HeroIconVersion = 'solid' | 'outline';
export type HeroIconProps = React.RefAttributes<SVGSVGElement> & {
  name: HeroIconName;
  outline?: boolean;
  title?: string;
  titleId?: string;
};

export function HeroIcon(_props: HeroIconProps) {
  const { name, outline, ...props } = _props;
  const icon = (outline ? OutlineIcons : SolidIcons)[name];
  return createElement(icon, { ...props });
}
