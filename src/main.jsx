import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './Components/Store/store'
import { Provider } from 'react-redux'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
)
