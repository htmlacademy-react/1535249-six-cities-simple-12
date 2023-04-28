import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, CITIES_NAME, RequestStatus } from '../../const';
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
  addReviewStatus: RequestStatus.Unknow,
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
      .addCase(fetchNearbyActiveOfferAction.pending, (state) => {
        state.isOffersCompleting = false;
      })
      .addCase(fetchNearbyActiveOfferAction.fulfilled, (state, action) => {
        state.nearbyActiveOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchAddNewComment.pending, (state) => {
        state.addReviewStatus = RequestStatus.Pending;
      })
      .addCase(fetchAddNewComment.fulfilled, (state, action) => {
        state.addReviewStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchAddNewComment.rejected, (state) => {
        state.addReviewStatus = RequestStatus.Failure;
      });
  }
});

export const { changeCity } = offerProcess.actions;
