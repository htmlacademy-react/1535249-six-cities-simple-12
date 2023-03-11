export enum AppRoute {
  Login = '/login',
  NotFound = '*',
  Main = '/',
  Property = '/offer:id',
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
