import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './BLL/store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

