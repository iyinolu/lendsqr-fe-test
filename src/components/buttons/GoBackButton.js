import React from 'react'
import CIcon from '@coreui/icons-react'
import { backArrow } from 'src/assets/icons/arrows'
import PropTypes from 'prop-types'

export const GoBackButton = ({ title, onClick }) => {
  return (
    <div onClick={onClick} role="button" className="go-back-btn">
      <CIcon icon={backArrow} />
      {title}
    </div>
  )
}

GoBackButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

GoBackButton.defaultProps = {
  title: 'Go Back',
}

export default React.memo(GoBackButton)
