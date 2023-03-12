import classNames from 'classnames';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { PlaceCardLocation, MaxRating } from '../../types/const';
import { Offer } from '../../types/offer';

type PlaceCardProps = {
  location: PlaceCardLocation;
  offer: Offer;
  onMouseEnter?: (id: number | undefined) => void;
}

function PlaceCard({location, offer, onMouseEnter}: PlaceCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, id, title, type,} = offer;
  const placeCardClass = classNames('place-card', {
    'cities__card': location === PlaceCardLocation.cities,
    'near-places__card': location === PlaceCardLocation.nearPlaces,
  });
  const onMouseEnterHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  return (
    <article className={placeCardClass} onMouseEnter={onMouseEnterHandler}>
      <div className="place-card__mark">
        {isPremium ? <span>Premium</span> : ''}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} alt="" width="260" height="200" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 100 / MaxRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
