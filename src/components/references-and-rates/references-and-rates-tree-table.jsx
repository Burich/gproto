import React, {Component} from 'react'

import { compose } from "redux";
import { connect } from "react-redux";

import { withGpApiService, withLoadingStatus, withErrorStatus } from "../../hoc";
import { fetchReferencesAndRates } from "../../actions/references-and-rates";

//TODO: TreeTable component
class ReferencesAndRatesTreeTable extends Component {
  componentDidMount() {
    this.props.fetchReferencesAndRates();
  }

  renderType = (type, idx) => {
    const {onTypeSelected} = this.props;

    return (
      <tr 
        key={type.id || idx}
        onClick={() => onTypeSelected(type.id)}
      >
        <td>{type.code}</td>
        <td>{type.name}</td>
        <td>{type.measureUnit}</td>
        <td>{type.cost}</td>
      </tr>
    )
  }

  renderGroup = (group, idx) => {
    return (
      <React.Fragment key={group.id || idx}>
        <tr>
          <td>{group.code}</td>
          <td><strong>{group.name}</strong></td>
          <td/>
          <td/>
        </tr>
        {group.types.map(this.renderType)}
      </React.Fragment>
    )
  }

  renderSection = (section, idx) => {
    return (
      <React.Fragment key={section.id || idx}>
        <tr>
          <td/>
          <td><strong>{section.name}</strong></td>
          <td/>
          <td/>
        </tr>
        {section.groups.map(this.renderGroup)}
      </React.Fragment>
    )
  }

  render() {
    const {values} = this.props;

    return  (
      <table className="table-component">
        <thead>
          <tr>
            <td>Шифр</td>
            <td>Наименование вида работ и затрат</td>
            <td>Единица измерения</td>
            <td>Цена УЕР за единицу измерения в базовом уровне цен (без прочих затат)</td>
          </tr>
        </thead>
        <tbody>
        {
          values.map(this.renderSection)
        }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({referencesAndRates}) => {
  return {
    ...referencesAndRates
  }
}

const mapDispatchToProps = (dispatch, {gpApiService}) => {
  return {
    fetchReferencesAndRates: fetchReferencesAndRates(gpApiService, dispatch)
  }
}

export default compose(
  withGpApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingStatus(),
  withErrorStatus()
)(ReferencesAndRatesTreeTable);