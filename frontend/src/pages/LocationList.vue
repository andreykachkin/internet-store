<template>
    <div>
        <router-link class="btn btn-primary float-right"
                :to="{ name: 'all locations.add' }">
            Create
        </router-link>
        <table class="table table-hover table-bordered table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Creation Date</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">Address 1</th>
                <th scope="col">Recipient</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="location in locations" :key="location.id">
                <td>{{location.name}}</td>
                <td>{{location.creationDate}}</td>
                <td>{{location.city}}</td>
                <td>{{location.country}}</td>
                <td>{{location.address_1}}</td>
                <td>{{location.address_3}}</td>
                <td>
                    <router-link class="btn btn-outline-primary"
                                 :to="{ name: 'all locations.edit', params: { id: location.id }}">
                        Update
                    </router-link>
                    <button class="btn btn-outline-danger" @click="remove(location.id)">Remove</button>
                </td>
            </tr>
            </tbody>
        </table>
        <router-view></router-view>
    </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'getLocations',
        ]),
        locations() {
            return this.getLocations
                .map(item => ({ ...item, creationDate: moment(item.created_at).format('LLL') }));
        },
    },
    created() {
        this.loadLocations();
    },
    methods: {
        ...mapActions([
            'removeLocation',
            'loadLocations',
        ]),
        remove(id) {
            this.removeLocation(id)
                .then(() => this.loadLocations());
        },
    },
};
</script>
