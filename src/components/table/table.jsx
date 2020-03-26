import React from 'react'
import "./table.scss";

const Table = ({values, columns}) => {
  return (
    <table className="table-component">
      <thead>
        <tr>
        {
          columns.map((col, idx) => {
          return <td key={idx}>{col.label}</td>
          })
        }
        </tr>
      </thead>
      <tbody>
        {
          values.map(value => {
            return (
              <tr key={value.id}>
              {
                columns.map((col, idx) => {
                return <td key={idx}>{value[col.property]}</td>
                })
              }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;