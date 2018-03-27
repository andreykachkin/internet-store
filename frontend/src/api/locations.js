import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

export default {
    loadLocations() {
        return axios.get(`${API_URL}locations`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    loadLocation(id) {
        return axios.get(`${API_URL}locations/${id}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    deleteLocation(id) {
        return axios
            .delete(`${API_URL}locations/${id}`)
            .then(response => response)
            .catch(err => {
                throw new Error(err);
            });
    },
};
