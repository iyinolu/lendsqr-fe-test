import React, { useState, useEffect } from 'react'
import InfoCard from 'src/components/infographics/infoCard'
import { BaseTable } from 'src/components/table/BaseTable'
import { usersInfo } from './utils/_usersInfo'
import { _structure } from './utils/_tablestructure'
import { useAllUserData } from '../../hooks/useAllUserData'
import { usePaginateDate } from 'src/hooks/usePaginateData'

const ContentLayout = React.lazy(() => import('../../components/ContentLayout'))

export const Users = () => {
  const [page, setPage] = useState(1)
  const [usersData] = useAllUserData()
  const [dataObject, getPageData] = usePaginateDate(usersData, 10)
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(getPageData(page))
  }, [dataObject, page, getPageData])

  return (
    <ContentLayout title="Users" headerActionComponent={() => <></>}>
      <div>
        <section id="users-dashboard" className="users-dashboard">
          {usersInfo.map((info, idx) => (
            <InfoCard key={idx} icon={info.icon} subtitle={info.subtitle} title={info.title} />
          ))}
        </section>
        <section id="users-table" className="mt-3 users-table">
          <BaseTable
            data={tableData}
            structure={_structure}
            onRenderActionPopover={() => {}}
            page={page}
            setPage={setPage}
          />
        </section>
      </div>
    </ContentLayout>
  )
}

export default Users
