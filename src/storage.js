import {fetchTopPois, fetchAllPois} from './api';
import localforage from 'localforage';

const TOP_POIS_KEY = "TOP_POIS";
const ALL_POIS_KEY = "POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

const updateData = () =>
    Promise.all([
        // fetch data from api
        fetchAllPois(),
        fetchTopPois()])
        .then(data =>
            // then store it in local storage
            Promise.all([
                localforage.setItem(ALL_POIS_KEY, data[0]),
                localforage.setItem(TOP_POIS_KEY, data[1])
            ])
                .then(data =>
                    // update the timestamp
                    localforage.setItem(LAST_UPDATED_KEY, Date.now())
                        .then(() => data)
                )
                .catch(error => console.log('Error updating local data: ', error)));

const getAllPois = () =>
    Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY)
            return localforage.getItem(ALL_POIS_KEY);
        else return updateData().then(data => data[0])
    })

const getTopPois = () =>
    Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY) {
            return localforage.getItem(ALL_POIS_KEY).then(data => {
                return data.filter(item => item.price > 0)
            })
        }
        else return updateData().then(data => data[1])
    })

const getPoiById = (id) => {
    return Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY),
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY) {
            return localforage.getItem(ALL_POIS_KEY).then(data => {

                var bla =  data.filter(item => item.id === id);
                console.log('-RE- bla', bla);
                return bla[0];

            })
        } else {
            return updateData()
                .then(data => data[1])
                .then(data => {
                    return data.filter(item => item.id === id);
                })
        }
    })
}

export {getAllPois, getTopPois, getPoiById};