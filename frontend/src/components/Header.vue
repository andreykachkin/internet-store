<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarsExample04" aria-controls="navbarsExample04"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="item in menu" :key="item.name">
                    <router-link class="nav-link" :to="item.to">{{item.name}}</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Admin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item"
                                     v-if="!item.isDivider"
                                     :key="item.name"
                                     v-for="item in subMenu"
                                     :to="item.to">
                            {{item.name}}
                        </router-link>
                        <div class="dropdown-divider" v-else></div>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-md-0">
                <input class="form-control" type="text" placeholder="Search">
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { name: 'Shipments', to: '/shipments' },
                { name: 'Invoicing', to: '/invoicing' },
            ],
            subMenu: [
                { name: 'My Locations', to: '/locations' },
                { name: 'Cargo Types', to: '/cargo-types' },
                { isDivider: true },
                { name: 'Templates', to: '/templates' },
            ],
        };
    },
};
</script>
