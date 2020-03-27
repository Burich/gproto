import React from 'react'

import DesignBrandsTable from "../design-brands";
import MainHeader from '../main-header';
import TopMenu from '../top-menu';

const DesignBrandsPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <DesignBrandsTable />
    </React.Fragment>
  )
}

export default DesignBrandsPage;