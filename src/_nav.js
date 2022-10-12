import React from 'react'
import CIcon from '@coreui/icons-react'
// CNavGroup
import { CNavItem, CNavTitle } from '@coreui/react'
import { briefCase } from './assets/icons/briefcase'
import { home } from './assets/icons/home'
import { sack } from './assets/icons/sack'
import { userFriends } from './assets/icons/user-friends'
import { users } from './assets/icons/users'
import { bankHeart } from './assets/icons/bankheart'
import { handHoldingSack } from './assets/icons/hand-holding-sack'
import { clipBoardList } from './assets/icons/clipboard-list'
import { sliders } from './assets/icons/sliders'
import { badgePercent } from './assets/icons/badge-percent'

const _nav = [
  {
    component: CNavItem,
    name: 'Switch Organization',
    to: '#',
    icon: <CIcon icon={briefCase} customClassName="nav-icon" />,
    highlighted: {
      caret: true,
    },
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '#',
    icon: <CIcon icon={home} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'CUSTOMERS',
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={users} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Guarrantor',
    to: '#',
    icon: <CIcon icon={userFriends} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Loan',
    to: '#',
    icon: <CIcon icon={sack} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'BUSINESSES',
  },
  {
    component: CNavItem,
    name: 'Organization',
    to: '#',
    icon: <CIcon icon={briefCase} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Loan Products',
    to: '#',
    icon: <CIcon icon={handHoldingSack} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Savings Products',
    to: '#',
    icon: <CIcon icon={bankHeart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'SETTINGS',
  },
  {
    component: CNavItem,
    name: 'Preferences',
    to: '#',
    icon: <CIcon icon={sliders} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fees and Pricing',
    to: '#',
    icon: <CIcon icon={badgePercent} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Audit Log',
    to: '#',
    icon: <CIcon icon={clipBoardList} customClassName="nav-icon" />,
  },
]

export default _nav
