import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

import { reactOutputTarget } from '@stencil/react-output-target';
import tailwind, { tailwindGlobal, tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';

setPluginConfigurationDefaults({
  tailwindConf,
  tailwindCssPath: './src/styles/tailwind.css',
  postcss: {
    plugins: [
      tailwindcss(),
      autoprefixer()
    ]
  }
});
export const config: Config = {
  
  namespace: 'stencil',
  taskQueue: 'async',
  plugins: [
    sass(),
    tailwindGlobal(),
    tailwind(),
    tailwindHMR()
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
      componentCorePackage: '@wc/stencil',
      directivesProxyFile:
        'libs/stencil-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        'libs/stencil-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),

    reactOutputTarget({
      componentCorePackage: '@wc/stencil',
      proxiesFile: 'libs/stencil-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
