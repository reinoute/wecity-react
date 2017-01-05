const baseUrl = 'https://tst.wecity.amsterdam/wecity-3';
const imgVariant = '?variant=detail-image';

const fetchAllPois = () => {
    const query = '/poi/top?count=5000&mode=LOCAL&locale=en&travelMode=walking';

    return fetch(baseUrl + query)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            return data.map(item => {
                const images = item.media;
                const mainImg = images ? images[0] : '';
                const info = item.ticketInformation ? item.ticketInformation[0] : '';
                const features = item.features;

                return {
                    id: item.id,
                    title: item.title,
                    bookable: item.bookable,
                    imgUrl: (mainImg && mainImg.url) ? baseUrl + mainImg.url + imgVariant : '',
                    images: images ? item.media.map(img => baseUrl + img.url + imgVariant) : [],
                    price: (info && info.price) ? info.price : '',
                    skipTheLine: (info && info.information) ? info.information.indexOf('avoid the standard waiting line') >= 0 : false,
                    summary: item.summary,
                    description: item.description,
                    location: item.location,
                    categories: (features && features.category) ? features.category : [],
                    facilities: (features && features.facility) ? features.facility : [],
                    labels: (features && features.label) ? features.label : [],
                    tags: (features && features.tag) ? features.tag : [],
                    ticketInformation: item.ticketInformation
                }
            })
        })
        .catch(() => console.log(`Error fetching data from ${baseUrl}`));
}

export {fetchAllPois};