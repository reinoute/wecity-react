import {fetchTopPois, fetchAllPois} from './api';
import localforage from 'localforage';

const TOP_POIS_KEY = "TOP_POIS";
const ALL_POIS_KEY = "POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

const updateData = () =>
    Promise.all([
        fetchAllPois(),
        fetchTopPois()])
        .then(data =>
            Promise.all([
                localforage.setItem(ALL_POIS_KEY, data[0]),
                localforage.setItem(TOP_POIS_KEY, data[1])
            ])
                .then(data =>
                    localforage.setItem(LAST_UPDATED_KEY, Date.now())
                        .then(() => data)
                )
                .catch(error => console.log('Error updating local data: ', error)));

const getAllPois = () => {
    return Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY)
            return localforage.getItem(ALL_POIS_KEY);
        else return updateData().then(data => data[0])
    })
}

const getTopPois = () =>
    Promise.all([
        localforage.getItem(TOP_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY)
            return localforage.getItem(TOP_POIS_KEY);
        else return updateData().then(data => data[1])
    })

export {getAllPois, getTopPois};