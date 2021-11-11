import React from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <div className="container p-4">
        <Routes>
            <Route path='/' element={<MessageList />}></Route>
            <Route path='new-message' element={<MessageForm />}></Route>
          </Routes>  
      </div>
    </Router>
  )
}

export default App

