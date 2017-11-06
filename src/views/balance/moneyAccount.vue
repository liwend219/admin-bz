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
                        <Form-item label="订单号" class="cashout-form-item">
                            <Input type="text" placeholder="订单号" class="cashout-form-input" v-model="queryData.orderCode"></Input>
                        </Form-item>
                        <Form-item label="支付类型" class="cashout-form-item">
                            <Select style="width:120px" clearable v-model="queryData.payType">
                                <Option value="0">支付宝打款</Option>
                                <Option value="4">微信退款</Option>
                                <Option value="6">支付宝退款</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="状态" class="cashout-form-item">
                            <Select style="width:120px" clearable v-model="queryData.status">
                                <Option :value="0">已取消</Option>
                                <Option :value="1">待支付</Option>
                                <Option :value="2">支付宝未回调</Option>
                                <Option :value="3">已支付</Option>
                                <Option :value="4">支付失败</Option>
                            </Select>
                        </Form-item>
                        <Form-item class="cashout-form-item">
                            <Button type="primary" @click="queryList(1)">搜索</Button>
                        </Form-item>
                    </Form>
                </Card>
            </Col>
            <Col :span="4" style="text-align:right;">
                <Button type="primary" @click="openModel">财务审核</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" :data="preYieldlist" @on-selection-change="selecteRow"></Table>
        <div class="cashout-pagebar" v-if="preYieldlist.length>0">
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
                <Button type="info" size="large" @click="okStatus">打款</Button>
                <Button size="large" @click="cancelStatus">退款</Button>
            </div>
        </Modal>
        <div v-show="false" v-html="accountCallback" id="accountCallback"></div>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { dateFormat } from "../../libs/filters.js";
    import { queryAccountlist, accountPay, accountRefund } from "../../api/balance/moneyAccount.js";
    import { Modal } from "iview"
    import $ from "jquery"

    const statusFormat = (status) => {
        return {
            "0": "已取消",
            "1": "待支付",
            "2": "支付宝未回调",
            "3": "已支付",
            "4": "支付失败",
        }[status]
    }
    export default {
        data () {
            return {
                loadbox:true,
                queryData: {
                    orderCode: "",
                    payType: "",
                    status: "",
                    pageNo: 1,
                    pageSize: 20,
                },
                accountCallback: "",
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    { title: "出账ID", key: "id", align: "center", width: 80, fixed: 'left' },
                    { title: "申请人身份证", key: "applyIDCard", align: "center", width: 140 },
                    {
                        title: "提现订单号",
                        key: "orderCode",
                        align: "center",
                        width: 220
                    },
                    {
                        title: "支付宝姓名",
                        key: "alipayName",
                        align: "center",
                        width: 120
                    },
                    {
                        title: "支付宝账号",
                        key: "alipayAccount",
                        align: "center",
                        width: 140
                    },
                    {
                        title: "支付宝流水号",
                        key: "thirdPartCode",
                        align: "center",
                        width: 140
                    },
                    {
                        title: "账务流水号",
                        key: "payOrderCode",
                        align: "center",
                        width: 160
                    },
                    {
                        title: "金额",
                        key: "money",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "原因",
                        key: "reason",
                        align: "center",
                        width: 100,
                        render: (h, p) => {
                            return h("a", {
                                on:{
                                    click: () => {
                                        Modal.info({
                                            title: "原因",
                                            content: p.row.reason
                                        })
                                    }
                                }
                            },"查看原因")
                        }
                    },
                    {
                        title: "处理人",
                        key: "dealer",
                        align: "center",
                        width: 100
                    },
                    {
                        title: "订单状态",
                        key: "status",
                        align: "center",
                        width: 100,
                        render (h, params) {
                            return h('span', statusFormat(params.row.status))
                        }
                    },
                    {
                        title: "订单完成时间",
                        key: "modifyTime",
                        align: "center",
                        width: 120
                    }
                ],
                preYieldlist: [],
                totalCount: "",
                accountSelected: {
                    idList: [],
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
                queryAccountlist(this.queryData).then(data => {
                    if (data.errCode === 10000) {
                        this.loadbox = false;
                        data.data.items.map(data => {
                            // data._disabled = data.status== 1 ? false : true
                        })
                        this.totalCount = data.data.totalCount
                        this.preYieldlist = data.data.items
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.loadbox = true;
                    this.$Message.error("预收益列表获取失败")
                    console.log(err)
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
                this.accountSelected.idList =[]
                arr.map(data => {
                    this.accountSelected.idList.push(data.id)
                })
            },
            openModel () {
                if (this.accountSelected.idList.length==0) {
                    this.$Message.warning("至少要选择一条要审核的项目")
                    return
                }
                this.modelStatus = true
            },
            okStatus () {
                this.modelStatus = false
                accountPay(this.accountSelected).then(data => {
                    if(data.data.fail!=null){
                        this.$Message.error(data.data.fail)
                    } else {
                        var failMap = data.data['failMap'];
                        var html = data.data['alipayHtml'];
                        for(var key in failMap){
                            if(failMap[key]!=null && failMap[key]!=""){
                                this.$Notice.error({
                                    title: '操作失败',
                                    desc: "订单号为"+key+"的订单操作失败,原因"+failMap[key]
                                });
                            }
                        }
                        if(data.data['alipayHtml']!=null && data.data['alipayHtml']!=''){
                            $('#accountCallback').append(data.data['alipayHtml'])
                        }
                    }
                }).catch(err => {
                    this.$Message.error("打款失败")
                    console.log(err)
                })
            },
            cancelStatus () {
                this.modelStatus = false
                accountRefund(this.accountSelected).then(data => {
                    if(data.data.fail!=null){
                      this.$Message.error(data.data.fail)
                    } else {
                        var failMap = data.data['failMap'];
                        var html = data.data['alipayHtml'];
                        var i = 0;
                        for(var key in failMap){
                            if(failMap[key]!=null && failMap[key]!=""){
                            	 i++;
                                this.$Notice.error({
                                    title: '操作失败',
                                    desc: "订单号为"+key+"的订单操作失败,原因"+failMap[key]
                                });
                            }
                        }
                        if(i == 0){
                            this.$Notice.success({
                                title: "操作成功"
                            })
                        }
                        if(data.data['alipayHtml']!=null && data.data['alipayHtml']!=''){
                            $('#accountCallback').append(data.data['alipayHtml'])
                        }
                    }
                }).catch(err => {
                    this.$Message.error("退款失败")
                    console.log(err)
                })
            }
        }
    }
</script>
