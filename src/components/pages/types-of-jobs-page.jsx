import React from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
import TableActions from '../table-actions';

import TypesOfJobsTree from '../types-of-jobs';

const TypesOfJobsPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <ActionsBar>
        <SearchField />
        <TableActions />
        ФТ-2.2
      </ActionsBar>
      <TypesOfJobsTree />
    </React.Fragment>
  )
}

export default TypesOfJobsPage;