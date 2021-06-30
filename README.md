1.In this demo I am using React framework -- template typescript and hooks function

2.UI framework: I am using Material-UI typescript mode

3.npm libs I am using  axios, customize-cra and react-app-rewired

4.Demo instrctions
assets 
    - style 
        - global.ts ==>set gloabl css style and App css style

component
    -Loading
        -container
            -index.tsx ===> Loading functions
        -ui
            -LoadingUi.tsx ===> Loading ui
            -style
                -LoadingStyle ===> Loading css style
    -weather
        -container
            -index.tsx  ===> this is weather functions 
        -ui
            -WeatherUi  ===> this is for render weather ui
            -style
                -weatherStyle ===> this is for weatger component css style
    -index.ts ===> export components throught here

models - for data interface

utils 
    - useGeolocation.ts  
    ===> in this file, I am using navigator.geolocation throught google map api link  to get lat and lng, and then I destructed data to find locally city name. And I am using city name to request weather api to get data.

-App.tsx ==> I am running useGeolocation in App file, and then I confirm data is not undefined to pass data to the son-component(weather component) which means the values transfer from father to son component ;


-config-overrides.js  ===> this is for customize-cra such as setting up path

-paths.json ===> this one is for typescript that could be redesign my path value

-tsconfig.json ===> should import paths.json at the top
