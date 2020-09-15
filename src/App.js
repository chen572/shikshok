import React from 'react'
import './App.css'
import ProductsContainer from './components/VideoTest/ProductsContainer'
import UserPage from './components/UserPage/UserPage'
import AppFooter from './components/VideoTest/AppFooter'
import Messages from './components/VideoTest/Messages'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useUserInfo } from './hooks/hooks'

function App() {
  const userInfo = useUserInfo()

  return (
    <Router>
      <Route exact path='/' render={() => <Redirect to='/products'></Redirect>} />
      <Route exact path='/products' render={() => <ProductsContainer />} />
      <Route exact path='/me' render={() => <UserPage userInfo={userInfo} />} />
      <Route path="/messages" exact render={() => <Messages />} />
      <AppFooter userInfo={userInfo} />
    </Router>
  );
}

export default App
