import React from 'react'
import { CButton } from '@coreui/react'
import { CCard } from '@coreui/react'
import { _personal_data, _education_data, _guarantor_data, _social_data } from './temp/_data'
import { useDataById } from '../../hooks/useDataById'
import { useParams } from 'react-router-dom'

const ContentLayout = React.lazy(() => import('../../components/ContentLayout'))
const ProfileCard = React.lazy(() => import('./components/profileCard'))
const ProfileDetails = React.lazy(() => import('./components/profileDetails'))

export const UserDetails = () => {
  const { id } = useParams()
  const [userData] = useDataById(id)

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
    <ContentLayout title="Users Details" headerActionComponent={onRenderActionComponent}>
      <section id="profile-card" className="profile-card">
        <ProfileCard />
      </section>
      <section id="full-details" className="full-details">
        <CCard>
          <ProfileDetails
            title="Personal Information"
            data={userData}
            dataStructure={_personal_data}
          />
          <ProfileDetails
            title="Education Employment"
            data={userData}
            dataStructure={_education_data}
          />
          <ProfileDetails title="Socials" data={userData} dataStructure={_guarantor_data} />
          <ProfileDetails title="Guarantor" data={userData} dataStructure={_social_data} />
        </CCard>
      </section>
    </ContentLayout>
  )
}

export default UserDetails
