import '@fortawesome/fontawesome-svg-core/styles.css';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
library.add(fas);
library.add(far);

export function FontAwesomeWrapper({ children }: React.PropsWithChildren) {
  return children;
}
