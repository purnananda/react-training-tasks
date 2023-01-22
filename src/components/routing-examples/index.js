import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './header';
import Home from './home';
import Login from './login';
import About from './about';
import PageNotFound from './page-not-found';

const RoutingExamples = () => {
  return (
    <Router>
      <Header />
      <div className='container pt-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default RoutingExamples
