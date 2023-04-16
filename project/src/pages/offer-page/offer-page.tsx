import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  fetchActiveOfferAction,
  fetchCommentsAction,
  fetchNearbyActiveOfferAction,
} from '../../store/api-actions';

import Header from '../../components/header/header';
import { getStarRating } from '../../components/place-card/place-card';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import Comment from '../../components/comment/comment';
import Map from '../../components/map/map';
import NearPlacesList from '../../components/near-places-list/near-places-list';

import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

import { AuthorizationStatus, MapLocation } from '../../const';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const activeOfferId = Number(id);
  const dispatch = useAppDispatch();

  const activeOffer = useAppSelector((state) => state.activeOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyActiveOffers = useAppSelector((state) => state.nearbyActiveOffers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(fetchActiveOfferAction(activeOfferId));
    dispatch(fetchCommentsAction(activeOfferId));
    dispatch(fetchNearbyActiveOfferAction(activeOfferId));

  }, [dispatch, activeOfferId]);

  if (isNaN(activeOfferId)) {
    return <NotFoundPage />;
  }

  if (!activeOffer) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>
          Шесть городов. Страница предложения
        </title>
      </Helmet>
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                activeOffer.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt=""/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                activeOffer.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> :
                  ''
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {activeOffer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarRating(activeOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{activeOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {activeOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {activeOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {activeOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    activeOffer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={activeOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {activeOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {activeOffer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {activeOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((comment) => <Comment review={comment} key={comment.id}/>)}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm activeOfferId={activeOfferId}/>}
              </section>
            </div>
            <Map city={activeOffer.city} offers={nearbyActiveOffers} selectedOffer={activeOffer} mapLocation={MapLocation.property}/>
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList offers={nearbyActiveOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
