<style scoped>
.cashoutnotice-header{
    border-bottom: 1px solid #e9eaec;
    margin-bottom: 20px;
}
.cashoutnotice-header p{
    color: #999;
    margin-top: 10px;
    margin-bottom: 15px;
}
.cashoutnotice-header-inline{
    height:48px;
    line-height: 48px;
    overflow: hiden;
}
.cashoutnotice-header-inline h2{
    float: right;
}
.cashoutnotice-header-inline .cashoutnotice-header-btn{
    margin-left: 16px;
    margin-top: 6px;
    float: right;
}
</style>
<template>
    <div>
        <div v-if="noticeCofig.status!=1">
            <div class="cashoutnotice-header">
                <h2>提现通知</h2>
                <p></p>
            </div>
            <div>
                <Button size="large" type="primary" @click="updateNoticeCofig(1)">立即启用</Button>
            </div>
        </div>
        <div class="cashoutnotice-header-inline" v-if="noticeCofig.status==1">
            <Button class="cashoutnotice-header-btn" size="large" type="ghost" @click="updateNoticeCofig(-1)">停用</Button>
            <h2>提现通知</h2>
        </div>
        <div v-if="noticeCofig.status==1">
            <Table :columns="columns" :data="noticeList"></Table>
        </div>
    </div>
</template>
<script>
    import { cashOutNoticeStatus, saveCashOutNoticeStatus, cashOutSuccess, cashOutFail } from "../../api/products/cashOutNotice.js"
    import { Modal } from "iview"

    export default {
        data () {
            return {
                noticeCofig: {
                    id: "",
                    tid: this.$store.getters.tid,
                    status: ""
                },
                columns: [
                    { title: "名称", key: "name", align: "center" },
                    { title: "描述", key: "dis", align: "center" },
                    { title: "类型", key: "type", align: "center" },
                    {
                        title: "操作",
                        key: "oprate",
                        align: "center",
                        render (h, params) {
                            return h('a', {
                                on: {
                                    click: () => {
                                        showTemplate(params.index)
                                    }
                                }
                            }, "查看")
                        },
                        show () {
                            console.log("dd")
                        }
                    }
                ],
                noticeList: [
                    {
                        name: "提现通知",
                        dis: "提现成功短信",
                        type: "通知",
                        oprate: "查看",
                    },
                    {
                        name: "提现通知",
                        dis: "提现失败短信",
                        type: "通知",
                        oprate: "查看",
                    }
                ],
            }
        },
        mounted () {
            this.getNoticeCofig()
        },
        methods: {
            getNoticeCofig () {
                cashOutNoticeStatus().then(data => {
                    if(!data.data){
                        this.noticeCofig.status = -1
                        return
                    }
                    if (data.errCode == 10000) {
                        this.noticeCofig.id = data.data.id
                        this.noticeCofig.tid = data.data.tid
                        this.noticeCofig.status = data.data.status
                    } else {
                        this.$Message.error(data.data)
                    }                    
                }).catch(err => {
                    this.$Message.error("无法获取提现通知信息")                
                    console.log(err)
                })
            },
            updateNoticeCofig (status) {
                this.noticeCofig.status = status
                saveCashOutNoticeStatus(this.noticeCofig).then(data => {
                    if (data.errCode == 10000) {
                        this.$Message.success("通知配置保存成功")
                        this.getNoticeCofig()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("通知配置保存失败")
                    console.log(err)
                })
            }
        }
    }

    const showTemplate = (index) => {
        if (index==0) {
            doCashOutSuccess()
        } else if (index==1) {
            doCashOutFail()
        }
    }
    // 提现成功通知
    const doCashOutSuccess = () => {
        cashOutSuccess().then(data => {
            if (data.errCode == 10000) {
                Modal.info({
                    title: "通知模板",
                    content: data.data.template
                })
            } else {
                this.$Message.error(data.data)
            }
        }).catch(err => {
            this.$Message.error("通知模板获取失败")
            console.log(err)
        })
    }
    // 提现失败通知
    const doCashOutFail = () => {
        cashOutFail().then(data => {
            if (data.errCode == 10000) {
                Modal.info({
                    title: "通知模板",
                    content: data.data.template
                })
            } else {
                this.$Message.error(data.data)
            }
        }).catch(err => {
            this.$Message.error("通知模板获取失败")
            console.log(err)
        })
    }
</script>