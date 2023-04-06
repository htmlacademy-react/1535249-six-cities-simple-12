import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  COMPLETE_OFFERS: 'COMPLETE_OFFERS',
  SET_OFFERS_COMPLETING_STATUS: 'SET_OFFERS_COMPLETE_STATUS',
  SET_ERROR: 'SET_ERROR',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const completeOffers = createAction<Offers>(Action.COMPLETE_OFFERS);

export const setOffersCompletingStatus = createAction<boolean>(Action.SET_OFFERS_COMPLETING_STATUS);

export const setError = createAction<string | null>(Action.SET_ERROR);
