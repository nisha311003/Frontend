import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.jsx'

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <App />
  </Provider>
    /*Provider is a component, it gives the access to all components 
    or It makes the store available to all the components*/
  
)
