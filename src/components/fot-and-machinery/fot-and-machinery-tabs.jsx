import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchFotAndMachinery } from "../../actions/fot-and-machinery";

import Tabs from '../tabs';
import Table from "../table";

class FotAndMachineryTabs extends Component {
  state = {
    selectedTab: 0
  }

  componentDidMount() {
    const {current} = this.props;

    if (current) {
      this.props.fetchFotAndMachinery(1/*current*/); //1 - пока единственный в поддельном
    }
  }

  componentDidUpdate(prevProps) {
    const {current} = this.props;
    
    if (current && (prevProps.current !== current)) {
      this.props.fetchFotAndMachinery(1/*current*/);
    }
  }

  onTabSelected = (idx) => {
    this.setState({
      selectedTab: idx
    })
  }

  showSelectedTable = () => {
    const {selectedTab} = this.state;
    const {value: {fot=[], machinery=[]}} = this.props;

    if (selectedTab === 0) {
      return (
        <Table 
          values={fot.map((props, idx) => {
            return {idx: idx + 1, ...props}
          })}
          columns={[
            {label: 'Номер', property: 'idx'},
            {label: 'Наименование', property: 'name'},
            {label: 'Ед.изм', property: 'measureUnit'},
            {label: 'Кол-во', property: 'count'},
          ]}
        />
      )
    } else {
      return (
        <Table 
          values={machinery.map((props, idx) => {
            return {idx: idx + 1, ...props}
          })}
          columns={[
            {label: '№', property: 'idx'},
            {label: 'Шифр', property: 'code'},
            {label: 'Наименование', property: 'name'},
            {label: 'Ед.изм', property: 'measureUnit'},
            {label: 'Норма', property: 'standart'},
          ]}
        />
      )
    }
  }

  render() {
    const {current} = this.props;

    if (!current) {
      return null;
    }

    return (
      <React.Fragment>
        <Tabs 
          labels={["ФОТ", "Механизмы"]}
          onTabSelected={this.onTabSelected}
        />
        {this.showSelectedTable()}
      </React.Fragment>
    )
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