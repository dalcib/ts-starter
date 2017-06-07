import 'react-native'
import * as React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
  expect(7).toBe(2 + 4)
})

it('snapshot App', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
