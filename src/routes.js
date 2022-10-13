import React from 'react'

const Users = React.lazy(() => import('./views/users'))
const UserDetails = React.lazy(() => import('./views/user-details'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', name: 'Users', element: Users },
  { path: '/users/:id', name: 'UsersDetails', element: UserDetails },
]

export default routes
