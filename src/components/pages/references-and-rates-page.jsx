import React, {Component} from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
import TableActions from '../table-actions';

import ReferencesAndRatesTreeTable from '../references-and-rates';
import FotAndMachineryTabs from '../fot-and-machinery';

import './references-and-rates-page.scss';

class ReferencesAndRatesPage extends Component {
  state = {
    current: null
  }

  onTypeSelected = (id = null) => {
    this.setState({
      current: id
    });
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <TopMenu />
        <ActionsBar>
          <SearchField />
          <TableActions />
        </ActionsBar>
        <div className="left-right">
          <ReferencesAndRatesTreeTable onTypeSelected={this.onTypeSelected} />
          <FotAndMachineryTabs current={this.state.current} />
        </div>
      </React.Fragment>
    )
  }
}

export default ReferencesAndRatesPage;