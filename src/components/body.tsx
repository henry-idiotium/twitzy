import * as cookies from 'cookies-next';

const THEME_KEY = process.env.THEME_COOKIE_KEY;
const THEME_ATTR_NAME = process.env.NEXT_PUBLIC_THEME_ATTR_KEY;

type BodyProps = React.PropsWithChildren & React.ComponentProps<'body'> & GenericDict;

/**App custom body tag. */
export function Body({ children, ...props }: BodyProps) {
  // Set dark mode before via cookie on page request.
  if (cookies.hasCookie(THEME_KEY)) {
    const isDark = cookies.getCookie(THEME_KEY) === 'true';
    props[THEME_ATTR_NAME] = isDark ? 'dark' : 'light';
  }

  return <body {...props}>{children}</body>;
}
