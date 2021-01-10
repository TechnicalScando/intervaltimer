import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Setup from './Components/Setup/Setup'

function App () {
  return (
    <Router>
      <Route path='/' exact component={Setup} />
    </Router>
  )
}

export default App
