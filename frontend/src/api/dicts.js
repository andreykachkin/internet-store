import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/dictionary';

export default {
    loadCargoTypes() {
        return axios.get(`${API_URL}/shipment-content-types`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    loadShipmentModes() {
        return axios.get(`${API_URL}/shipment-modes`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
};
