import api from '../../api/locations';

export default {
    state: {
        locations: [],
        currentLocation: {},
        locationTypes: [
            {
                value: 'store',
                title: 'Store',
            },
            {
                value: 'final_customer',
                title: 'Final Customer',
            },
            {
                value: 'warehouse',
                title: 'Warehouse',
            },
            {
                value: 'factory',
                title: 'Factory',
            },
            {
                value: 'port',
                title: 'Port',
            },
            {
                value: 'airport',
                title: 'Airport',
            },
            {
                value: 'administration',
                title: 'Administration',
            },
            {
                value: 'head_office',
                title: 'Head Office',
            },
            {
                value: 'other',
                title: 'Other',
            },
        ],
    },
    getters: {
        getLocations: state => state.locations,
        getCurrentLocation: state => state.currentLocation,
        getLocationTypes: state => state.locationTypes,
    },
    actions: {
        loadLocations({ commit }) {
            return api.loadLocations()
                .then(locations => commit('setLocations', locations));
        },
        loadLocation({ commit }, id) {
            return Promise.resolve()
                .then(() => {
                    if (!id) {
                        return {};
                    }
                    return api.loadLocation(id);
                })
                .then(location => commit('setCurrentLocation', location));
        },
        createLocation({ commit }, data) {
            return api.createLocation(data)
                .then(() => commit('setCurrentLocation', {}));
        },
        updateLocation({ commit }, data) {
            return api.updateLocation(data)
                .then(() => commit('setCurrentLocation', {}));
        },
        removeLocation(context, id) {
            return api.deleteLocation(id);
        },
    },
    mutations: {
        setLocations(state, locations) {
            state.locations = locations;
        },
        setCurrentLocation(state, location) {
            state.currentLocation = location;
        },
    },
};
