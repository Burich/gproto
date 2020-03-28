import React, { Component } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchTypesOfJobs } from "../../actions/types-of-jobs";

import './types-of-jobs-tree.scss';

class TypesOfJobsTreeContainer extends Component {
  state = {
    openedSections: []
  }

  componentDidMount() {
    this.props.fetchTypesOfJobs();
  }

  componentDidUpdate(prevprops) {
    if (prevprops.values.length !== this.props.values.length) {
      this.setState({
        openedSections: this.props.values.map(({id}) => id)
      })
    }
  }

  onBranchClicked = (id) => {
    this.setState(({openedSections}) => {
      return {
        openedSections: openedSections.includes(id)
          ? openedSections.filter(section => section !== id)
          : [...openedSections, id]
      }
    })
  }

//TODO: Tree component
  render() {
    const sections = this.props.values;
    const {openedSections} = this.state;

    return (
      <div className="types-of-jobs-tree">
        <div className="tree-header">Раздел / Вид работ</div>
        {
          sections.map(({id, section, types}) => {
            return (
              <div key={id} className="tree-section">
                <div 
                  className="tree-section-title"
                  onClick={() => this.onBranchClicked(id)}
                >
                  {section}
                </div>
                {
                  openedSections.includes(id) ?
                  types.map(({id, name, measureUnit}) => {
                  return (
                    <div key={id} className="tree-leaf">
                      {`${name}, ${measureUnit}`}
                    </div>
                    )
                  })
                  : null
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({typesOfJobs}) => {
  return {
    ...typesOfJobs
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchTypesOfJobs: fetchTypesOfJobs(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(TypesOfJobsTreeContainer);