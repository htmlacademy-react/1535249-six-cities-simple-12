export enum AppRoute {
  Login = '/login',
  NotFound = '*',
  Main = '/',
  Property = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW',
}

export enum PlaceCardLocation {
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

export const MIN_RATING = 0;
export const MAX_RATING = 5;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const ZERO_ID = 0;
