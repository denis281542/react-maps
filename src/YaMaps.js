import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YaMaps = ({lat, lng}) => {
    return(<>
        <YMaps>
            <Map 
                width='100%'
                height='100%'
                state={{ center: [lat, lng], zoom: 12 }}
            >
                <Placemark 
                    geometry={[lat, lng]}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: 'https://i.pinimg.com/originals/86/fd/17/86fd17769a3b2537d2b028601cda7b92.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-3, -42]
                    }}
                />
            </Map>
        </YMaps>
    </>)
}