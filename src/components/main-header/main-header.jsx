import React from 'react'

import { Link } from "react-router-dom";

import './main-header.scss'

const MainHeader = () => {
  return (
    <div className="main-header">
      <Link to='/'>
        Интеграционное решение
      </Link>
    </div>
  )
}

export default MainHeader;