export const AUTH_TOKEN_KEY_NAME = 'six-cities-simple-12';
export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Offers = '/hotels',
  Comments = 'comments',
  Login = '/login',
  Logout = '/logout',
}

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

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum PlaceCardLocation {
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

export enum MapLocation {
  cities = 'cities',
  property = 'property',
}

export enum LocationItemLinkPosition {
  cities = 'cities',
  login = 'login',
}

export const GALLERY_IMG_COUNT = 6;
export const MIN_RATING = 0;
export const MAX_RATING = 5;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const ZERO_ID = 0;

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CITIES_NAME = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf',];
