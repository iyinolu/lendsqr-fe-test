import React from 'react'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { users, activeUsers, usersWithLoan, usersWithSavings } from 'src/assets/icons/infographics'
import { filterIcon } from 'src/assets/icons/filter'
import InfoCard from 'src/components/infographics/infoCard'
import { BaseTable } from 'src/components/table/BaseTable'
import { usersInfo } from './_usersInfo'
import { usersData } from './temp/usersdata'
import { _structure } from './_tablestructure'

const ContentLayout = React.lazy(() => import('../../components/ContentLayout'))

export const Users = () => {
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
          {/* <CCard>
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>ORGANIZATION</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>USERNAME</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>EMAIL</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>PHONE NUMBER</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>DATE JOINED</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="users-table-header">
                      <span>STATUS</span>
                      <span role="button" className="filter-btn">
                        <CIcon icon={filterIcon} />
                      </span>
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lendsqr</td>
                  <td>Ayodeji</td>
                  <td>ayodeji@lendsqr.com</td>
                  <td>09032939399</td>
                  <td>May 15, 2020 10:00 AM</td>
                  <td>
                    <span className="users-status">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Lendsqr</td>
                  <td>Ayodeji</td>
                  <td>ayodeji@lendsqr.com</td>
                  <td>09032939399</td>
                  <td>May 15, 2020 10:00 AM</td>
                  <td>
                    <span className="users-status">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Lendsqr</td>
                  <td>Ayodeji</td>
                  <td>ayodeji@lendsqr.com</td>
                  <td>09032939399</td>
                  <td>May 15, 2020 10:00 AM</td>
                  <td>
                    <span className="users-status">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Lendsqr</td>
                  <td>Ayodeji</td>
                  <td>ayodeji@lendsqr.com</td>
                  <td>09032939399</td>
                  <td>May 15, 2020 10:00 AM</td>
                  <td>
                    <span className="users-status">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Lendsqr</td>
                  <td>Ayodeji</td>
                  <td>ayodeji@lendsqr.com</td>
                  <td>09032939399</td>
                  <td>May 15, 2020 10:00 AM</td>
                  <td>
                    <span className="users-status">Inactive</span>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </CCard> */}
        </section>
      </div>
    </ContentLayout>
  )
}

export default Users
