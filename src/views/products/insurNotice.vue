<style scoped>
.insurnotice-header{
    border-bottom: 1px solid #e9eaec;
    margin-bottom: 20px;
}
.insurnotice-header p{
    color: #999;
    margin-top: 10px;
    margin-bottom: 15px;
}
.insurnotice-header-inline{
    height:48px;
    line-height: 48px;
    overflow: hiden;
}
.insurnotice-header-inline h2{
    float: right;
}
.insurnotice-header-inline .insurnotice-header-btn{
    margin-left: 16px;
    margin-top: 6px;
    float: right;
}
</style>
<template>
    <div>
        <div v-if="noticeCofig.status!=1">
            <div class="insurnotice-header">
                <h2>投保通知</h2>
                <p></p>
            </div>
            <div>
                <Button size="large" type="primary" @click="updateNoticeCofig(1)">立即启用</Button>
            </div>
        </div>
        <div class="insurnotice-header-inline" v-if="noticeCofig.status==1">
            <Button class="insurnotice-header-btn" size="large" type="ghost" @click="updateNoticeCofig(-1)">停用</Button>
            <h2>投保通知</h2>
        </div>
        <div v-if="noticeCofig.status==1">
            <Table :columns="columns" :data="noticeList"></Table>
        </div>
    </div>
</template>
<script>
    import { insurNoticeStatus, saveInsurNoticeStatus, insurSuccess, insurFail } from "../../api/products/insurNotice.js"
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
                        name: "投保通知",
                        dis: "投保成功短信",
                        type: "通知",
                        oprate: "查看",
                    },
                    {
                        name: "投保通知",
                        dis: "投保失败短信",
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
                insurNoticeStatus().then(data => {
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
                    this.$Message.error("无法获取投保通知信息")                
                    console.log(err)
                })
            },
            updateNoticeCofig (status) {
                this.noticeCofig.status = status
                saveInsurNoticeStatus(this.noticeCofig).then(data => {
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
            doInsurSuccess()
        } else if (index==1) {
            doInsurFail()
        }
    }
    // 投保成功通知
    const doInsurSuccess = () => {
        insurSuccess().then(data => {
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
    // 投保失败通知
    const doInsurFail = () => {
        insurFail().then(data => {
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