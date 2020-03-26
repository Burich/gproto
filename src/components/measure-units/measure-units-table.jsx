import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService } from "../../hoc";
import { fetchMeasureUnits } from "../../actions/measure-units";

const MeasureUnitsTable = ({values}) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Ед.изм</td>
          <td>Базовая ед.изм</td>
          <td>Коэф. преобразования</td>
        </tr>
      </thead>
      <tbody>
        {
          values.map(value => {
            return (
              <tr key={value.id}>
                <td>{value.unit}</td>
                <td>{value.base}</td>
                <td>{value.factor}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

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

    return <MeasureUnitsTable values={values} />
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