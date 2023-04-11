import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  COMPLETE_OFFERS: 'COMPLETE_OFFERS',
  SET_OFFERS_COMPLETING_STATUS: 'SET_OFFERS_COMPLETE_STATUS',
  SET_ERROR: 'SET_ERROR',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  UPDATE_USER: 'UPDATE_USER',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const completeOffers = createAction<Offers>(Action.COMPLETE_OFFERS);

export const setOffersCompletingStatus = createAction<boolean>(Action.SET_OFFERS_COMPLETING_STATUS);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const updateUser = createAction<UserData | null>(Action.UPDATE_USER);
