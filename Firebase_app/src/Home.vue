
<template>
    <div>
        <app-server-status v-for="server in 1"></app-server-status>
    </div>
</template>

<script>
    import serverstatus from './serverstatus.vue'

    export default {
        components: {
            'app-server-status' : serverstatus }
    }
</script>

