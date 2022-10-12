import React from 'react'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { arrowDown } from 'src/assets/icons/arrows'

export const PageSizeSelect = ({ pageSize, onChangePageSize }) => {
  return (
    <div className="page-size-container">
      <span id="showing">Showing</span>
      <div className="page-size-select" role="button">
        <span className="me-3">{pageSize}</span>
        <CIcon icon={arrowDown} />
      </div>
      <span id="out-of">out of 100</span>
    </div>
  )
}

PageSizeSelect.propTypes = {
  pageSize: PropTypes.string,
  onChangePageSize: PropTypes.func,
}

export default PageSizeSelect
