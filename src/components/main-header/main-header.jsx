import React from 'react'

import { Link } from "react-router-dom";

import { config } from "../../constants";

import './main-header.scss'

const MainHeader = () => {
  return (
    <div className="main-header">
      <Link to={config.link('/')}>
        Интеграционное решение
      </Link>
    </div>
  )
}

export default MainHeader;