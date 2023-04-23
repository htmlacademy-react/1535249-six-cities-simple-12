import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, CITIES_NAME } from '../../const';
import { OfferProcess } from '../../types/state';
import {
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchNearbyActiveOfferAction,
  fetchCommentsAction,
  fetchAddNewComment,
} from '../api-actions';

const initialState: OfferProcess = {
  cityName: CITIES_NAME[0],
  offers: [],
  activeOffer: null,
  reviews: [],
  nearbyActiveOffers: [],
  isOffersCompleting: false,
  isActiveOfferCompleting: false,
  addReviewIsSuccess: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      // fetchOffersAction
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersCompleting = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersCompleting = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersCompleting = true;
      })
      // fetchActiveOfferAction
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.isActiveOfferCompleting = false;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.isActiveOfferCompleting = true;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.isActiveOfferCompleting = true;
      })
      // fetchNearbyActiveOfferAction
      .addCase(fetchNearbyActiveOfferAction.pending, (state) => {
        state.isOffersCompleting = false;
      })
      .addCase(fetchNearbyActiveOfferAction.fulfilled, (state, action) => {
        state.nearbyActiveOffers = action.payload;
      })
      // reviews
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      // add new review
      .addCase(fetchAddNewComment.pending, (state) => {
        state.addReviewIsSuccess = false;
      })
      .addCase(fetchAddNewComment.fulfilled, (state) => {
        state.addReviewIsSuccess = true;
      })
      .addCase(fetchAddNewComment.rejected, (state) => {
        state.addReviewIsSuccess = false;
      });
  }
});

export const {changeCity} = offerProcess.actions;
