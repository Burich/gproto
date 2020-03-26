import React, {Component} from 'react'

import { Link } from "react-router-dom";

import './top-menu.scss'

const menuTree = [
  {label: 'Генеральный план', to: '/measure-units/'},
  {label: 'Настройки', submenu: [
    {label: 'Конструктивные элементы (КЭ)', to: ''},
    {label: 'Справочники норм и расценок (УЕР)', to: ''},
    {label: 'Виды работ СМР', to: ''},
    {label: 'Проектные марки', to: ''},
    {label: 'Ед.изм', to: '/measure-units/'},
  ]},
  {label: 'Рабочее место методолога', submenu: [
    {label: 'Правила связи УЕР и КЭ', to: ''},
    {label: 'Правила связи Видов работ и КЭ', to: ''},
  ]},
  {label: 'Ведомость объемов работ', to: ''},
  {label: 'Технологическая последовательность работ', to: ''},
]

class TopMenu extends Component {
  state = {
    hoveredIdx: undefined
  }

  onMouseLeave = (idx) => {
    this.setState(({hoveredIdx}) => {
      return {
        hoveredIdx: hoveredIdx === idx ? undefined : hoveredIdx
      }
    });
  }

  render() {
    // console.log(this.state.hoveredIdx);
    return (
      <div className="top-menu">
        <div className="top-menu-row">
          {
            menuTree.map(({label, to, submenu}, idx) => {
              return (to) 
              ? (
                <Link 
                  to={to} 
                  key={idx}
                  className="menu-item"
                >
                  <div 
                    onMouseEnter={() => this.setState({hoveredIdx: idx})}
                    onMouseLeave={() => this.onMouseLeave(idx)}
                  >
                    <span>{label}</span>
                  </div>
                </Link>
              ) 
              :
              (
                <div 
                  key={idx} 
                  className="menu-item"
                  onMouseEnter={() => this.setState({hoveredIdx: idx})}
                  onMouseLeave={() => this.onMouseLeave(idx)}
                >
                  <span>{label}</span>
                  {
                    ((this.state.hoveredIdx === idx) && submenu && submenu.length) ?
                      (
                        <div className="sub-menu">
                        {
                          submenu.map(({label, to}, sub_idx) => {
                            return (
                              <Link to={to} key={sub_idx}>
                                <div className="sub-menu-item">
                                  {label}
                                </div>
                              </Link>
                            )
                          })
                        }
                        </div>
                      ) 
                      : null
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default TopMenu;