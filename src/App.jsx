import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Feed from './components/Feed'

function App() {

  return (
    <div className="App">
      <h1>Hi</h1>


      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  )
}

export default App
