import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  COMPLETE_OFFERS: 'COMPLETE_OFFERS',
  COMPLETE_ACTIVE_OFFER: 'COMPLETE_ACTIVE_OFFER',
  COMPLETE_REVIEWS: 'COMPLETE_REVIEWS',
  COMPLETE_NEW_COMMENT: 'COMPLETE_NEW_COMMENT',
  COMPLETE_ACTIVE_OFFER_NEARBY: 'COMPLETE_ACTIVE_OFFER_NEARBY',
  SET_OFFERS_COMPLETING_STATUS: 'SET_OFFERS_COMPLETE_STATUS',
  SET_ACTIVE_OFFER_COMPLETING_STATUS: 'SET_ACTIVE_OFFER_COMPLETING_STATUS',
  SET_ERROR: 'SET_ERROR',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  UPDATE_USER: 'UPDATE_USER',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const completeOffers = createAction<Offers>(Action.COMPLETE_OFFERS);

export const completeActiveOffer = createAction<Offer>(Action.COMPLETE_ACTIVE_OFFER);

export const completeReviews = createAction<Reviews>(Action.COMPLETE_REVIEWS);

export const completeNewComment = createAction<ReviewData>(Action.COMPLETE_NEW_COMMENT);

export const completeActiveOfferNearby = createAction<Offers>(Action.COMPLETE_ACTIVE_OFFER_NEARBY);

export const setOffersCompletingStatus = createAction<boolean>(Action.SET_OFFERS_COMPLETING_STATUS);

export const setActiveOfferCompletingStatus = createAction<boolean>(Action.SET_ACTIVE_OFFER_COMPLETING_STATUS);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const updateUser = createAction<UserData | null>(Action.UPDATE_USER);
