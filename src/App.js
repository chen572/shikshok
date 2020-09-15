import React from 'react'
import './App.css'
import ProductsContainer from './components/VideoTest/ProductsContainer'
import UserPage from './components/UserPage/UserPage'
import AppFooter from './components/VideoTest/AppFooter'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useUserInfo } from './hooks/hooks'
import DiscoverPage from './components/VideoTest/DiscoverPage'

function App() {
  const userInfo = useUserInfo()

  return (
    <Router>
      <Route exact path='/' render={() => <Redirect to='/products'></Redirect>} />
      <Route exact path='/products' render={() => <ProductsContainer />} />
      <Route exact path='/me' render={() => <UserPage userInfo={userInfo} />} />
      <Route exact path='/discover' render={() => <DiscoverPage />} />
      <AppFooter userInfo={userInfo} />
    </Router>
  );
}

export default App
