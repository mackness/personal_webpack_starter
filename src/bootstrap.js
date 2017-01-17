/* eslint no-console:0 */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Counter from './containers/Counter'
import count from './reducers'

export {bootstrap}

const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function(err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
  } else {
    console.info('✅  HMR Enabled.')
  }
} else {
  console.info('❌  HMR Not Supported.')
}

const render = () => {
  ReactDOM.render(
    <Provider store={createStore(count, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Counter />
    </Provider>
    , document.getElementById('root'))
}

window.onload = () => render()
