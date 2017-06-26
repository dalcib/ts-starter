import * as React from 'react'
//import * as ReactDOM from 'react-dom';
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { AppRegistry } from 'react-native'
import './index.css'

/*ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);*/

AppRegistry.registerComponent('MyApp', (): React.ComponentClass<any> => App)
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root'),
})

registerServiceWorker()
