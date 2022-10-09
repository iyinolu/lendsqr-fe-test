import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 main-content">
        <AppHeader />
        <div className="body flex-grow-1 py-4 px-5">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
