import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PlaceCardPosition, Rating } from '../../const';
import { Offer } from '../../types/offer';

type PlaceCardProps = {
  location: PlaceCardPosition;
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

export const getStarRating = (rating: number): number => Math.round(rating) * 100 / Rating.Max;

function PlaceCard ({ location, offer, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const { isPremium, previewImage, price, rating, id, title, type, } = offer;

  const placeCardClass = classNames('place-card', {
    'cities__card': location === PlaceCardPosition.Cities,
    'near-places__card': location === PlaceCardPosition.NearPlaces,
  });

  const onMouseEnterHandler = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const onMouseLeaveHandler = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      className={ placeCardClass }
      onMouseEnter={ onMouseEnterHandler }
      onMouseLeave={ onMouseLeaveHandler}
    >
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/${ id }` }>
          <img className="place-card__image" src={ previewImage } alt="" width="260" height="200" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ getStarRating(rating) }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
