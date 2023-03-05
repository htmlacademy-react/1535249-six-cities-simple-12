import classNames from 'classnames';

type PlaceCardProps = {
  location: PlaceCardLocation;
}

export enum PlaceCardLocation {
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

function PlaceCard({location}: PlaceCardProps): JSX.Element {
  const placeCardClass = classNames('place-card', {
    'cities__card': location === PlaceCardLocation.cities,
    'near-places__card': location === PlaceCardLocation.nearPlaces,
  });

  return (
    <article className={placeCardClass}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" alt="" width="260" height="200" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
