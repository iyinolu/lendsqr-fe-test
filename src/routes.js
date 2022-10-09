import React from 'react'

const Users = React.lazy(() => import('./views/users/Users'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', name: 'Users', element: Users },
]

export default routes
