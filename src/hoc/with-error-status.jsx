import React from 'react'

import ErrorStatus from '../components/error-status';

import './hoc.scss'

const withErrorStatus = () => (Wrapped) => {
  return (props) => {
    return (
      <div className="status-wrapper">
        <Wrapped {...props} />
        {props.error ? <ErrorStatus error={props.error} /> : null}
      </div>
    )
  }
}

export default withErrorStatus;