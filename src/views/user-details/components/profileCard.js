import React from 'react'
import { CCard, CAvatar } from '@coreui/react'
import defaultProfileImg from '../../../assets/images/avatars/default-avatar.png'
import { starChecked, starUnchecked } from 'src/assets/icons/star'
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'

const MobileNav = React.lazy(() => import('./mobileNav'))

export const ProfileCard = ({
  fullName,
  accountBalance,
  accountNumber,
  navSchema,
  currentNav,
  onchangeNav,
  avatar,
}) => {
  return (
    <CCard>
      <div className="profilecard-container">
        <div id="details">
          <div className="profile-avatar">
            <CAvatar src={avatar ?? defaultProfileImg} size="xl" />
          </div>
          <div aria-label="quick user bio" className="user-quick-bio detail-col ms-3">
            <h2>{fullName}</h2>
            <p>{accountNumber}</p>
          </div>
          <div className="vertical-divide" />
          <div aria-label="user tier" className="detail-col user-tier">
            <div className="mx-auto">
              <p>User&apos;s Tier</p>
              <div>
                <CIcon icon={starChecked} />
                <CIcon icon={starUnchecked} />
                <CIcon icon={starUnchecked} />
              </div>
            </div>
          </div>
          <div className="vertical-divide" />
          <div aria-label="bank info" className="bank-info detail-col">
            <h2>{accountBalance}</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div id="navigation" className="mt-4">
          <MobileNav />
          <ul role="navigation" aria-label="user details navigation" className="user-details-nav">
            {navSchema.map((item, idx) => (
              <li aria-label={item.label ?? 'Navigation link'} key={idx}>
                <button
                  className={`${item.key === currentNav ? 'active-nav' : ''}`}
                  onClick={() => onchangeNav(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CCard>
  )
}

ProfileCard.propTypes = {
  fullName: PropTypes.string,
  accountNumber: PropTypes.string,
  accountBalance: PropTypes.string,
  navSchema: PropTypes.array,
  currentNav: PropTypes.number,
  onchangeNav: PropTypes.func,
  avatar: PropTypes.string,
}

export default ProfileCard
