import React from 'react'
import { verticalEllispsis } from 'src/assets/icons/verticalEllipsis'
import {
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilBell, cilEnvelopeOpen, cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { eye } from 'src/assets/icons/eye'
import { blacklistUser } from 'src/assets/icons/blacklist-user'
import { activateUser } from 'src/assets/icons/activateUser'

const CustomDropdown = React.lazy(() => import('src/components/dropdown/CustomDropdown'))

const _actionStructure = [
  { icon: <CIcon icon={eye} className="me-3" />, text: 'View Details' },
  {
    icon: <CIcon icon={blacklistUser} className="me-3" />,
    text: 'Blacklist User',
  },
  {
    icon: <CIcon icon={activateUser} className="me-3" />,
    text: 'Activate User',
  },
]

function renderAction(data) {
  const onRenderToggle = () => {
    return (
      <>
        <CIcon icon={verticalEllispsis} className="w-auto" />
      </>
    )
  }

  const onRenderMenu = () => {
    return (
      <>
        {_actionStructure.map((item, idx) => {
          return (
            <CDropdownItem key={idx} href="#">
              {item.icon}
              {item.text}
            </CDropdownItem>
          )
        })}
        {/* <CDropdownItem href="#">
          <CIcon icon={eye} className="me-2" />
          Updates
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem> */}
      </>
    )
  }
  return (
    <td>
      <CustomDropdown onRenderToggle={onRenderToggle} onRenderMenu={onRenderMenu} />
    </td>
  )
}

export const _structure = [
  {
    columnName: 'ORGANIZATION',
    hasFilter: true,
    path: 'organization',
    type: 'text',
  },
  {
    columnName: 'USERNAME',
    hasFilter: true,
    path: 'username',
    type: 'text',
  },
  {
    columnName: 'EMAIL',
    hasFilter: true,
    path: 'email',
    type: 'text',
  },
  {
    columnName: 'PHONE NUMBER',
    hasFilter: true,
    path: 'phoneNumber',
    type: 'text',
  },
  {
    columnName: 'DATE JOINED',
    hasFilter: true,
    path: 'dateJoined',
    type: 'text',
  },
  {
    columnName: 'STATUS',
    hasFilter: true,
    path: 'status',
    type: 'text',
  },
  {
    columnName: '',
    hasFilter: false,
    type: 'action',
    renderAction: (data) => renderAction(data),
  },
]
