import React from 'react'
import InfoCard from 'src/components/infographics/infoCard'
import { BaseTable } from 'src/components/table/BaseTable'
import { usersInfo } from './_usersInfo'
import { usersData } from './temp/usersdata'
import { _structure } from './_tablestructure'
import { useAllUserData } from '../../hooks/useAllUserData'

const ContentLayout = React.lazy(() => import('../../components/ContentLayout'))

export const Users = () => {
  const [usersData] = useAllUserData()
  return (
    <ContentLayout title="Users" headerActionComponent={() => <></>}>
      <div>
        <section id="users-dashboard" className="users-dashoard">
          {usersInfo.map((info, idx) => (
            <InfoCard key={idx} icon={info.icon} subtitle={info.subtitle} title={info.title} />
          ))}
        </section>
        <section id="users-table" className="users-table" style={{ marginTop: '20px' }}>
          <BaseTable data={usersData} structure={_structure} onRenderActionPopover={() => {}} />
        </section>
      </div>
    </ContentLayout>
  )
}

export default Users
