const baseUrl = 'https://tst.wecity.amsterdam/wecity-3';
const imgVariant = '?variant=detail-image';

const fetchAllActivities = () => {
    const query = '/poi/search?count=5000&mode=LOCAL&locale=en&travelMode=walking';

    return fetch(baseUrl + query)
        .then(response => response.json())
        .then(data =>
            data.map(item => {
                const images = item.media;
                const mainImg = images ? images[0] : '';
                const location = item.location;
                const openingHours = (item.openingHours && item.openingHours.times && Object.getOwnPropertyNames(item.openingHours.times).length) > 0 ? item.openingHours.times : '';
                const coordinates = (location && location.coordinates) ? location.coordinates : [];
                const info = item.ticketInformation ? item.ticketInformation[0] : '';
                const features = item.features;

                return {
                    id: item.id,
                    title: item.title,
                    type: item.type,
                    bookable: item.bookable,
                    imgUrl: (mainImg && mainImg.url) ? baseUrl + mainImg.url + imgVariant : '',
                    images: images ? item.media.map(img => baseUrl + img.url + imgVariant) : [],
                    price: (info && info.price) ? info.price : '',
                    isBookable: info && info.price && info.price > 0,
                    skipTheLine: (info && info.information) ? info.information.indexOf('avoid the standard waiting line') >= 0 : false,
                    summary: item.summary,
                    description: item.description,
                    openingHours: openingHours,
                    address: (location && location.address) ? location.address : '',
                    district: (location && location.district) ? location.district : '',
                    coordinates: (coordinates && coordinates.length > 0) ? [ coordinates[1], coordinates[0] ] : [],
                    categories: (features && features.category) ? features.category : [],
                    facilities: (features && features.facility) ? features.facility : [],
                    labels: (features && features.label) ? features.label : [],
                    tags: (features && features.tag) ? features.tag : [],
                    ticketInformation: item.ticketInformation
                }
            })
        )
        .catch(() => console.log(`Error fetching data from ${baseUrl}`));
}

export {fetchAllActivities};