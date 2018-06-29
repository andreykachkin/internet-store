import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import locations from './modules/locations';
import shipmentRequests from './modules/shipmentRequests';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        locations,
        shipmentRequests,
    },
    plugins: debug ? [createLogger()] : [],
});
