<style>
.commissionreward-header{
    border-bottom: 1px solid #e9eaec;
    margin-bottom: 20px;
    
}
.commissionreward-header-inline {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e9eaec;
    overflow: hidden; 
}

.commissionreward-header p{
    color: #999;
    margin-top: 10px;
    margin-bottom: 15px;
}
</style>
<template>
    <div>
        <div v-show="rewardCofig.status==-1">
            <div class="commissionreward-header">
                <h2>佣金分配</h2>
                <p>你尚未启用佣金分配</p>
            </div>
            <div>
                <Button size="large" type="primary" @click="updateRewardCofig(1)">立即启用</Button>
            </div>
        </div>
        <div v-show="rewardCofig.status!=-1">
             <div class="commissionreward-header-inline">
                <Button style="float:right;margin-top:6px;margin-left:16px" size="large" type="ghost" @click="updateRewardCofig(-1)">立即停用</Button>
                <h2 style="float:right">佣金分配</h2>
                <!-- <p>你已经启用佣金分配</p>  -->
            </div>
            <br/>
            <br/>
            <Radio-group :value="rewardCofig.status"  @on-change="updateRewardCofig">
                <Radio label="1">
                    <span>分配给公司和客户</span>
                </Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio label="2">
                    <span>分配给电销和客户</span>
                </Radio>
            </Radio-group>
            <!-- <div style="margin-top:120px">
                <Button type="primary">保存</Button>
            </div> -->
        </div>
    </div>
</template>
<script>
    import {rewardStatus, saveRewardStatus} from "../../api/products/commissionReward.js"
    export default {
        data () {
            return {
                rewardCofig: {
                    id: "",
                    tid: this.$store.getters.tid,
                    status: "",
                },
            }
        },
        mounted () {
            this.getRewardCofig()
        },
        methods: {
            getRewardCofig () {
                rewardStatus().then(data => {
                    if(!data.data){
                        this.rewardCofig.status = -1
                        return
                    }
                    if (data.errCode == 10000) {
                        console.log("ok")
                        console.log(this.rewardCofig.status)
                        this.rewardCofig.id = data.data.id
                        this.rewardCofig.tid = data.data.tid
                        this.rewardCofig.status = data.data.status
                    } else {
                        this.$Message.error(data.data)
                    }                    
                }).catch(err => {
                    this.$Message.error("无法获取佣金配置信息")                
                    console.log(err)
                })
            },
            updateRewardCofig (status) {
                this.rewardCofig.status = status
                saveRewardStatus(this.rewardCofig).then(data => {
                    if (data.errCode == 10000) {
                        this.$Message.success("佣金配置保存成功")
                        this.getRewardCofig()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("佣金配置保存失败")
                    console.log(err)
                })
            }
        }
    }
</script>