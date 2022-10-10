import React from 'react'
import { CDropdown, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import PropTypes from 'prop-types'

export const CustomDropdown = ({ onRenderToggle, onRenderMenu }) => {
  return (
    <ul className="dropdown-container">
      <CDropdown variant="nav-item">
        <CDropdownToggle
          placement="bottom-end"
          className="py-0 d-flex align-items-center"
          caret={false}
        >
          {onRenderToggle()}
        </CDropdownToggle>
        <CDropdownMenu placement="bottom-end">{onRenderMenu()}</CDropdownMenu>
      </CDropdown>
    </ul>
  )
}

CustomDropdown.propTypes = {
  onRenderToggle: PropTypes.func.isRequired,
  onRenderMenu: PropTypes.func,
}

export default CustomDropdown
