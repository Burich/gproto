import React from 'react'

import { connect } from "react-redux";

const LoadingScreen = ({loadings}) => {
  const loading = loadings.filter(value => value === true).length;

  return loading ? (
    <div className="loading-screen">
      TODO: Loading Screen
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return {loadings: [
    state.measureUnits.loading,
    state.designBrands.loading
  ]}
};

export default connect(mapStateToProps)(LoadingScreen);