import { NameSpace } from '../../const';
import { City, Offers, Offer } from '../../types/offer';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';

export const getCityName = (state: State): City['name'] => state[NameSpace.Data].cityName;
export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataCompletingStatus = (state: State): boolean => state[NameSpace.Data].isOffersCompleting;

export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Data].activeOffer;
export const getActiveOfferCompletingStatus = (state: State): boolean => state[NameSpace.Data].isActiveOfferCompleting;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getNearbyActiveOffers = (state: State): Offers => state[NameSpace.Data].nearbyActiveOffers;
export const createReviewIsSuccess = (state: State): boolean => state[NameSpace.Data].addReviewIsSuccess;
