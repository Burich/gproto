import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService } from "../../hoc";
import { fetchMeasureUnits } from "../../actions/measure-units";

import Table from "../table";

class MeasureUnitsTableContainer extends Component {
  componentDidMount() {
    this.props.fetchMeasureUnits();
  }

  render() {
    const { values, loading, error } = this.props;

    if (error) {
        return <div>TODO: error indicator</div>
    }

    if (loading) {
        return <div>TODO: loading indicator</div>
    }
    return <Table 
      values={values}
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
  connect(mapStateToProps, mapDispatchToProps)
)(MeasureUnitsTableContainer);