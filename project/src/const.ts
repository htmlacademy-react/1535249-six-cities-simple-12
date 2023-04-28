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

export enum RequestStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Unknow = 'UNKNOW',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum PlaceCardPosition {
  Cities = 'cities',
  NearPlaces = 'nearPlaces',
}

export enum MapPosition {
  Cities = 'cities',
  Property = 'property',
}

export enum LocationItemLinkPosition {
  Cities = 'cities',
  Login = 'login',
}

export const GALLERY_IMG_COUNT = 6;

export const NEARBY_LIST_PLACE_CARD_COUNT = 3;

export const REVIEWS_FOR_SHOW_COUNT = 10;

export const enum Rating {
  Min = 0,
  Max = 5,
}

export const enum CommentLength {
  Min = 50,
  Max = 300,
}

export const ZERO_ID = 0;

export enum UrlMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg',
}

export const CITIES_NAME = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf',];
