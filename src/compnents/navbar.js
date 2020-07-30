import React from 'react';
import { Link } from 'react-router-dom'
export default function ConfigNav() {
  return (
    <nav className="nav-container">
      <Link className="navbar-brand" to="/">PWA App</Link>
            <Link className="nav-item" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item" to="/about">About</Link>
            <Link className="nav-item" to="/user">User</Link>      
    </nav>
  )
}
