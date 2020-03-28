import React, { Component } from 'react'

import ErrorStatus from '../error-status'

class ErrorBoundry extends Component {
  state = {
    error: undefined
  }

  componentDidCatch(error) {
    this.setState({error});
  }

  render() {
    const {error} = this.state;
    
    if (error) {
      return <ErrorStatus error={error} />
    }
    
    return this.props.children;
  }
}

export default ErrorBoundry;