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
                        <Form-item label="订单号" class="cashout-form-item">
                            <Input type="text" placeholder="订单号" class="cashout-form-input" v-model="queryData.orderNo"></Input>
                        </Form-item>
                        <Form-item label="状态" class="cashout-form-item">
                            <Select style="width:120px" clearable v-model="queryData.status">
                                <Option value="1">待审核</Option>
                                <Option value="0">已生成</Option>
                                <Option value="2">审核通过</Option>
                                <Option value="3">已领取</Option>
                                <!-- <Option value="-1">已出险</Option> -->
                                <Option value="-2">审核不通过</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="预计领取时间" :label-width="90" class="cashout-form-item">
                            <Date-picker type="daterange" placement="bottom" placeholder="选择日期" @on-change="datePick"></Date-picker>
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
        <Table stripe :columns="columns" :data="preYieldlist" @on-selection-change="selecteRow"></Table>
        <div class="cashout-pagebar" v-if="preYieldlist.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="cashout-page-components" show-total></Page>
        </div>
        <Spin fix v-show="loadbox">加载中...</Spin>

        <Modal
            class="cashout-model"
            v-model="modelStatus"
            title="预收益审核审核">            
            <p>
                <Icon type="information-circled" color="#ff9900" size="24" style="vertical-align:middle;"></Icon>
                <span style="vertical-align:middle;">审核提交后不可更改，点击空白处可取消审核</span>
            </p>
            <div slot="footer">
                <Button type="info" size="large" @click="okStatus">审核通过</Button>
                <Button size="large" @click="cancelStatus">审核不通过</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import { dateFormat } from "../../libs/filters.js";
    import { queryPreYieldlist, updatePreYield } from "../../api/balance/moneyPreYield.js";
    
    const statusFormat = (status) => {
        return {
            "1": "待审核",
            "0": "已生成",
            "2": "审核通过",
            "3": "已领取",
            // "-1": "已出险",
            "-2": "审核不通过",
        }[status]
    }
    export default {
        data () {
            return {
                loadbox: true,
                queryData: {
                    availableDate: "",
                    availableEndDate: "",
                    orderNo: "",
                    status: "",
                    pageNo: 1,
                    pageSize: 20,
                    userId: "",
                    orderNo:"",
                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: "left"
                    },
                    { title: "用户ID", key: "userId", align: "center", width: 80, fixed: "left" },
                    { title: "订单号", key: "orderNo", align: "center", width: 220 },
                    {
                        title: "产品名称",
                        key: "productName",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "预计领取时间",
                        key: "availableDate",
                        align: "center",
                        width: 140
                    },
                    {
                        title: "领取时间",
                        key: "obtainDate",
                        align: "center",
                        width: 140,
                        render: (h, p) => {
                            return h("span", dateFormat(p.row.obtainDate))
                        }
                    },
                    {
                        title: "奖励金额",
                        key: "cbAmount",
                        align: "center",
                        width: 100,
                    },
                    {
                        title: "商业险金额",
                        key: "tbAmount",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "交强险金额",
                        key: "jqAmount",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "奖励类型",
                        key: "type",
                        align: "center",
                        width: 120,
                        render: (h, p) => {
                            let type 
                            if (p.row.type==5) {
                                type = "电销客户收益"
                            } else if (p.row.type==6) {
                                type = "电销自提"
                            }
                            return h("span", type)
                        }
                    },
                    {
                        title: "参考金额",
                        key: "rate",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "状态",
                        key: "status",
                        align: "center",
                        width: 120,
                        render (h, params) {
                            return h('span', statusFormat(params.row.status))
                        }
                    },
                    {
                        title: "操作人",
                        key: "operator",
                        align: "center",
                        width: 140
                    }
                ],
                preYieldlist: [],
                totalCount: "",
                preYieldSelected: {
                    detailIds: [],
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
                this.loadbox = true;
                if(page){
                    this.queryData.pageNo = 1
                }
                queryPreYieldlist(this.queryData).then(data => {
                    if (data.errCode === 10000) {
                        data.data.pageRows.map(data => {
                            data._disabled = data.status== 1 ? false : true
                        })
                        this.totalCount = data.data.total
                        this.preYieldlist = data.data.pageRows
                    } else {
                        this.$Message.error(data.data)
                    }
                    this.loadbox = false;
                }).catch(err => {
                    this.$Message.error("预收益列表获取失败")
                    console.log(err)
                    this.loadbox = true;
                })
            },
            changePage (page) {
                this.queryData.pageNo = page;
                this.queryList()
            },
            datePick (date) {
                if (date[0]&&date[1]) {
                    this.queryData.availableDate = date[0]
                    this.queryData.availableEndDate = date[1]
                } else {
                    this.queryData.availableDate = ""
                    this.queryData.availableEndDate = ""
                }
                
            },
            selecteRow (arr) {
                this.preYieldSelected.detailIds =[]
                arr.map(data => {
                    this.preYieldSelected.detailIds.push(data.id)
                })
            },
            openModel () {
                if (this.preYieldSelected.detailIds.length==0) {
                    this.$Message.warning("至少要选择一条要审核的项目")
                    return
                }
                this.modelStatus = true
            },
            okStatus () {
                this.preYieldSelected.status = "2"
                this.commitStatus()
                this.modelStatus = false
            },
            cancelStatus () {
                this.preYieldSelected.status = "-2"
                this.commitStatus()
                this.modelStatus = false
            },
            commitStatus () {
                updatePreYield(this.preYieldSelected).then(data => {
                    if (data.errCode === 10000) {
                        this.$Message.success("审核成功")
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