/**
*  Import routes from subfolders and export them all as one object§
*  Used for routing
*/

import { routes as homeRoutes } from '@components/home/screens';
import { routes as navRoutes } from '@components/navigation/screens';

const routes = {
  ...homeRoutes,
  ...navRoutes
};

export default routes;
