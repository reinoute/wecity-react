import {fetchAllPois} from './api';
import localforage from 'localforage';

const ALL_POIS_KEY = "POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

const updateData = () =>
        fetchAllPois() // fetch data from api
            .then(data => localforage.setItem(ALL_POIS_KEY, data)) // store data in local storage
            .then(data => {
                localforage.setItem(LAST_UPDATED_KEY, Date.now()); // update timestamp
                return data;
            })
            .catch(error => console.log('Error updating local data: ', error))

const getPois = (bookableOnly = false) =>
    Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const pois = values[0];
        const lastUpdated = values[1];

        if (pois && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY)
            return bookableOnly ? pois.filter(item => item.price > 0) : pois;
        else return updateData();
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

export {getPois, getPoiById};