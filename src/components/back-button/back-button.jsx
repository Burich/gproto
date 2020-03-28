import React from 'react'

import './back-button.scss'

const BackButton = ({onClick}) => {
  return (
    <div 
      className="back-button"
      onClick={onClick}
    >Назад</div>
  )
};

export default BackButton;