import { RegisterPageType, LoginPageType } from '../pages/Auth';
import { AuthTemplateType } from '../templates/AuthTemplate';

export enum routes {
  home = '/',
  login = '/login',
  register = '/register',
}

export type AuthComponentsTypes = LoginPageType | RegisterPageType;

export type RouteComponentsTypes = AuthComponentsTypes;
export type RouteLayoutsTypes = AuthTemplateType;
