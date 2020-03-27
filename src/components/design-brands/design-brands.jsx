import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchDesignBrands } from "../../actions/design-brands";

import Table from "../table";

class DesignBrandsTableContainer extends Component {
  componentDidMount() {
    this.props.fetchDesignBrands();
  }

  render() {
    return <Table 
      values={this.props.values}
      columns={[
        {label: 'Наименование основного комплекта рабочих чертежей', property: 'name'},
        {label: 'Марка', property: 'brand'},
      ]}
    />
  }
}

const mapStateToProps = ({designBrands}) => {
  return {
    ...designBrands
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchDesignBrands: fetchDesignBrands(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(DesignBrandsTableContainer);