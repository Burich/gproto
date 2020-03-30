import React from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
import TableActions from '../table-actions';

const ReferencesAndRatesPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <ActionsBar>
        <SearchField />
        <TableActions />
      </ActionsBar>
    </React.Fragment>
  )
}

export default ReferencesAndRatesPage;