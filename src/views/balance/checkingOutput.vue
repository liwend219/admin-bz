<style scoped>
.checkingoutput-card {
    margin-bottom: 15px;
    margin-top: 38px;
}
.checkingoutput-form {
    margin-bottom: -10px;
}
.checkingoutput-form-item {
    margin-bottom: 10px;
}
.checkingoutput-form-input {
    max-width: 120px;
}
.checkingoutput-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.checkingoutput-page-components{
    display: inline-block;
    vertical-align: middle;
}
</style>
<template>
    <div>
        <Card class="checkingoutput-card">
            <Form ref="formInline" inline :label-width="70" class="checkingoutput-form">
                <Form-item label="用户ID" class="checkingoutput-form-item">
                    <Input type="text" placeholder="用户ID" class="checkingoutput-form-input" v-model="queryData.toTid"></Input>
                </Form-item>
                <Form-item label="车牌号码" class="checkingoutput-form-item">
                    <Input placeholder="车牌号码" class="checkingoutput-form-input" v-model="queryData.carNo"></Input>
                </Form-item>
                <Form-item label="保险公司" class="checkingoutput-form-item">
                    <Input type="text" placeholder="保险公司" class="checkingoutput-form-input" v-model="queryData.policyId"></Input>
                </Form-item>
                <Form-item label="状态" class="checkingoutput-form-item">
                    <Select v-model="queryData.status" clearable class="checkingoutput-form-input">
                        <Option :value="0">新生成</Option>
                        <Option :value="1">待结算</Option>
                        <Option :value="2">已结算</Option>
                        <Option :value="3">已完成</Option>
                        <Option :value="-1">已取消</Option>
                    </Select>
                </Form-item>
                <Form-item label="承保日期" class="checkingoutput-form-item">
                    <Date-picker type="daterange" @on-change="dateChange" placement="bottom" placeholder="选择日期" ></Date-picker>
                </Form-item>
                <Form-item class="checkingoutput-form-item">
                    <Button type="ghost" @click="queryList(1)">查询</Button>
                </Form-item>
            </Form>
        </Card>
        <Table stripe :columns="columns" :data="balanceList"></Table>
        <div class="checkingoutput-pagebar" v-if="balanceList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="checkingoutput-page-components" show-total></Page>
        </div>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { queryBalanceList } from "../../api/balance/checkingEntry.js";
    import { dateFormat, moneyFormat } from "../../libs/filters.js";

    function statusFormat (status) {
        return{
            "0": "新生成",
            "1": "待结算",
            "2": "已结算",
            "3": "已完成",
            "-1": "已取消",
        }[status]
    }
    export default {
        data () {
            return {
                loadbox: true,
                queryData: {
                    type: 2,
                    toTid: "",
                    carNo: "",
                    policyId: "",
                    status: "",
                    insuredStartTime: "",
                    insuredEndDate: "",
                    pageNo: 1,
                    pageSize: 20
                },
                columns: [
                    { title: "保单号", key: "proposalNo", align: "center" },
                    { title: "承保日期", key: "orderTime", align: "center" },
                    { title: "保险公司", key: "policyName", align: "center",},
                    { title: "订单来源", key: "toTenantCode", align: "center" },
                    { title: "产品名称", key: "productName", align: "center" },
                    {
                        title: "车牌号",
                        key: "carNo",
                        align: "center",
                    },
                    {
                        title: "交强",
                        key: "jqAmount",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.jqAmount))
                        }
                    },
                    {
                        title: "车船",
                        key: "ccAmount",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.ccAmount))
                        }
                    },
                    {
                        title: "商业",
                        key: "syAmount",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.syAmount))
                        }
                    },
                    // {
                    //     title: "保费合计",
                    //     key: "mercreatetime",
                    //     align: "center",
                    //     render (h, params) {
                    //         let row = params.row
                    //         return h('span', row.ccAmount+row.jqAmount+row.syAmount)
                    //     }
                    // },
                    // {
                    //     title: "起保日期",
                    //     key: "insurancrStartDate",
                    //     align: "center",
                    //     render (h, params) {
                    //         return h('span', dateFormat(params.row.insurancrStartDate))
                    //     }
                    // },
                    // {
                    //     title: "终保日期",
                    //     key: "insuranceEndDate",
                    //     align: "center",
                    //     render (h, params) {
                    //         return h('span', dateFormat(params.row.insuranceEndDate))
                    //     }
                    // },
                    {
                        title: "商家结算",
                        key: "balanceAmount",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.balanceAmount))
                        }
                    },
                    {
                        title: "状态",
                        key: "status",
                        align: "center",
                        render (h, params) {
                            return h('span', statusFormat(params.row.status))
                        }
                    },
                    {
                        title: "备注",
                        key: "note",
                        align: "center",
                        ellipsis: true
                    },
                ],
                balanceList: [],
                totalCount: 0
            }
        },
        mounted () {
            this.queryList()
        },
        methods: {
            queryList (page) {
                this.loadbox = true;
                if(page){
                    this.queryData.pageNo = 1
                }
                queryBalanceList(this.queryData).then(data => {
                    if (data.errCode == 10000) {
                        this.balanceList = data.data.results
                        this.totalCount = data.data.totalCount
                    } else {
                        this.$Message.error(data.data)
                    }
                    this.loadbox = false;
                }).catch(err => {
                    this.$Message.error("对账列表获取失败")
                    console.log(err)
                    this.loadbox = true;
                })
            },
            dateChange (date) {
                if (date[0]&&date[1]) {
                    this.queryData.insuredStartTime = date[0]
                    this.queryData.insuredEndDate = date[1]
                } else {
                    this.queryData.insuredStartTime = ""
                    this.queryData.insuredEndDate = ""
                }
            },
            changePage (page) {
                this.queryData.pageNo = page
                this.queryList()
            }
        }
    }
</script>
