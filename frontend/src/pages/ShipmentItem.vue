<template>
    <div>
        {{shipment}}
    </div>
</template>

<script>
import api from '../api/shipments';

export default {
    data() {
        return {
            shipment: [],
        };
    },
    created() {
        api.loadShipment(this.$route.params.id)
            .then(result => this.shipment = result);
    },
};
</script>
