import React from 'react'
import PropTypes from 'prop-types'

export const ContentLayout = ({ title, headerActionComponent, children }) => {
  return (
    <div>
      <div className="content-header">
        <span className="content-title">{title}</span>
        {headerActionComponent()}
      </div>
      <div>{children}</div>
    </div>
  )
}

ContentLayout.propTypes = {
  title: PropTypes.string.isRequired,
  headerActionComponent: PropTypes.func,
  children: PropTypes.node,
}

export default React.memo(ContentLayout)
