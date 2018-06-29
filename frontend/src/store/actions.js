import api from '../api/dicts';

export default {
    loadCargoTypes({ commit }) {
        return api.loadCargoTypes()
            .then(cargoTypes => commit('setCargoTypes', cargoTypes));
    },
    loadShipmentModes({ commit }) {
        return api.loadShipmentModes()
            .then(modes => commit('setShipmentModes', modes));
    },
};
