import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/shipments';

export default {
    loadShipments() {
        return axios.get(`${API_URL}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    loadShipment(id) {
        return axios.get(`${API_URL}/${id}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
};
