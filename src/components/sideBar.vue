<style>
.sidebar-menu{
    overflow-y: auto;
}
.sidebar-menu::-webkit-scrollbar {
    width: 0px;
    height: 5px;
}
</style>
<template>
    <Menu class="sidebar-menu" :active-name="itemActive" theme="dark" width="auto" @on-select="selected" :open-names="[menulist[0].name, menulist[1].name, menulist[2].name]">
        <template v-for="menu in menulist">
            <Submenu :name="menu.name||''" v-if="menu.children&&menu.children.length>0">
                <template slot="title">
                    <Icon :type="menu.icon"></Icon>
                    <span v-text="menu.name"></span>
                </template>
                <template v-if="menu.children.length>0" v-for="item in menu.children">
                    <router-link :to="item.path">
                        <Menu-item :name="item.name"  :key="item.name">
                            <span v-text="item.name"></span>
                        </Menu-item>
                    </router-link>
                </template>
            </Submenu>
            <Menu-item v-else :name="menu.name||''">
                <Icon :type="menu.icon"></Icon>
                <span v-text="menu.name"></span>
            </Menu-item>
        </template>
    </Menu>
</template>
<script>
    export default {
        props:["menus","routers"],
        data () {
            return {
                menulist: this.setSideBar(),
                itemActive: "用户界面配置"
            }
        },
        mounted (){
            this.$el.style.maxHeight = window.innerHeight- 62 + "px"
        },
        methods: {
            setSideBar () {
                let Arr = [];
              	this.menus.map((menu) => {
                    let group = { name: menu.group, children: [] }
                    this.routers.map((router) => {
                        if(router.group&&router.group==menu.group){
                            menu.children.map(child => {
                                if(child.name&&child.name==router.name){
                                    group.children.push(router);
                                }
                            })
                        }
                    })
                    Arr.push(group)
                })
                return Arr;
            },
            selected(e){
                this.menulist.map((group)=>{
                    group.children.map((router)=>{
                        if(router.name == e){
                            this.$emit('on-change', router);
                        }
                    })
                })
            }
        }
        
    }
</script>