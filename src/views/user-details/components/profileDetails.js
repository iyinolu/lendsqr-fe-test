import React from 'react'
import PropTypes from 'prop-types'

export const ProfileDetails = ({ title, data }) => {
  return (
    <div className="detail-section">
      <div id="title">{title}</div>
      <div id="content">
        {data.map((item, idx) => (
          <div key={idx} className="detail-item">
            <h4 id="item-title">{item.title}</h4>
            <p id="item-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

ProfileDetails.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
}

export default ProfileDetails
