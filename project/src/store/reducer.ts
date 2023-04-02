import { createReducer } from '@reduxjs/toolkit';
import { changeCity, completeOffers } from './action';
import { CITIES_NAME } from '../const';
import { Offers } from '../types/offer';
import { offers } from '../mocks/offers';

const initialState = {
  cityName: CITIES_NAME[0],
  offers: offers as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(completeOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
