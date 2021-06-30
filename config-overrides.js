const { override, useBabelRc, addWebpackAlias, addWebpackResolve, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    //path config
    addWebpackAlias({
        '@': path.resolve(__dirname, "./src"),
    }),
    //config resolve
    addWebpackResolve({
        extensions: [".tsx", ".ts", ".js"],
    }),
    //decorator for react
    addDecoratorsLegacy(),
)