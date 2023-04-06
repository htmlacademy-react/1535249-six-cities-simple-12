import { createReducer } from '@reduxjs/toolkit';
import { changeCity, completeOffers, setOffersCompletingStatus, setError } from './action';
import { CITIES_NAME } from '../const';
import { Offers } from '../types/offer';

type InitialState = {
  cityName: string;
  offers: Offers;
  isOffersCompleting: boolean;
  error: string | null;
}

const initialState: InitialState = {
  cityName: CITIES_NAME[0],
  offers: [],
  isOffersCompleting: false,
  error: null,
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
    });
});

export {reducer};
