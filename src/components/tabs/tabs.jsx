import React, { Component } from 'react'

import './tabs.scss';

class Tabs extends Component {
  state = {
    selected: 0
  }

  onTabSelected = (idx) => {
    this.setState({
      selected: idx
    });

    this.props.onTabSelected(idx);
  }

  render() {
    const {labels=[]} = this.props;
    const {selected} = this.state;

    return (
      <div className="tabs">
        {labels.map((label, idx) => {
          return (
            <div
              key={idx}
              onClick={() => this.onTabSelected(idx)}
              className={selected === idx ? "tab-is-active" : null}
            >
              {label}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Tabs;