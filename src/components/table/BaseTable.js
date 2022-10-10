import React from 'react'
import { CCard } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { filterIcon } from 'src/assets/icons/filter'
import PropTypes from 'prop-types'

export const BaseTable = ({ structure, data, onRenderActionPopover }) => {
  const renderCell = (row, col, idx) => {
    switch (col.type) {
      case 'text':
        return <td key={idx}>{row[col.path]}</td>
      case 'action':
        return col.renderAction(row)
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
  onRenderActionPopover: PropTypes.func,
}
