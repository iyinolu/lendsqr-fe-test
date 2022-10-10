import React from 'react'
import { CCard } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { filterIcon } from 'src/assets/icons/filter'
import PropTypes from 'prop-types'
import objectPath from 'object-path'

export const BaseTable = ({ structure, data }) => {
  const renderCell = (row, col, idx) => {
    switch (col.type) {
      case 'text':
        let value = '-'
        if (col.path) {
          value = objectPath.get(row, col.path)
        } else if (col.renderer) {
          value = col.renderer(row)
        } else if (col.default) {
          value = col.default
        }

        return <td key={idx}>{value}</td>
      case 'action':
        return col.renderAction(row)
      case 'badge':
        return <td key={idx}>{col.renderer(row)}</td>
      default:
        return <></>
    }
  }

  return (
    <CCard>
      <table>
        <thead>
          <tr>
            {structure.map((item, idx) => {
              return (
                <th key={idx} scope="col">
                  <div className="users-table-header">
                    <span>{item.columnName}</span>
                    {item.hasFilter && (
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    )}
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            return <tr key={idx}>{structure.map((col, colIdx) => renderCell(row, col, colIdx))}</tr>
          })}
          <tr></tr>
        </tbody>
      </table>
    </CCard>
  )
}

BaseTable.propTypes = {
  structure: PropTypes.arrayOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
}
