<template>
    <Modal>
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
            <button class="btn btn-outline-success" v-if="location.id" @click="update()">Update</button>
            <button class="btn btn-outline-success" v-else @click="create()">Create</button>
            <button class="btn btn-outline-dark" @click="closeModal()">Close</button>
        </div>
    </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Modal from '../components/Modal';

export default {
    computed: mapGetters({
        location: 'getCurrentLocation',
        locationTypes: 'getLocationTypes',
    }),
    created() {
        this.loadLocation(this.$route.params.id);
    },
    methods: {
        ...mapActions([
            'createLocation',
            'updateLocation',
            'loadLocation',
            'loadLocations',
        ]),
        closeModal() {
            this.$router.push({ name: 'all locations' });
            this.loadLocations();
        },
        create() {
            this.createLocation(this.location)
                .then(() => this.closeModal());
        },
        update() {
            this.updateLocation(this.location)
                .then(() => this.closeModal());
        },
    },
    components: {
        Modal,
    },
};
</script>
