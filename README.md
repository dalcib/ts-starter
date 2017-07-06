# README

SET BABEL_ENV=productiona

"preset": "jest-expo",
"globals": {
        "__DEV__": true
    },


webpack.dev.js 

185

      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve('ts-loader'),
        options: { compilerOptions: 
          {module: "commonjs",
          target: "es5",
          jsx: "react"}
        }
      },
      
103

      //'babel-runtime': path.dirname(
      //  require.resolve('babel-runtime/package.json')
     // ),
     
     react-app-rewired
     
     
"jest": {
  "preset": "jest-preset-typescript-react-native"
}



    "start-ts": "tsc -w",
    "init-npm": "npm link mobx mobx-react js-plus tslib tsutils @types/node react @types/react ts-jest",
    "init-cra-base": "npm link react react-dom react-scripts @types/react @types/react-dom",
    "init-crna-base": "npm link react react-native react-native-scripts expo @types/react @types/react-native react-test-renderer jest-expo",
    "init-jest": "npm link jest-expo react-test-renderer ts-jest jest @types/jest babel-jest babel-preset-expo babel-plugin-transform-es2015-modules-commonjs",
    "init-cra": "run-s init-cra-base init-npm",
    "init-crna": "run-s init-crna-base init-npm",
    "prettier": "prettier --write \"app/**.*(ts|tsx)\" --parser typescript --single-quote --bracket-spacing=false --no-semi",
    "install-npm": "npm i -g mobx mobx-react js-plus tslib tsutils @types/node react@16.0.0-alpha.6 @types/react ts-jest",
    "install-cra": "npm i -g  react-dom@16.0.0-alpha.6 react-scripts  @types/react-dom",
    "install-crna": "npm i -g  react-native@0.44.0 expo@17.0.0  @types/react-native  react-native-scripts@0.0.30 react-test-renderer@16.0.0-alpha.6 jest-expo",
    "install-eslint": "npm i -g eslint-config-react-app eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype eslint-plugin-import",
    "install-jest": "npm i -g jest-expo react-test-renderer ts-jest jest @types/jest babel-jest babel-preset-expo babel-plugin-transform-es2015-modules-commonjs"


      {
        test: /\.(js|jsx)$/,
        include: [
          paths.appSrc,
          /node_modules[\\\/]react-native-.*/
        ],
        loader: require.resolve('babel-loader'),
        options: {
          // @remove-on-eject-begin
          babelrc: false,
          presets: [require.resolve('babel-preset-react-native')],
          // @remove-on-eject-end
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },