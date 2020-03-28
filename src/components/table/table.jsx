import React from 'react'
import "./table.scss";

const Table = ({values, columns, onRowSelected=() => {}}) => {
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
          values.map((value, row) => {
            return (
              <tr key={value.id || row}
                onClick={() => onRowSelected(row)}
              >
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