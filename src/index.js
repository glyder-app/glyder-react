import React from 'react'
import ReactDOM from 'react-dom'

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  const App = require('./App').default
  ReactDOM.render(<App />, MOUNT_NODE)
}

render()

if (module.hot) {
  module.hot.accept(['./App'], () =>
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render()
    }),
  )
}
