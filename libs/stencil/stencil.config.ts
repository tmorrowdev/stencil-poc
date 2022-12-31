import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';


import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

import { reactOutputTarget } from '@stencil/react-output-target';
// import tailwind, { tailwindGlobal, tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
// import tailwindcss from 'tailwindcss';
// import tailwindConf from './tailwind.config';
// import autoprefixer from 'autoprefixer';

// setPluginConfigurationDefaults({
//   tailwindConf,
//   tailwindCssPath: './src/styles/tailwind.css',
//   postcss: {
//     plugins: [
//       tailwindcss(),
//       autoprefixer()
//     ]
//   }
// });
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  
  namespace: 'stencil',
  taskQueue: 'async',
  plugins: [
    sass(),
  
    ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    angularOutputTarget({
      componentCorePackage: '@ds/stencil',
      directivesProxyFile:
        'libs/stencil-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        'libs/stencil-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),

    reactOutputTarget({
      componentCorePackage: '@ds/stencil',
      proxiesFile: 'libs/stencil-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
