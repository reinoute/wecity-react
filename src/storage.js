import {fetchTopPois, fetchAllPois} from './api';
import localforage from 'localforage';

const TOP_POIS_KEY = "TOP_POIS";
const ALL_POIS_KEY = "POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

const getAllPois = () => {
    return localforage.getItem(LAST_UPDATED_KEY).then(timestamp => {
        // return local data if not older than 1 day
        if (timestamp && (Date.now() - timestamp) < ONE_DAY) {
            return localforage.getItem(ALL_POIS_KEY);
        } else {
            // otherwise fetch new data, store it locally and update timestamp
            return fetchAllPois().then(items => {
                return localforage.setItem(ALL_POIS_KEY, items).then((items) => {
                    return localforage.setItem(LAST_UPDATED_KEY, Date.now()).then(() => {
                        return items;
                    });
                })
            })
        }
    })
}

const updateData = () => {
    return Promise.all([
                fetchAllPois(),
                fetchTopPois()])
                    .then(response => {
                        Promise.all([
                            localforage.setItem(ALL_POIS_KEY, response[0]),
                            localforage.setItem(TOP_POIS_KEY, response[1])
                        ])
                        .then(data => {
                            localforage.setItem(LAST_UPDATED_KEY, Date.now())
                                .then(() => { return data })
                        })
                        .catch(error => console.log('Error updating local data: ', error))
                    }
                )
}


const getTopPois = () => {
    return localforage.getItem(LAST_UPDATED_KEY).then(timestamp => {
        // return local data if not older than 1 day
        if (timestamp && (Date.now() - timestamp) < ONE_DAY) {
            return localforage.getItem(TOP_POIS_KEY);
        } else {
            // otherwise fetch new data, store it locally and update timestamp
            return fetchTopPois().then(items => {
                return localforage.setItem(TOP_POIS_KEY, items).then((items) => {
                    return localforage.setItem(LAST_UPDATED_KEY, Date.now()).then(() => {
                        return items;
                    });
                })
            })
        }
    })
}

export {getAllPois, getTopPois, updateData};