import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  COMPLETE_OFFERS: 'COMPLETE_OFFERS',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const completeOffers = createAction<{offers: Offers}>(Action.COMPLETE_OFFERS);
