import React from 'react'

import './top-menu.scss'

const menuTree = [
  {label: 'Генеральный план'},
  {label: 'Настройки'},
  {label: 'Рабочее место методолога'},
  {label: 'Ведомость объемов работ'},
  {label: 'Технологическая последовательность работ'},
]

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="top-menu-row">
        {
          menuTree.map(({label}, idx) => {
            return (
              <div key={idx} className="menu-item">
                <span>{label}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TopMenu;