import PlaceCard from '../place-card/place-card';
import { PlaceCardLocation } from '../place-card/place-card';

function CitiesPlacesList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard location={PlaceCardLocation.cities}/>
      <PlaceCard location={PlaceCardLocation.cities}/>
      <PlaceCard location={PlaceCardLocation.cities}/>
      <PlaceCard location={PlaceCardLocation.cities}/>
      <PlaceCard location={PlaceCardLocation.cities}/>
    </div>
  );
}

export default CitiesPlacesList;
