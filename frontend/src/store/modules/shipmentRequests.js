// import api from '../../api/shipments_requests';

export default {
    state: {
        currentShipmentRequest: {},
    },
    getters: {
        getCurrentShipmentRequest: state => state.currentShipmentRequest,
    },
    actions: {
        loadShipmentRequest({ commit }, id) {
            return Promise.resolve()
                .then(() => {
                    if (!id) {
                        return {
                            from_addresses: [],
                            dest_addresses: [],
                            modes: [],
                        };
                    }
                    return {};
                    // return api.loadLocation(id);
                })
                .then(request => commit('setCurrentShipmentRequest', request));
        },
    },
    mutations: {
        setCurrentShipmentRequest(state, request) {
            state.currentShipmentRequest = request;
        },
    },
};
