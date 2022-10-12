import React from 'react'
import { verticalEllispsis } from 'src/assets/icons/verticalEllipsis'
import { CDropdownItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { eye } from 'src/assets/icons/eye'
import { blacklistUser } from 'src/assets/icons/blacklist-user'
import { activateUser } from 'src/assets/icons/activateUser'

const CustomDropdown = React.lazy(() => import('src/components/dropdown/CustomDropdown'))

const _actionStructure = (data) => [
  { icon: <CIcon icon={eye} className="me-3" />, text: 'View Details', link: `#/users/${data.id}` },
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
        {_actionStructure(data).map((item, idx) => {
          return (
            <CDropdownItem key={idx} href={item.link}>
              {item.icon}
              {item.text}
            </CDropdownItem>
          )
        })}
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
    path: 'orgName',
    type: 'text',
    screen: 'all',
  },
  {
    columnName: 'USERNAME',
    hasFilter: true,
    path: 'userName',
    type: 'text',
    screen: 'all',
  },
  {
    columnName: 'EMAIL',
    hasFilter: true,
    path: 'email',
    type: 'text',
    screen: 'md-sm',
  },
  {
    columnName: 'PHONE NUMBER',
    hasFilter: true,
    path: 'phoneNumber',
    type: 'text',
    screen: 'md-sm',
  },
  {
    columnName: 'DATE JOINED',
    hasFilter: true,
    renderer: (data) => data?.lastActiveDate?.split('T')[0],
    type: 'text',
    screen: 'md',
  },
  {
    columnName: 'STATUS',
    hasFilter: true,
    type: 'badge',
    renderer: (data) => <span className="active-badge">Active</span>,
    screen: 'md',
  },
  {
    columnName: '',
    hasFilter: false,
    type: 'action',
    renderAction: (data) => renderAction(data),
    screen: '',
  },
]
