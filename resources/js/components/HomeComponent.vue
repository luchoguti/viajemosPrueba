<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <Mapa class="mapa" />
            </div>
        </div>
    </div>
</template>

<script>
    import Mapa from "./Mapa";
    export default {
        components: {Mapa},
        data(){
            return {
                datos_hoteles:[]
            }
        },
        created() {

        },
        methods: {
            loading(){
                var app = this;
                let loader = app.$loading.show({
                // Optional parameters
                container: app.fullPage ? null : app.$refs.formContainer,
                canCancel: false,
                onCancel: app.onCancel,
                });
                return loader;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mapa {
        height: 425px;
    }
</style>
