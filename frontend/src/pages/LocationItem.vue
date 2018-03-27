<template>
    <Modal @close="closeModal()">
        <span slot="header">
            Header!!!!!!  {{location.name}}
        </span>
        <div slot="body">
            <div>
                <h3>{{location.city}}, {{location.country}}</h3>
            </div>
            <div>
                <h5>{{location.address_3}}</h5>
            </div>
        </div>
        <div slot="footer">
            <button class="btn btn-outline-success">Submit</button>
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
        };
    },
    created() {
        api.loadLocation(this.$route.params.id)
            .then(result => this.location = result);
    },
    methods: {
        closeModal() {
            this.$router.push({ name: 'all locations' });
        },
    },
    components: {
        Modal,
    },
};
</script>
