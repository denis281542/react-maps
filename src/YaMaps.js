import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YaMaps = ({lat, lng}) => {
    return(<>
        <YMaps query={{ apikey: '282e7daa-8f35-41e8-9a7f-590c7ef1e8c4' }} >
            <Map 
                state={{ center: [lat, lng], zoom: 12 }}
                modules={["templateLayoutFactory", "layout.ImageWithContent"]}

            >
                <Placemark 
                    // key={lat}
                    geometry={[lat, lng]}
                    // options={{
                    //     iconLayout:'default#imageWithContent',
                    //     iconContentLayout: './location-dot-solid.svg',
                    //     iconContentSize: [100,100],
                    //     iconContentOffset: [10, 10],
                    // }}
                />
            </Map>
        </YMaps>
    </>)
}