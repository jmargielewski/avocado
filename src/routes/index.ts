// Pages Types
// import { HomePageType } from '../pages/HomePage';
import { DashboardPageType } from '../pages/Dashboard';
import { LoginPageType, RegisterPageType } from '../pages/Auth';

// Templates Types
import { AuthTemplateType } from '../templates/AuthTemplate';
import { DashboardTemplateType } from '../templates/DashboardTemplate';

export type DashboardComponentsTypes = DashboardPageType;
export type DashboardLayoutTypes = DashboardTemplateType;

type AuthComponentsTypes = LoginPageType | RegisterPageType;
export type PageComponentsTypes = AuthComponentsTypes;
export type PageLayoutsTypes = AuthTemplateType;

export enum routes {
  home = '/',
  login = '/login',
  register = '/register',
  dashboard = '/dashboard',
}
