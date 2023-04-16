import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  completeOffers,
  completeActiveOffer,
  completeActiveOfferNearby,
  completeReviews,
  completeNewComment,
  setError,
  requireAuthorization,
  updateUser,
  setOffersCompletingStatus,
  setActiveOfferCompletingStatus,
} from './action';
import { CITIES_NAME, AuthorizationStatus } from '../const';
import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { ReviewData } from '../types/review-data';
import { UserData } from '../types/user-data';

type InitialState = {
  cityName: string;
  offers: Offers;
  activeOffer: Offer | null;
  reviews: Reviews;
  newComment: ReviewData | null;
  nearbyActiveOffers: Offers;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  isOffersCompleting: boolean;
  isActiveOfferCompleting: boolean;
  isCommentSent: boolean;
}

const initialState: InitialState = {
  cityName: CITIES_NAME[0],
  offers: [],
  activeOffer: null,
  reviews: [],
  newComment: null,
  nearbyActiveOffers: [],
  error: null,
  authorizationStatus: AuthorizationStatus.Unknow,
  userData: null,
  isOffersCompleting: false,
  isActiveOfferCompleting: false,
  isCommentSent: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(completeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(completeActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(completeActiveOfferNearby, (state, action) => {
      state.nearbyActiveOffers = action.payload;
    })
    .addCase(completeReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(completeNewComment, (state, action) => {
      state.newComment = action.payload;
    })
    .addCase(setOffersCompletingStatus, (state, action) => {
      state.isOffersCompleting = action.payload;
    })
    .addCase(setActiveOfferCompletingStatus, (state, action) => {
      state.isActiveOfferCompleting = action.payload;
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
