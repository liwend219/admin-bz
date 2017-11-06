<template>
    <Cascader change-on-select :value="value" :data="data" @on-change="citySelected" trigger="click"></Cascader>
</template>
<script>
    import microCities from "./microCities.json";
    export default {
        props: {
            value: Array
        },
        data () {
            return {
                data: []
            }
        },
        mounted(){
          	this.data = microCities;
        },
        methods: {
            citySelected (data) {
                this.$emit('input', data)
                this.$emit("on-change", data)
            }
        }
    }
</script>