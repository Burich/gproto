import React from 'react'

import LoadingStatus from '../components/loading-status'

import './hoc.scss'

const withLoadingStatus = () => (Wrapped) => {
  return (props) => {
    return (
      <div className="status-wrapper">
        <Wrapped {...props} />
        {props.loading ? <LoadingStatus /> : null}
      </div>
  );}
}

export default withLoadingStatus;