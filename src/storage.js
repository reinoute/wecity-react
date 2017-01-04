import {fetchTopPois} from './api';
import localforage from 'localforage';

const TOP_POIS_KEY = "TOP_POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

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

export {getTopPois};