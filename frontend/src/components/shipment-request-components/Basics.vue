<template>
    <div class="row">
        <div class="form-group col-md-6">
            <span v-if="errors.name">error1</span>
            <input type="text" class="form-control" placeholder="Name" @input="validate"
                   v-model="name">
        </div>
        <div class="form-group col-md-6">
            <span v-if="errors.modes">error2</span>
            <div class="btn-group" role="group">
                <button type="button"
                        class="btn btn-outline-primary"
                        :class="{ active: isMode(mode) }"
                        v-for="mode in shipmentModes"
                        :key="mode.name"
                        @click="toggleMode(mode)">{{mode.name}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: [
        'shipmentRequest',
        'modes',
        'name',
    ],
    data() {
        console.log(this, 2222222);
        return {
            errors: {},
        };
    },
    /*
    created() {
        console.log(3333, this);
        this.modes = this.shipmentRequest.modes;
        this.name = this.shipmentRequest.name;
    },
    */
    computed: {
        ...mapGetters({
            shipmentModes: 'getShipmentModes',
        }),
        /*
        modes: {
            get() {
                console.log(444);
                return this.modes;
            },
            set(modes) {
                console.log(modes, 'modes');
                this.setCurrentShipmentRequest({ ...this.shipmentRequest, modes });
            },
        },
        name() {
            return this.shipmentRequest.name;
        },
        */
    },
    methods: {
        ...mapMutations([
            'setCurrentShipmentRequest',
        ]),
        isMode(mode) {
            console.log(this, 111111);
            return this.modes.find(i => i.id === mode.id);
        },
        toggleMode(mode) {
            const targetMode = this.modes.find(i => i.id === mode.id);

            if (targetMode) {
                this.modes = this.modes.filter(i => i.id !== targetMode.id);
            } else if (this.modes.length !== 2) {
                this.modes.push(mode);
            }
            this.validate();
        },
        validate() {
            this.errors = {};

            const { name, modes } = this.shipmentRequest;

            console.log(this.shipmentRequest);

            if (!name) {
                this.errors.name = true;
            }
            if (!modes.length) {
                this.errors.modes = true;
            }


            this.setCurrentShipmentRequest({ ...this.shipmentRequest, name });
        },
    },
};
</script>

<style scoped>
    .btn-group {
        width: 100%;
    }
    .btn {
        width: 33.33333%;
    }
</style>
