import { Routes } from '@angular/router';
import { Role } from "../enums/role";
import { AuthStorage } from "../storages/auth.storage";

const getAdminRoutes = (): Routes => {
  return [
    {
      path: '',
      loadChildren: () => import('../../workspace-admin/workspace-admin.module').then(m => m.WorkspaceAdminModule)
    },
    {
      path: '**',
      redirectTo: '',
    }
  ];
};

const getPartnerRoutes = (): Routes => {
  return [
    {
      path: '',
      loadChildren: () => import('../../workspace-user/workspace-user.module').then(m => m.WorkspaceUserModule)
    },
    {
      path: '**',
      redirectTo: '',
    }
  ];
};

const getGuestRoutes = (): Routes => {
  return [
    {
      path: '',
      loadChildren: () => import('../../modules/login/login.module').then(m => m.LoginModule)
    },
    {
      path: '**',
      redirectTo: '',
    }
  ];
};

export const configAuthRoutesProvider = (authStorage: AuthStorage): Routes => {
  if (authStorage.getLoggedInState()) {
    const { role } = authStorage.getAuth();
    if (role === Role.Admin) {
      return getAdminRoutes();
    } else {
      return getPartnerRoutes();
    }
  } else {
    return getGuestRoutes();
  }
};
