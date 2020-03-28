import React from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
// import TableActions from '../table-actions';

import StructuralElementsTable from '../structural-elements';

const StructuralElementsPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <ActionsBar>
        <SearchField />
      </ActionsBar>
      <StructuralElementsTable />
    </React.Fragment>
  )
}

export default StructuralElementsPage;