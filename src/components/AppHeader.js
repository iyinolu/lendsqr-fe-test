import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CAvatar,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { AppHeaderDropdown } from './header/index'
import { magnifyingGlass } from 'src/assets/icons/magnifying-glass'
import { lendsqrlogo } from 'src/assets/brand/lendsqr-logo'
import profileImg from '../assets/images/avatars/profile-image.png'
import { bellIcon } from 'src/assets/icons/bell-icon'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mw-auto d-md-none" to="/">
          <CIcon icon={lendsqrlogo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CInputGroup className="me-auto w-auto d-none d-md-flex header-search">
          <CFormInput aria-label="Search for anything" placeholder="Search for anything" />
          <CInputGroupText id="basic-addon1">
            <CIcon icon={magnifyingGlass} />
          </CInputGroupText>
        </CInputGroup>
        <CIcon className="d-none d-md-block me-4" icon={bellIcon} />
        <CAvatar src={profileImg} size="lg" />
        <CHeaderNav className="ms-2">
          <AppHeaderDropdown />
        </CHeaderNav>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
