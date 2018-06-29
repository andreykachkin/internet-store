import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import ShipmentRequestList from '@/pages/ShipmentRequestList';
import ShipmentList from '@/pages/ShipmentList';
import InvoicingList from '@/pages/InvoicingList';
import LocationList from '@/pages/LocationList';
import CargoTypeList from '@/pages/CargoTypeList';
import TemplateList from '@/pages/TemplateList';

import ShipmentRequestItem from '@/pages/ShipmentRequestItem';
import ShipmentItem from '@/pages/ShipmentItem';
import LocationItem from '@/pages/LocationItem';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Home },

        {
            path: '/shipment-requests',
            name: 'all shipment requests',
            component: ShipmentRequestList,
            children: [
                {
                    path: 'add',
                    name: 'all shipment requests.add',
                    component: ShipmentRequestItem,
                },
            ],
        },

        { path: '/shipments', name: 'all shipments', component: ShipmentList },
        { path: '/shipments/:id', name: 'view shipment by id', component: ShipmentItem },

        { path: '/invoicing', name: 'all invoicing', component: InvoicingList },

        {
            path: '/locations',
            name: 'all locations',
            component: LocationList,
            children: [
                {
                    path: 'add',
                    name: 'all locations.add',
                    component: LocationItem,
                },
                {
                    path: ':id/edit',
                    name: 'all locations.edit',
                    component: LocationItem,
                },
            ],
        },

        { path: '/cargo-types', name: 'all cargo-types', component: CargoTypeList },
        { path: '/templates', name: 'all templates', component: TemplateList },
    ],
});
