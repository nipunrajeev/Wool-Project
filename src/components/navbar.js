import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from './register';
import Marketplace from './marketplace';
import Frontpage from './frontpage';
import './basic.css'

export class Navbar extends Component {
  render() {
    return (
      <Router>
      <ul class="nav nav-tabs">
      <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link> {/* Use Link */}
                </li>
  <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link> {/* Use Link */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/marketplace">Market</Link> {/* Use Link */}
                </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
<div>
<Routes>
    <Route path="/" element={<Frontpage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/marketplace" element={<Marketplace />} />

            
</Routes>
</div>
</Router>
    )
  }
}
export default Navbar