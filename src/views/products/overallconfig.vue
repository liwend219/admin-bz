<template>
    <div>
        <div style="display:inline-block;margin-top:50px;">
            <span>支付宝原路退款</span>
        </div>
        <div style="display:inline-block;margin-left:50px">
            <Radio-group @on-change="change" :value="animal">
                <Radio label="-1">不支持</Radio>
                <Radio label="1">支持</Radio>
            </Radio-group>
        </div>
    </div>
</template>

<script>
import { refundMode ,saverefundModeStatus } from '../../api/products/overallconfig.js'
    export default {
        data (){
            return {
                animal:'',
                tid: this.$store.getters.tid,
                id: ""
            }
        },
        methods:{
            refundMode () {
                refundMode().then(data => {
                    console.log(data)
                    if(data.errCode==10000){
                        if(data.data==null){
                            this.animal=-1
                            return
                        }
                        this.id=data.data.id
                        this.animal=data.data.status

                    }
                    
                }).catch(err => {         
                    console.log(err)
                })
            },
            change (val) {
                let id=this.id
                let tid=this.tid
                let status=val
                saverefundModeStatus(id,tid,status).then(data => {
                    console.log(data)
                    if(data.errCode==10000){
                        if(data.data==null){
                            this.animal=val
                            this.$Message.success("已设置"+(status==-1?"不支持":"支持")+"支付宝原路退款")
                            return
                        }
                    }
                }).catch(err => {
                    this.$Message.error("设置退款方式失败")         
                    console.log(err)
                })
            }
        },
        mounted () {
            this.refundMode()
        }
    }
</script>
    
<style>

</style>