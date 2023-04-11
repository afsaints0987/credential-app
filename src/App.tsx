import React from 'react'
import Navigation from './components/Navigation/Navigation.view'
import Header from './components/Header/Header.view'
import Pages from './components/Pages/Pages.view'


const App: React.FC = () => {

  return (
    <div className="App">
      <Header/>
      <div className="d-flex flex-row">
        <Navigation />
        <Pages/>
      </div>
    </div>
  )
}



export default App
