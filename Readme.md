Project structure

1 - create folder src
2 - create folder src/assets
3 - create folder src/screens

Setup absolut imports

1 - npm i babel-plugin-module-resolver
2 - update babel.config.js
3 - update paths in tsconfig.json

Setup eslint 

1 - npm install eslint @rocketseat/eslint-config -D
2 - create .eslintrc.json
3 - reload VS code window

Setup Styled Components

1 - npm install styled-components
2 - if there is a conflict in react version add overrides to package.json
3 - create @types folder 
4 - declare module to DefaultTheme extending from theme type 

Setup fonts 

1 - download from google fonts .ttf
2 - create a fonts folder in assests from root
3 - require in App.tsx the fonts
4 - npm install expo-fonts
5 - import useFonts from expo-fonts