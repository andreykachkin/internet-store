<template>
    <table class="table table-hover table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Creation Date</th>
                <th scope="col">ETD</th>
                <th scope="col">RTD</th>
                <th scope="col">ETA</th>
                <th scope="col">RTA</th>
            </tr>
        </thead>
        <tbody>
            <router-link v-for="shipment in shipments"
                         :key="shipment.id" tag="tr"
                         :to="{ name: 'view shipment by id', params: { id: shipment.id } }">
                <th scope="row">{{shipment.id}}</th>
                <td>{{shipment.name}}</td>
                <td>{{shipment.created_at}}</td>
                <td>{{shipment.etd}}</td>
                <td>{{shipment.rtd}}</td>
                <td>{{shipment.eta}}</td>
                <td>{{shipment.rta}}</td>
            </router-link>
        </tbody>
    </table>
</template>

<script>
import api from '../api/shipments';

export default {
    data() {
        return {
            shipments: [],
        };
    },
    created() {
        api.loadShipments()
            .then(result => this.shipments = result);
    },
};
</script>
