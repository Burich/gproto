import React from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';

import { localImage } from "../../utils";

import './main-page.scss'

const MeasureUnitsPage = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <div className="main-page">
        <div>
          <p>Прототип решения интеграции СПК и ЦИМ</p>
          <p>(формироавние графика СМР)</p>
        </div>
        <img 
          src={localImage('titleImage.png')}
          width="500"
          alt="main page title"
        />
      </div>
    </React.Fragment>
  )
}

export default MeasureUnitsPage;