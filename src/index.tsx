import * as React from 'react'
//import * as ReactDOM from 'react-dom';
import App from './App'
//import registerServiceWorker from './registerServiceWorker'
import { AppRegistry } from 'react-native'
import './index.css'

/*ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);*/
/*
// generate required css
import fontAwesome from "react-native-vector-icons/Fonts/FontAwesome.ttf"
const reactNativeVectorIconsRequiredStyles = "@font-face { src:url("+fontAwesome+");font-family: FontAwesome; }"

// create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = reactNativeVectorIconsRequiredStyles;
} else {
  style.appendChild(document.createTextNode(reactNativeVectorIconsRequiredStyles));
}

// inject stylesheet
document.head.appendChild(style);
*/

class AppContainer extends React.Component<any, any> {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent(
  'MyApp',
  (): React.ComponentClass<any> => AppContainer
)
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root')
})

//registerServiceWorker()  //
