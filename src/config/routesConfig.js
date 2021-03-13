import React from 'react'

const List = React.lazy(() => import('./../containers/list'))

const routes = [
  
  {
    path: "/list",
    component: List,
    authEntry: false,
    roleEntry: ['public'],
    exact : false
  }
];





export { routes } ;