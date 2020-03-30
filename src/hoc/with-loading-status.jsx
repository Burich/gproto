import React from 'react'

import LoadingStatus from '../components/loading-status'

import './hoc.scss'

const withLoadingStatus = () => (Wrapped) => {
  return (props) => {
    return (
      <div className={props.loading ? "status-wrapper" : null}>
        <Wrapped {...props} />
        {props.loading ? <LoadingStatus /> : null}
      </div>
  );}
}

export default withLoadingStatus;