import React from 'react'

import MeasureUnitsTable from "../measure-units";
import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
import TableActions from '../table-actions';

const MeasureUnitsPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <ActionsBar>
        <SearchField />
        <TableActions />
      </ActionsBar>
      <MeasureUnitsTable />
    </React.Fragment>
  )
}

export default MeasureUnitsPage;