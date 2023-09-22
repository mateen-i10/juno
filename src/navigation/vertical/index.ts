// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

import {appRoutes} from "src/routes/client-app-routes";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: `${appRoutes.home}`,
      icon: 'tabler:smart-home',
    },
    {
      title: 'Errors',
      path: `${appRoutes.errors}`,
      icon: 'ic:baseline-error-outline',
    },
    {
      title: 'SignUp Requests',
      path: `${appRoutes.signUpRequests}`,
      icon: 'ic:baseline-fact-check',
    },
    {
      title: 'Users',
      path: `${appRoutes.users}`,
      icon: 'tabler:users',
    },
    {
      title: 'Data Source',
      path: `${appRoutes.dataSource}`,
      icon: 'bx:data',
    },
    {
      title: 'Innovate Labs',
      path: `${appRoutes.innovateLabsList}`,
      icon: 'grommet-icons:technology',
    },
    {
      title: 'Roles',
      path: `${appRoutes.rolesList}`,
      icon: 'carbon:user-role',
    },
    {
      title: 'Catalog',
      path: `${appRoutes.catalogList}`,
      icon: 'carbon:catalog',
    },
    {
      title: 'Industry',
      path: `${appRoutes.industryList}`,
      icon: 'cil:industry',
    },
    {
      title: 'Model',
      path: `${appRoutes.modelList}`,
      icon: 'carbon:machine-learning-model',
    },
    {
      title: 'Organization',
      path: `${appRoutes.orgList}`,
      icon: 'clarity:organization-line',
    },
    {
      title: 'Paid User',
      children: [
        {
          title: 'Dashboard',
          path: `${appRoutes.paidUserDashboard}`
        }
      ]
    },
    {
      title: 'RTS User',
      children: [
        {
          title: 'Dashboard',
          path: `${appRoutes.userDashboard}`
        },
        {
          title: 'Lead Generator',
          path: `${appRoutes.leadGenerator}`
        },
      ]
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield',
    },

  ]
}

export default navigation
