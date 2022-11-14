const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: 'ui',
  filename: './remoteEntry.js',
  exposes: {
    './routes': 'apps/ui/src/app/remote-entry/entry.routing.ts',
    './Component':'apps/ui/src/app/icon-button/icon-button.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }
});
