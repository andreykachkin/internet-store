<template>
    <div>
        list sr
        <router-link :to="{ name: 'all shipment requests.add' }">create</router-link>
        <router-view/>
    </div>
</template>
