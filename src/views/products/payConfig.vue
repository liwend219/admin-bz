<style>
.payconfig-header{
    border-bottom: 1px solid #e9eaec;
    margin-bottom: 20px;
}
.payconfig-header p{
    color: #999;
    margin-top: 10px;
    margin-bottom: 15px;
}
.payconfig-content p{
    color: #2d8cf0
}
</style>
<template>
    <div>
        <div class="payconfig-header">
            <h2>直付险企/代收代付</h2>
            <p>根据租户需求 配置不同的支付方式</p>
        </div>
        <div v-if="status">
            <div class="payconfig-content">
                <p>请致电联系保挣IT完成代收代付配置</p>
            </div>
        </div>
        <div v-if="!status">
            <ul style="margin-top:30px">
                <li v-for="list,index in columns" style="height:50px;" :key="index">
                    <div style="display:inline-block;margin-right:100px">
                        {{list.policyName}}
                    </div>
                    <div style="display:inline-block;margin-right:100px">
                        <Radio-group @on-change="setPayType" :value='list.payType+"-"+index+"-"+list.policyName'>
                            <Radio :label="0+'-'+index+'-'+list.policyName" style="margin-right:100px">直付</Radio>
                            <Radio :label="1+'-'+index+'-'+list.policyName">代收代付</Radio>
                        </Radio-group> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { payConfigStatus ,setConfigStatus } from '../../api/products/payconfig.js' 
    export default {
        data () {
            return {
                status:false,
                columns:[],
                payMode:{
                    
                }
            }
        },
        mounted () {
            this.getPayConfig ()
        },
        methods: {
            getPayConfig () {
                payConfigStatus().then(data => {
                    console.log("ok1")
                    this.columns=data.data;  
                    console.log(this.columns)
                }).catch(err => {          
                    console.log(err)
                })
            },
            setPayType (val) {
                let payType = val.slice(0,1)
                let index = val.slice(2,3)
                let policyName = val.slice(4)
                console.log(policyName)
                let policyId = this.columns[index].policyId
                setConfigStatus(policyId,payType).then(data => {
                    this.columns[index].payType = payType
                    this.$Message.success(policyName+'设置'+(payType==0?"直付":"代收代付")+'成功')
                }).catch(err => {
                    this.$Message.error("设置支付方式失败")  
                    console.log(err)
                })
            },
        }
    }
</script>