import * as React from 'react'
import './App.css'

const logo = require('./logo.svg')

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

/*
import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app !</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>
          Shake your phone to open the developer menu.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
})
*/
