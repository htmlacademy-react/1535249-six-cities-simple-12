import { useRef, useEffect, useState } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import classNames from 'classnames';
import useMap from '../../hooks/useMap';
import { City, Offers, Offer } from '../../types/offer';
import { MapLocation, URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
  mapLocation: MapLocation;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, offers, selectedOffer, mapLocation }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapClass = classNames('map', {
    'cities__map': mapLocation === MapLocation.cities,
    'property__map': mapLocation === MapLocation.property,
  });

  const [markerLayers, ] = useState<LayerGroup>(new LayerGroup());

  useEffect(
    () => {
      if (map) {
        map.flyTo(
          {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          city.location.zoom
        );
      }
    }, [map, city]);

  useEffect(() => {
    if (map) {
      markerLayers.clearLayers();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && selectedOffer.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayers);
      });
      markerLayers.addTo(map);
    }
  }, [map, offers, selectedOffer, markerLayers]);

  return (
    <section
      style={{ width:'100%' }}
      ref={ mapRef }
      className={ mapClass }
    >
    </section>
  );
}

export default Map;
