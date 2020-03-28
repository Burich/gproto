import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchStructuralElements } from "../../actions/structural-elements";

import Table from "../table";

class StructuralElementsTableContainer extends Component {
  componentDidMount() {
    this.props.fetchStructuralElements();
  }

  render() {
    const {values, selected, onRowSelected} = this.props;

    let properties = [];

    if (selected !== null) {
      properties = values[selected].properties
      .map(({name, measureUnit, value}) => {return {
        name: measureUnit ? `${name}, ${measureUnit}` : name,
        value
      }});
    }

    return (selected !== null) ? (
      <React.Fragment>
        <Table 
          values={properties}
          columns={[
            {label: 'Признак', property: 'name'},
            {label: 'Значение', property: 'value'},
          ]}
        />
      </React.Fragment>
      ) : (
      <React.Fragment>
        <Table 
          values={values}
          columns={[
            {label: 'ID', property: 'elemId'},
            {label: 'Наименование элемента', property: 'name'},
            {label: 'Класс', property: 'class'},
          ]}
          onRowSelected={onRowSelected}
        />
      </React.Fragment>
      )
  }
}

const mapStateToProps = ({structuralElements}) => {
  return {
    ...structuralElements
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchStructuralElements: fetchStructuralElements(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(StructuralElementsTableContainer);