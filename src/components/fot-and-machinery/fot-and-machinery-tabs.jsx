import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchFotAndMachinery } from "../../actions/fot-and-machinery";


//TODO: tabs container
class FotAndMachineryTabs extends Component {
  componentDidMount() {
    this.props.fetchFotAndMachinery(1);
  }

  render() {
    const {current, value} = this.props;
    console.log('values: ', value);

    return <div>TODO: FotAndMachineryTabs {current}</div>
  }
}

const mapStateToProps = ({fotAndMachinery}) => {
  return {
    ...fotAndMachinery
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchFotAndMachinery: fetchFotAndMachinery(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(FotAndMachineryTabs);