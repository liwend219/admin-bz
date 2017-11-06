<style>
</style>
<template>
    <div>
        <Menu :active-name="activeName" width="auto" mode="vertical" class="sideBar">
            <Menu-group :title="router.name">
                <template v-for="item in router.children">
                    <router-link style="color: #495060;" :to="item.path">               
                        <Menu-item :name="item.name" >
                            <span v-text="item.name"></span>
                        </Menu-item>
                    </router-link>
                </template>
            </Menu-group>        
        </Menu>
    </div>
    <!--
        <router-link :to="item.path"></router-link>
    -->
</template>
<script>
    export default {
        props:["router", "height"],
        data () {
            return {
                activeName: this.router.children[0].name,
                menu: ""
            }
        },
        mounted () {
            this.menu = this.$(this.$el).find(".sideBar")[0]
        },
        watch: {
            "height": function () {
                this.$nextTick(() => {
                    this.menu.style.height = this.height + "px"
                })                
            },
            "router": function () {
                this.$nextTick(() => {
                    this.activeName = this.router.children[0].name
                })                
            }
        }
    }
</script>