import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const humanitecPlugin = createPlugin({
  id: 'humanitec',
  routes: {
    root: rootRouteRef,
  },
});

export const HumanitecPage = humanitecPlugin.provide(
  createRoutableExtension({
    name: 'HumanitecPage',
    component: () =>
      import('./components/HumanitecCardComponent').then(m => m.HumanitecCardComponent),
    mountPoint: rootRouteRef,
  }),
);
