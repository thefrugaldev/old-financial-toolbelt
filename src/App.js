import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import MainBanner from './components/main-banner/MainBanner'
import FlashMessage from './utils/auth/FlashMessage'
import Login from './utils/auth/Login'
import Signup from './utils/auth/Signup'
import Authenticated from './utils/auth/Authenticated';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FlashMessage />
        <div className='jumbotron text-center'>
          <div className='container'>
            <Route exact path='/' render={() =>
              <div>
                <h1 className='jumbotron-heading'>Welcome to the Financial Toolbelt</h1>
                <p className='lead text-muted'>
                  This application is meant to provide tools that help with personal finance.
                </p>

                <p className='lead text-muted'>
                  Select from one of the links in the navigation above.
                </p>
              </div>
            } />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/signup' component={() => <Signup />} />
            <Route exact path='/dashboard' component={() => 
              <Authenticated />
            }/>
            <Route exact path='/signedOut' component={() => 
              <h1 className='content'>You're now signed out.</h1>} 
            />
            <Route exact path='/accountCreated' component={() => 
              <h1 className='content'>Account created.
                <Link to='/login'>Proceed to Dashboard</Link>
              </h1>}
            />
            <MainBanner />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
