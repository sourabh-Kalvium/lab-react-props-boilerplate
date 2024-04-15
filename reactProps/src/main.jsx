import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppClass from './AppClass.jsx'
import DataComponent from"./components/DataComponent.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App imageData={DataComponent}/> */}
     <AppClass imageData={DataComponent}/>
  </React.StrictMode>,
)
