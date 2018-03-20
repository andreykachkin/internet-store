<template>
    <div id="app">
        <Header></Header>
        <div class="container-fluid">
            <div class="row">
                <main role="main" class="col-md-12 pt-3 px-4">
                    <img src="./assets/logo.png">
                    <router-view/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>
