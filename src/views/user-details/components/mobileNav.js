import React from 'react'
import { CDropdownItem } from '@coreui/react'
import { _userdetailsNav } from '../utils/_userdetailsNav'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

const CustomDropdown = React.lazy(() => import('../../../components/dropdown/CustomDropdown'))

export const MobileNav = () => {
  const onRenderMenu = () => {
    return (
      <>
        {_userdetailsNav.map((item, idx) => {
          return <CDropdownItem key={idx}>{item.label}</CDropdownItem>
        })}
      </>
    )
  }

  return (
    <div className="mobile-nav">
      <CustomDropdown
        onRenderToggle={() => <CIcon icon={cilMenu} size="lg" />}
        onRenderMenu={onRenderMenu}
      />
    </div>
  )
}

export default React.memo(MobileNav)
