const baseUrl = 'https://tst.wecity.amsterdam/wecity-3';

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
                    price: item.ticketInformation[0].price
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
                title: item.title,
                imgUrl: baseUrl + item.media[0].url + '?variant=detail-image',
                summary: item.summary
            };
        })
        .catch(() => console.log(`Error fetching data from ${baseUrl}`));
}

export {getPois, getPoi};