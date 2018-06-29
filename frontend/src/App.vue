<template>
    <div id="app">
        <Header></Header>
        <div class="container-fluid">
            <div class="row">
                <main role="main" class="col-12 pt-3 px-4">
                    <router-view/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header';

export default {
    components: {
        Header,
    },
    created() {
        this.loadCargoTypes();
        this.loadShipmentModes();
    },
    methods: mapActions([
        'loadCargoTypes',
        'loadShipmentModes',
    ]),
};
</script>
