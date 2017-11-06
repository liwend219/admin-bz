<template>
    <Select style="width:130px" :value="value" @on-change="plus">
        <Option :value="1">1</Option>
        <Option :value="2">2</Option>
        <Option :value="3">3</Option>
        <Option :value="4">4</Option>
        <Option :value="5">5</Option>
        <Option :value="6">6</Option>
    </Select>
</template>
<script>
    export default {
        props: {
            value: Number
        },
        data () {
            return {
                result: ""
            }
        },
        methods: {
            plus (num) {
                this.$emit('input', num)
            }
        }
    }
</script>