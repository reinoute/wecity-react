const baseUrl = 'https://tst.wecity.amsterdam/wecity-3';
const imgPostfix = '?variant=detail-image';

const getPois = () => {
    const query = '/poi/selection?locale=en&filter_category=sales';

    return fetch(baseUrl + query)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const pois = data[0].related;

            return pois.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    imgUrl: baseUrl + item.media[0].url + '?variant=detail-image',
                    price: item.ticketInformation[0].price,
                    skipTheLine: item.ticketInformation[0].information.indexOf('avoid the standard waiting line') >= 0
                }
            })
        })
        .catch(() => console.log(`Error fetching data from ${baseUrl}`));
}

const getPoi = (id) => {
    const query = '/poi/' + id;

    return fetch(baseUrl + query)
        .then(function (response) {
            return response.json()
        })
        .then(function (item) {
            return {
                id: item.id,
                type: item.type,
                title: item.title,
                mainImgUrl: baseUrl + item.media.filter(item => item.main)[0].url + imgPostfix,
                images: item.media.map(img => baseUrl + img.url + imgPostfix),
                summary: item.summary,
                description: item.description,
                location: item.location,
                categories: item.features.category,
                facilities: item.features.facility,
                labels: item.features.label,
                tags: item.features.tag,
                ticketInformation: item.ticketInformation,
                skipTheLine: item.ticketInformation[0].information.indexOf('avoid the standard waiting line') >= 0
            };
        })
        .catch(() => console.log(`Error fetching data from ${baseUrl}`));
}

export {getPois, getPoi};