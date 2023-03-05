import PlaceCard from '../place-card/place-card';
import { PlaceCardLocation } from '../place-card/place-card';

function NearPlacesList(): JSX.Element {
  return (
    <div className="near-places__list places__list">
      <PlaceCard location={PlaceCardLocation.nearPlaces}/>
      <PlaceCard location={PlaceCardLocation.nearPlaces}/>
      <PlaceCard location={PlaceCardLocation.nearPlaces}/>
    </div>
  );
}

export default NearPlacesList;
