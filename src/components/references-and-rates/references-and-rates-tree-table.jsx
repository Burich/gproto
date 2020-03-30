import React, {Component} from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchReferencesAndRates } from "../../actions/references-and-rates";

class ReferencesAndRatesTreeTable extends Component {
  componentDidMount() {
    this.props.fetchReferencesAndRates();
  }

  render() {
    // const {values, onTypeSelected} = this.props;
    // console.log('values: ', values);

    return <div>TODO: ReferencesAndRatesTreeTable</div>
  }
}

const mapStateToProps = ({referencesAndRates}) => {
  return {
    ...referencesAndRates
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchReferencesAndRates: fetchReferencesAndRates(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(ReferencesAndRatesTreeTable);