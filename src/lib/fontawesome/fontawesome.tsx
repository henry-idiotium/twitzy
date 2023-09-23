import { forwardRef } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

const iconTypeMap = {
  line: 'far',
  fill: 'fas',
  brand: 'fab',
} as const satisfies GenericDict<IconPrefix>;

type FaProps = Omit<FontAwesomeIconProps, 'icon'> & {
  type?: keyof typeof iconTypeMap;
  name: IconName;
};

export const FontAwesome = forwardRef<SVGSVGElement, FaProps>(
  ({ name, type = 'line', ...props }, forwardedRef) => (
    <FontAwesomeIcon ref={forwardedRef} icon={type ? [iconTypeMap[type], name] : name} {...props} />
  ),
);
FontAwesome.displayName = 'AppFontAwesome';

export { FontAwesome as Fa };
