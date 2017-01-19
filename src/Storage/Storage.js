import {fetchAllActivities} from '../Api/Api';
import localforage from 'localforage';

const ALL_POIS_KEY = "POIS";
const LAST_UPDATED_KEY = "LAST_UPDATED";
const ONE_DAY = 1000 * 60 * 60 * 24; // number of milliseconds in one day

const updateActivities = () =>
        fetchAllActivities() // fetch data from api
            .then(activities => Promise.all([
                localforage.setItem(ALL_POIS_KEY, activities),
                localforage.setItem(LAST_UPDATED_KEY, Date.now())
            ]))
            .then(values => values[0]) // return only the activities, not the timestamp
            .catch(error => console.log('Error updating local data: ', error));

const getActivities = () =>
    Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY)
    ]).then(values => {
        const activities = values[0];
        const lastUpdated = values[1];

        if (activities && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY) {
            return activities;
        } else return updateActivities();
    });

const getActivityById = (id) =>
    Promise.all([
        localforage.getItem(ALL_POIS_KEY),
        localforage.getItem(LAST_UPDATED_KEY),
    ]).then(values => {
        const activities = values[0];
        const lastUpdated = values[1];

        if (activities && lastUpdated && (Date.now() - lastUpdated) < ONE_DAY)
           return activities.filter(item => item.id === id)[0]
        else {
            return updateActivities()
                .then(data => data.filter(item => item.id === id)[0])
        }
    });

export {getActivities, getActivityById};