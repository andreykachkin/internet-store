<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <div class="row">
                            <span v-if="shipmentRequest.name">{{shipmentRequest.name}}</span>
                            <span v-else>New Request</span>
                            <button class="btn btn-outline-dark">Close</button>
                        </div>
                    </div>

                    <div class="modal-body">
                        <div>
                            <Basics v-bind="shipmentRequest"></Basics>
                            <LocationPoint
                                    :locations="shipmentRequest.from_addresses"
                                    direction="from"></LocationPoint>
                            <LocationPoint
                                    :locations="shipmentRequest.dest_addresses"
                                    direction="dest"></LocationPoint>
                        </div>
                    </div>

                    <div class="modal-footer">
                        23
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Modal from '../components/Modal';
import Basics from '../components/shipment-request-components/Basics';
import LocationPoint from '../components/shipment-request-components/LocationPoint';

export default {
    computed: mapGetters({
        shipmentRequest: 'getCurrentShipmentRequest',
    }),
    created() {
        this.loadShipmentRequest(this.$route.params.id);
    },
    methods: {
        ...mapActions([
            'loadShipmentRequest',
        ]),
    },
    components: {
        Modal,
        Basics,
        LocationPoint,
    },
};
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
