<template>
    <div id="app">
        <app-layout>
            <router-view/>
        </app-layout>
    </div>
</template>

<script>
import { AppLayout } from "@/components";

export default {
    name: 'app',
    components: {
        AppLayout
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
