import React from 'react'
import { CDropdown, CDropdownToggle } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { profileCaret } from 'src/assets/icons/profile-caret'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle
        placement="bottom-end"
        className="py-0 d-flex align-items-center"
        caret={false}
      >
        <p className="m-0">Ayodeji</p>
        <CIcon icon={profileCaret} className="w-auto ms-2" />
      </CDropdownToggle>
    </CDropdown>
  )
}

export default AppHeaderDropdown
