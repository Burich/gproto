import React, {Component} from 'react'

import MainHeader from '../main-header';
import TopMenu from '../top-menu';
import ActionsBar from '../actions-bar';
import SearchField from '../search-field'
import TableActions from '../table-actions';
import BackButton from '../back-button';

import StructuralElementsTable from '../structural-elements';

class StructuralElementsPage extends Component {
  state = {
    selected: null
  }

  rowSelected = (row = null) => {
    this.setState({selected: row});
  }

  render() {
    const {selected} = this.state;

    return (
    <React.Fragment>
      <MainHeader />
      <TopMenu />
      <ActionsBar>
        {
          (selected !== null) ? (
            <React.Fragment>
              <TableActions />
              <BackButton
                onClick={() => this.rowSelected()}
              />
            </React.Fragment>
          ) : (
            <SearchField />
          )
        }
        </ActionsBar>
      <StructuralElementsTable 
        selected={selected}
        onRowSelected={this.rowSelected}
      />
    </React.Fragment>
  )}
}

export default StructuralElementsPage;