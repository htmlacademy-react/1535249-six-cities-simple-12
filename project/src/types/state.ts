import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Offer, Offers } from './offer';
import { Reviews } from './review';

export type OfferProcess = {
  cityName: string;
  offers: Offers;
  activeOffer: Offer | null;
  reviews: Reviews;
  nearbyActiveOffers: Offers;
  isOffersCompleting: boolean;
  isActiveOfferCompleting: boolean;
  addReviewIsSuccess: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
