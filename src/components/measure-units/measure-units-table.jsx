import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchMeasureUnits } from "../../actions/measure-units";

import Table from "../table";

class MeasureUnitsTableContainer extends Component {
  componentDidMount() {
    this.props.fetchMeasureUnits();
  }

  render() {
    return <Table 
      values={this.props.values}
      columns={[
        {label: 'Ед.изм', property: 'unit'},
        {label: 'Базовая ед.изм', property: 'base'},
        {label: 'Коэф. преобразования', property: 'factor'},
      ]}
    />
  }
}

const mapStateToProps = ({measureUnits}) => {
  return {
    ...measureUnits
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchMeasureUnits: fetchMeasureUnits(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(MeasureUnitsTableContainer);