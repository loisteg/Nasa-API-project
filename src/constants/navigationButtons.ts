import { Public, PhotoLibrary, Image } from '@mui/icons-material';

import * as routes from './routes';

const navigationButtons = [
  { to: routes.NEOS.path, label: routes.NEOS.title, icon: Public },
  { to: routes.APOD.path, label: routes.APOD.title, icon: Image },
  {
    to: routes.COUNTER.path,
    label: routes.COUNTER.title,
    icon: PhotoLibrary,
  },
];

export default navigationButtons;
