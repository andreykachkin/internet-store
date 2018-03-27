import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

export default {
    loadShipments() {
        return axios.get(`${API_URL}shipments`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    loadShipment(id) {
        return axios.get(`${API_URL}shipments/${id}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
};
