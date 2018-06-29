<template>
    <div>
        <span v-if="direction === 'from'">Origin</span>
        <span v-else>Destination</span>
        <div class="row" v-for="(location, index) in locations" :key="location.id || index">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Address" v-model="location.address">
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Name" v-model="location.date">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'direction',
        'locations',
    ],
    created() {
        console.log(this.direction);
    },
};
</script>
