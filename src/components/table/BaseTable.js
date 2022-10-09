import React from 'react'
import { CCard } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { filterIcon } from 'src/assets/icons/filter'
import PropTypes from 'prop-types'
import objectPath from 'object-path'

export const BaseTable = ({ structure, data, onRenderActionPopover }) => {
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
            return (
              <tr key={idx}>
                {structure.map((col, idx) => {
                  return <td key={idx}>{row[col.path]}</td>
                })}
              </tr>
            )
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
