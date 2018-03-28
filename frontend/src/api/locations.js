import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/locations';

export default {
    loadLocations() {
        return axios.get(`${API_URL}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    loadLocation(id) {
        return axios.get(`${API_URL}/${id}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    createLocation(params) {
        return axios
            .post(`${API_URL}`, params)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    updateLocation(params) {
        return axios
            .patch(`${API_URL}/${params.id}`, params)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
    deleteLocation(id) {
        return axios
            .delete(`${API_URL}/${id}`)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err);
            });
    },
};
