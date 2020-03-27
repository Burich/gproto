import React from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';

import './not-found-page.scss'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <div className="not-found-page">Страница не найдена</div>
    </React.Fragment>
  )
}

export default NotFoundPage;