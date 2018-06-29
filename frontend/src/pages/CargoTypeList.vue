<template>
    <div>
        <table class="table table-hover table-bordered table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Is Container ?</th>
                <th scope="col">Length</th>
                <th scope="col">Width</th>
                <th scope="col">Height</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="type in cargoTypes" :key="type.id">
                <td>{{type.name}}</td>
                <td>
                    <span class="badge badge-success" v-if="type.is_container">True</span>
                    <span class="badge badge-warning" v-else>False</span>
                </td>
                <td>{{type.length}}</td>
                <td>{{type.width}}</td>
                <td>{{type.height}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters({
        cargoTypes: 'getCargoTypes',
    }),
};
</script>
