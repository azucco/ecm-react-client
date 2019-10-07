import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/freelancer.css';
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  )
}
