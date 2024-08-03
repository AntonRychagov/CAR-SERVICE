import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { YandexMapProps } from "../../../shared/types";

const mapState = {
  center: [51.035711, 59.874088], // Пример координат (широта, долгота)
  zoom: 14,
};

const services = [
  { id: 1, name: "Автосервис 555", coordinates: [51.031502, 59.876867] },
  { id: 2, name: "Автосервис 2", coordinates: [51.041502, 59.886867] }, // Изменены координаты для корректного отображения
];

const YandexMap: React.FC<YandexMapProps> = ({
  apiKey = "b0d7c011-6935-478c-acae-af6c38711a37",
}) => {
  const handlePlacemarkClick = (coordinates: number[]) => {
    const [latitude, longitude] = coordinates;
    const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${latitude},${longitude}&rtt=auto&z=12&whatshere%5Bpoint%5D=${longitude},${latitude}&whatshere%5Bzoom%5D=15`;
    window.open(yandexMapsUrl, "_blank");
  };

  return (
    <YMaps query={{ apikey: apiKey }}>
      <Map defaultState={mapState} width="100%" height="400px">
        {services.map((service) => (
          <Placemark
            key={service.id}
            geometry={service.coordinates}
            properties={{
              balloonContent: `<strong>${service.name}</strong>`,
              hintContent: service.name,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/custom-marker.png", // Новый путь к изображению с учетом базового URL
              iconImageSize: [32, 32],
              iconImageOffset: [-16, -16],
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            onClick={() => handlePlacemarkClick(service.coordinates)}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export { YandexMap };
