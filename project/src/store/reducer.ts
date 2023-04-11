import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  completeOffers,
  setOffersCompletingStatus,
  setError,
  requireAuthorization,
  updateUser
} from './action';
import { CITIES_NAME, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';

type InitialState = {
  cityName: string;
  offers: Offers;
  isOffersCompleting: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: InitialState = {
  cityName: CITIES_NAME[0],
  offers: [],
  isOffersCompleting: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknow,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(completeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersCompletingStatus, (state, action) => {
      state.isOffersCompleting = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(updateUser, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
