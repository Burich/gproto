import React from 'react'

import ErrorStatus from '../components/error-status';

import './hoc.scss'

const withErrorStatus = () => (Wrapped) => {
  return (props) => {
    return (
      <div className={props.error ? "status-wrapper" : null}>
        <Wrapped {...props} />
        {props.error ? <ErrorStatus error={props.error} /> : null}
      </div>
    )
  }
}

export default withErrorStatus;