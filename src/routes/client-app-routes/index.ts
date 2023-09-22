import { overviewPageRoute} from "./landing-page-routes/overview";
import {ourApproachPageRoute} from "./landing-page-routes/our-aproach";
import {errorsModuleRoutes} from "./admin/errors";
import {innovateLabsModuleRoutes} from "./innovate-labs";
import {rolesListModuleRoutes} from "./roles-list";
import {signUpRequestsModuleRoutes} from "./admin/signup-request";
import {paidUsersPageRoute} from "./paid-user/dashboard";
import {rtsUserPageRoute} from "./rts";
import {adminHomeModuleRoutes} from "./admin/home";
import {catalogModuleRoutes} from "./admin/catalog";
import {industryModuleRoutes} from "./admin/industry-list";
import {modelModuleRoutes} from "./admin/model";
import {orgModuleRoutes} from "./admin/org-list";
import {usersModuleRoutes} from "./admin/users";
import {dataSourceModuleRoutes} from "./admin/data-source";


export const appRoutes = {
  customerManagement: undefined, customerDetail: undefined,

  ...overviewPageRoute,
  ...ourApproachPageRoute,
  ...errorsModuleRoutes,
  ...innovateLabsModuleRoutes,
  ...rolesListModuleRoutes,
  ...signUpRequestsModuleRoutes,
  ...paidUsersPageRoute,
  ...rtsUserPageRoute,
  ...adminHomeModuleRoutes,
  ...catalogModuleRoutes,
  ...industryModuleRoutes,
  ...modelModuleRoutes,
  ...orgModuleRoutes,
  ...adminHomeModuleRoutes,
  ...usersModuleRoutes,
  ...dataSourceModuleRoutes
}
