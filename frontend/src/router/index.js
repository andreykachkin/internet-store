import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import InvoicingList from '@/pages/InvoicingList';
import ShipmentList from '@/pages/ShipmentList';
import TemplateList from '@/pages/TemplateList';
import LocationList from '@/pages/LocationList';
import CargoTypeList from '@/pages/CargoTypeList';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/invoicing', component: InvoicingList },
        { path: '/shipments', component: ShipmentList },
        { path: '/locations', component: LocationList },
        { path: '/cargo-types', component: CargoTypeList },
        { path: '/templates', component: TemplateList },
    ],
});
