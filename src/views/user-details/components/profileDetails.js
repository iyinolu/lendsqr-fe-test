import React from 'react'
import PropTypes from 'prop-types'
import objectPath from 'object-path'

export const ProfileDetails = ({ title, data, dataStructure }) => {
  const renderContent = (item) => {
    if (item.path) {
      let value = objectPath.get(data, item.path)
      return value
    } else if (item.renderer) {
      return item.renderer(data)
    } else if (item.default) {
      return item.default
    }
  }

  return (
    <div className="detail-section">
      <div id="title">{title}</div>
      <div id="content">
        {dataStructure.map((item, idx) => (
          <div key={idx} className="detail-item">
            <h4 id="item-title">{item.title}</h4>
            <p id="item-content">{renderContent(item)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

ProfileDetails.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  dataStructure: PropTypes.arrayOf(PropTypes.object),
}

export default ProfileDetails
