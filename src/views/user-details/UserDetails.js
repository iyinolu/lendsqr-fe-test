import React from 'react'
import { CButton } from '@coreui/react'

const ContentLayout = React.lazy(() => import('../../components/ContentLayout'))

export const UserDetails = () => {
  const onRenderActionComponent = () => (
    <div className="action-btn-group">
      <CButton className="blacklist-btn" variant="outline">
        Blacklist User
      </CButton>
      <CButton className="activate-btn" variant="outline">
        Activate User
      </CButton>
    </div>
  )

  return (
    <ContentLayout
      title="Users Details"
      headerActionComponent={onRenderActionComponent}
    ></ContentLayout>
  )
}

export default UserDetails
