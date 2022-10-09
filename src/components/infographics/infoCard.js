import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardTitle } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'

export const InfoCard = ({ icon, title, subtitle }) => {
  return (
    <div className="info-card">
      <CCard>
        <CCardBody>
          <div className="info-card-header">
            <span className="users-icon">
              <CIcon icon={icon} />
            </span>
          </div>
          <CCardSubtitle className="mb-2 text-medium-emphasis">{title}</CCardSubtitle>
          <CCardTitle>{subtitle}</CCardTitle>
        </CCardBody>
      </CCard>
    </div>
  )
}

InfoCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default InfoCard
