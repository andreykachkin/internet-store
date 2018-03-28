import moment from 'moment';

import api from '../api/locations';

export default {
    state: {
        locations: [],
    },
    getters: {
        getLocations: state => state.locations
            .map(item => ({ ...item, creationDate: moment(item.created_at).format('LLL') })),
    },
    actions: {
        loadLocations({ commit }) {
            return api.loadLocations()
                .then(locations => commit('setLocations', locations));
        },
        removeLocation(context, id) {
            return api.deleteLocation(id);
        },
    },
    mutations: {
        setLocations(state, locations) {
            state.locations = locations;
        },
    },
};
