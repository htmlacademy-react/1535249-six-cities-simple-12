import { Offer, Offers } from '../../types/offer';

export const PlacesSortingTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first',];

export const sortingByPopular = () => 0;

export const sortingByPriceLowToHigh = (placeA: Offer, placeB: Offer) => placeA.price - placeB.price;

export const sortingByPriceHighToLow = (placeA: Offer, placeB: Offer) => placeB.price - placeA.price;

export const sortingByRating = (placeA: Offer, placeB: Offer) => placeB.rating - placeA.rating;

export const sortingType: { [key:string]: (placeA: Offer, placeB: Offer) => number } = {
  'Popular': sortingByPopular,
  'Price: low to high': sortingByPriceLowToHigh,
  'Price: high to low': sortingByPriceHighToLow,
  'Top rated first': sortingByRating,
};

export const sortingByType = (offers: Offers, type: string) => [...offers].sort(sortingType[type]);
