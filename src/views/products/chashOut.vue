<style scoped>
.cashout-page{
    margin-top: 38px;
}
.cashout-form{
        margin-bottom: -10px;
}
.cashout-form-item{
    margin-bottom: 10px;
}
.cashout-form-input{
    max-width: 120px;
}
.cashout-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.cashout-page-components{
    display: inline-block;
    vertical-align: middle;
}
.cashout-model {
    max-height: 800px;
    overflow-y: scroll;
}
</style>
<template>
    <div class="cashout-page">
        <Row type="flex" align="middle">
            <Col :span="20">            
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="cashout-form">
                        <Form-item label="用户ID" class="cashout-form-item">
                            <Input type="text" placeholder="用户ID" class="cashout-form-input" v-model="queryData.userId"></Input>
                        </Form-item>
                        <Form-item label="流水号" class="cashout-form-item">
                            <Input type="text" placeholder="流水号" class="cashout-form-input" v-model="queryData.serialNo"></Input>
                        </Form-item>
                        <Form-item label="申请人" class="cashout-form-item">
                            <Input type="text" placeholder="申请人" class="cashout-form-input" v-model="queryData.applyerName"></Input>
                        </Form-item>
                        <Form-item label="支付宝" class="cashout-form-item">
                            <Input type="text" placeholder="支付宝" class="cashout-form-input" v-model="queryData.applyerAlipayAccount"></Input>
                        </Form-item>
                        <Form-item label="状态" class="cashout-form-item">
                            <Select style="width:120px" clearable v-model="queryData.status">
                                <Option value="0">处理中</Option>
                                <Option value="1">处理完成</Option>
                                <Option value="-1">处理失败</Option>
                            </Select>
                        </Form-item>
                        <Form-item class="cashout-form-item">
                            <Button type="primary" @click="queryList(1)">搜索</Button>
                        </Form-item>
                    </Form>
                </Card>
            </Col>
            <Col :span="4" style="text-align:right;">
                <Button type="primary" @click="openModel">提现审核</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" :data="cashOutList" @on-selection-change="selecteRow"></Table>
        <div class="cashout-pagebar" v-if="cashOutList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="cashout-page-components" show-total></Page>
        </div>

        <Modal
            class="cashout-model"
            v-model="modelStatus"
            title="提现审核">            
            <p>
                <Icon type="information-circled" color="#ff9900" size="24" style="vertical-align:middle;"></Icon>
                <span style="vertical-align:middle;">审核提交后不可更改，点击空白处可取消审核</span>
            </p>
            <div slot="footer">
                <Button type="info" size="large" @click="okStatus">审核通过</Button>
                <Button size="large" @click="cancelStatus">审核不通过</Button>
            </div>
        </Modal>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { dateFormat,moneyFormat } from "../../libs/filters.js";
    import { cashOutAuditList, cashOutAuditDeal } from "../../api/products/chashOut.js";

    const cashOutAudFormat = (val) => {
        return {
            "0": "处理中",
            "1": "处理完成",
            "-1": "处理失败"
        }[val]
    }
    export default {
        data () {
            return {
                loadbox : true,
                queryData: {
                    applyerAlipayAccount: "",
                    applyerName: "",
                    serialNo: "",
                    userId: "",
                    status: "",
                    pageNo: 1,
                    pageSize: 10,
                    sort: "cdt",
                    order: ""
                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: "left",
                    },
                    { title: "提现ID", key: "id", align: "center",fixed: "left", width: 120 },
                    { title: "用户ID", key: "uid", align: "center", width: 120 },
                    { title: "流水号", key: "serialNo", align: "center", width: 120 },
                    {
                        title: "提现金额",
                        key: "actualAmount",
                        align: "center",
                        width: 100,
                        render (h, params) {
                            return h('span', moneyFormat(params.row.actualAmount))
                        }
                    },
                    {
                        title: "返现金额",
                        key: "amount",
                        align: "center",
                        width: 100,
                        render (h, params) {
                            return h('span', moneyFormat(params.row.amount))
                        }
                    },
                    {
                        title: "钱包余额",
                        key: "purseLeft",
                        align: "center",
                        width: 100,
                        render (h, params) {
                            return h('span', moneyFormat(params.row.purseLeft))
                        }
                    },
                    {
                        title: "申请人",
                        key: "applyerName",
                        align: "center",
                        width: 120
                    },
                    {
                        title: "申请人身份证",
                        key: "applyerIdNo",
                        align: "center",
                        width: 180
                    },
                    {
                        title: "申请人支付宝",
                        key: "applyerAlipayAccount",
                        align: "center",
                        width: 120
                    },
                    {
                        title: "状态",
                        key: "status",
                        align: "center",
                        width: 100,
                        render (h, params) {
                            return h('span', cashOutAudFormat(params.row.status))
                        }
                    },
                    {
                        title: "更新时间",
                        key: "upd",
                        align: "center",
                        width: 120,
                        render (h, params) {
                            return h('span', dateFormat(params.row.upd))
                        }
                    }
                ],
                cashOutList: [],
                totalCount: "",
                cashOutSelected: {
                    purseDetailIds: [],
                    status: "",
                },
                modelStatus: false,
            }
        },
        mounted () {
            this.queryList()
        },
        methods: {
            queryList (page) {
                if(page){
                    this.queryData.pageNo = 1
                }
                this.loadbox = true;
                cashOutAuditList(this.queryData).then(data => {
                    this.loadbox = false;
                    if (data.errCode === 10000) {
                        data.data.pageRows.map(data => {
                            data._disabled = data.status==0 ? false : true
                        })
                        this.totalCount = data.data.total
                        this.cashOutList = data.data.pageRows
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.loadbox = true;
                    this.$Message.error("提现申请列表获取失败")
                    console.log(err)
                })
            },
            changePage (page) {
                this.queryData.pageNo = page;
                this.queryList()
            },
            selecteRow (arr) {
                this.cashOutSelected.purseDetailIds =[]
                arr.map(data => {
                    this.cashOutSelected.purseDetailIds.push(data.id)
                })
            },
            openModel () {
                if (this.cashOutSelected.purseDetailIds.length==0) {
                    this.$Message.warning("至少要选择一条要审核的项目")
                    return
                }
                this.modelStatus = true
            },
            okStatus () {
                this.cashOutSelected.status = "1"
                this.commitStatus()
            },
            cancelStatus () {
                this.cashOutSelected.status = "-1"
                this.commitStatus()
            },
            commitStatus () {
                cashOutAuditDeal(this.cashOutSelected).then(data => {
                    if (data.errCode === 10000) {
                        this.$Message.success("审核成功")
                        this.modelStatus = false
                        this.queryList()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("审核失败")
                    console.log(err)
                })
            }
        }
    }
</script>