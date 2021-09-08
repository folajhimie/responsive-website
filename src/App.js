import React from 'react'
// import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'
import SignUp from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import { Footer, Navbar } from './components';
const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App


