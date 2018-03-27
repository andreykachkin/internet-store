import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import InvoicingList from '@/pages/InvoicingList';
import ShipmentList from '@/pages/ShipmentList';
import TemplateList from '@/pages/TemplateList';
import LocationList from '@/pages/LocationList';
import CargoTypeList from '@/pages/CargoTypeList';

import ShipmentItem from '@/pages/ShipmentItem';
import LocationItem from '@/pages/LocationItem';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/invoicing', component: InvoicingList },

        { path: '/shipments', name: 'all shipments', component: ShipmentList },
        { path: '/shipments/:id', name: 'view shipment by id', component: ShipmentItem },

        {
            path: '/locations',
            name: 'all locations',
            component: LocationList,
            children: [
                {
                    path: ':id/edit',
                    name: 'all locations.edit',
                    component: LocationItem,
                },
            ],
        },

        { path: '/cargo-types', component: CargoTypeList },
        { path: '/templates', component: TemplateList },
    ],
});
