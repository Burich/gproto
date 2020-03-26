import React from 'react'

import './actions-bar.scss'

const ActionsBar = ({children}) => {
  return (
    <div className="actions-bar">
      {children}
    </div>
  )
}

export default ActionsBar;