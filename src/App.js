import React from "react"
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Showcase from './component/showcase'
import Login from './component/login'
import SignUp from './component/signup'

function App() {
  return (
    <Router>
      < Header />
    <Routes>
      <Route exact path='/'>
        <Showcase />
      </Route>  

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/signp'>
        <SignUp />
      </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
