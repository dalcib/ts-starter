import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app !</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>
          Shake your phone to open the developer menu. llgggg
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
