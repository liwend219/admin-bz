<template>
    <Cascader :data="data" :value="value" @on-change="citySelected" trigger="hover"></Cascader>
</template>
<script>
    import cities from "./cities.json";
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
          	this.data = cities;
        },
        methods: {
            citySelected (data) {
                this.$emit('input', data)
                this.$emit("on-change", data)
            },
            init() {
                let Arr = [];
                cities.map(function(prov){
                    let pro = {
                        'value': prov['provinceCode'],
                        'label': prov['provinceName'],
                        'children': []
                    }
                    if(prov['cities'].length>0){
                        let cities = prov['cities'];
                        cities.map(function(city){
                            let opt ={
                                'value': city['cityCode'],
                                'label': city['cityName'],
                                'children': []
                            }
                            if(city['counties'].length>0){
                                let counties = city['counties'];
                                counties.map(function(c){
                                    let o ={
                                        'value': c['countyCode'],
                                        'label': c['countyName'],
                                    }
                                    opt['children'].push(o)
                                })
                            }
                            pro['children'].push(opt);
                        })
                    }
                    Arr.push(pro);
                });
                return Arr;
            }
        }
    }
</script>