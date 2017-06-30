import * as React from 'react'
import { AppRegistry, Image, StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native'

// Components
const Card = ({ children }: any) => <View style={styles.card}>{children}</View>
const Title = ({ children }: any) => <Text style={styles.title}>{children}</Text>
const Photo = ({ uri }: {uri: string}) => <Image source={{ uri }} style={styles.image} />
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri="/some-photo.jpg" />
  </Card>
)

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  } as ViewStyle,
  title: {
    fontSize: 1.25,
    fontWeight: 'bold',
    fontFamily: "Roboto"
  } as TextStyle,
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})

/*import './App.css'

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
}*/

export default App
