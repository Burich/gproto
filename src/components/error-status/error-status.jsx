import React from 'react'

import './error-status.scss'

const ErrorStatus = ({error}) => {
  return (
  <div className="error-status">Произошла ошибка: {error}</div>
  )
}

export default ErrorStatus;