<template>
    <CargarMapa
        :configMapa="configMapa"
        v-bind:apiKey="envApiKeyGoogle"
    >
    <template slot-scope="{ google, map }">
        <Marcadores
            v-for="marker in markers"
                :key="marker.id"
                :marker="marker"
                :google="google"
                :map="map"
            />
    </template>
    </CargarMapa>
</template>

<script>
    import CargarMapa from "./CargarMapa";
    import Marcadores from "./Marcadores";
    import {configMapa} from "../constants/configMapa";

    export default {
        mounted(){
            console.log();
        },
        components: {
            CargarMapa,
            Marcadores
        },

        data() {
            return {
                envApiKeyGoogle:process.env.MIX_API_KEY_GOOGLE,
                markers: [
                    {
                        id: "0",
                        position: { lat: 25.7751, lng: -80.2105 },
                        title: "Miami"
                    },
                    {
                        id: "1",
                        position: { lat: 28.4159, lng: -81.2988 },
                        title: "Orlando Florida"
                    },
                    {
                        id: "2",
                        position: { lat: 40.6643, lng: -73.9385 },
                        title: "New York"
                    }
                ]
            };
        },
        computed: {
            configMapa() {
                return {
                    ...configMapa,
                    center: this.mapCenter
                };
            },
            mapCenter() {
                return this.markers[0].position;
            }
        }
    };
</script>

<style scoped>

</style>
