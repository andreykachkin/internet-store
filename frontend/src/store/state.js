export default {
    headerMenu: [
        { name: 'Requests', to: { name: 'all shipment requests' } },
        { name: 'Shipments', to: { name: 'all shipments' } },
        { name: 'Invoicing', to: { name: 'all invoicing' } },
    ],
    headerSubMenu: [
        { name: 'My Locations', to: { name: 'all locations' } },
        { name: 'Cargo Types', to: { name: 'all cargo-types' } },
        { isDivider: true },
        { name: 'Templates', to: { name: 'all templates' } },
    ],
    cargoTypes: [],
    shipmentModes: [],
};
