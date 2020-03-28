import React from 'react'

import './error-status.scss'

const ErrorStatus = ({error}) => {
  const message = error.message || error;

  return (
  <div className="error-status">Произошла ошибка: {message}</div>
  )
}

export default ErrorStatus;