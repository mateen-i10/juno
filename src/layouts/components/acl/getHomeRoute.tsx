/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else if (role == 'admin') return '/admin/home'
  else return '/home'

}

export default getHomeRoute
