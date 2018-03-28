<template>
    <Modal @close="closeModal()">
        <div slot="header">
            <span v-if="location.id">Modify - {{location.name}}</span>
            <span v-else>Create location</span>
        </div>
        <div slot="body" class="row">
            <div class="form-group col-md-6">
                <label for="name">Location Type</label>
                <input type="text" class="form-control" id="name"
                       placeholder="Location name" v-model="location.name">
            </div>
            <div class="form-group col-md-6">
                <label for="types">Location Type:</label>
                <select v-model="location.type" class="form-control" id="types">
                    <option v-for="type in locationTypes" :value="type.value" :key="type.value">
                        {{ type.title }}
                    </option>
                </select>
            </div>
            <div class="form-group col-md-12">
                <label for="address1">Address Line 1</label>
                <input type="text" class="form-control" id="address1"
                       placeholder="Address Line 1" v-model="location.address_1">
            </div>
            <div class="form-group col-md-12">
                <label for="address2">Address Line 2</label>
                <input type="text" class="form-control" id="address2"
                       placeholder="Address Line 2" v-model="location.address_2">
            </div>
            <div class="form-group col-md-12">
                <label for="address3">Recipient</label>
                <input type="text" class="form-control" id="address3"
                       placeholder="Address Line 3" v-model="location.address_3">
            </div>
            <div class="form-group col-md-4">
                <label for="zipcode">Zip Code</label>
                <input type="text" class="form-control" id="zipcode"
                       placeholder="Zip Code" v-model="location.zipcode">
            </div>
            <div class="form-group col-md-4">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city"
                       placeholder="City" v-model="location.city">
            </div>
            <div class="form-group col-md-4">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country"
                       placeholder="Country" v-model="location.country">
            </div>
        </div>
        <div slot="footer">
            <button class="btn btn-outline-success" v-if="location.id" @click="updateLocation()">Update</button>
            <button class="btn btn-outline-success" v-else @click="createLocation()">Create</button>
            <button class="btn btn-outline-dark" @click="closeModal()">Close</button>
        </div>
    </Modal>
</template>

<script>
import api from '../api/locations';

import Modal from '../components/Modal';

export default {
    data() {
        return {
            location: [],
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
        };
    },
    created() {
        const paramsId = this.$route.params.id;
        return Promise.resolve()
            .then(() => {
                if (paramsId) {
                    return api.loadLocation(paramsId);
                }
                return {};
            })
            .then(result => this.location = result);
    },
    methods: {
        closeModal() {
            this.$router.push({ name: 'all locations' });
        },
        createLocation() {
            api.createLocation(this.location)
                .then(() => this.closeModal());
        },
        updateLocation() {
            const {
                id, name, type,
                address_1: address1,
                address_2: address2,
                address_3: address3,
                city, country, zipcode,
            } = this.location;
            const location = {
                id,
                name,
                type,
                address_1: address1,
                address_2: address2,
                address_3: address3,
                city,
                country,
                zipcode,
            };
            api.updateLocation(location)
                .then(() => this.closeModal());
        },
    },
    components: {
        Modal,
    },
};
</script>
