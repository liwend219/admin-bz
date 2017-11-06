<style scoped>
.identiyaudit-page{
    margin-top: 38px;
}
.identiyaudit-header{
    border-bottom: 1px solid #e9eaec;
    margin-bottom: 20px;
}
.identiyaudit-header p{
    color: #999;
    margin-top: 10px;
    margin-bottom: 15px;
}
.identiyaudit-form{
        margin-bottom: -10px;
}
.identiyaudit-form-item{
    margin-bottom: 10px;
}
.identiyaudit-form-input{
    max-width: 120px;
}
.identiyaudit-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.identiyaudit-page-components{
    display: inline-block;
    vertical-align: middle;
}
.identiyaudit-model img{
    width: 100%;
}
</style>
<template>
    <div class="identiyaudit-page">
        <Row type="flex" align="middle">
            <Col :span="20">            
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="identiyaudit-form">
                        <Form-item label="订单号" class="identiyaudit-form-item">
                            <Input type="text" placeholder="订单号" class="identiyaudit-form-input" v-model="queryData.orderCode"></Input>
                        </Form-item>
                        <Form-item label="车牌号" class="identiyaudit-form-item">
                            <Input type="text" placeholder="车牌号" class="identiyaudit-form-input" v-model="queryData.carNo"></Input>
                        </Form-item>
                        <Form-item label="负责人" class="identiyaudit-form-item">
                            <Input type="text" placeholder="负责人" class="identiyaudit-form-input" v-model="queryData.mobile"></Input>
                        </Form-item>
                        <Form-item label="商业险起保日" :label-width="90" class="identiyaudit-form-item">
                            <Date-picker type="daterange" placement="bottom" placeholder="选择日期" @on-change="insurDatePick"></Date-picker>
                        </Form-item>
                        <Form-item class="identiyaudit-form-item">
                            <Button type="primary" @click="queryList(1)">搜索</Button>
                        </Form-item>
                    </Form>
                </Card>
            </Col>
            <Col :span="4" style="text-align:right;">
                <Button type="primary" @click="openModel">分配任务</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" @on-sort-change="sortable" :data="userList" @on-selection-change="selecteRow"></Table>
        <div class="identiyaudit-pagebar" v-if="userList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="identiyaudit-page-components" show-total></Page>
        </div>
        <Spin fix v-show="loadbox">加载中...</Spin>

         <Modal
            class="identiyaudit-model"
            v-model="modelStatus"
            title="名单分配">
            <Form ref="formInline" inline :label-width="120">
                <Form-item label="任务分配给" class="commissionconfig-form-item">
                    <Select style="width:200px" clearable v-model="allocateConfig.applyUid">
                        <Option :value="item.id" v-for="item, index in applyUserList" :label="item.mobile" :key="index">
                            <span v-text="item.mobile"></span>
                            <span v-text="item.name" style="float:right;color:#ccc"></span>
                        </Option>
                    </Select>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="info" size="large" @click="okStatus">保存</Button>
                <Button size="large" @click="modelStatus = false">取消</Button>
            </div>
        </Modal> 
        <Modal
            class="identiyaudit-model"
            v-model="modelStatus2"
            title="分配历史"
            width=800>
            <Form ref="formInline" inline :label-width="120">
                   <Table stripe :columns="columns1" :data="historyData"></Table>   
            </Form>
            <div slot="footer">
                <Button type="info" size="large" @click="modelStatus2 = false">确定</Button>
            </div>
        </Modal>  
    </div>
</template>
<script>
    import { dateFormat } from "../../libs/filters.js";
    import { getAllocateList, getUserList, saveAllocate, historyAllocate } from "../../api/products/listAllocate.js";

    export default {
        data () {
            return {
                loadbox: true,
                queryData: {
                    orderCode: "",
                    carNo: "",
                    mobile:"",
                    pageNo: 1,
                    pageSize: 20,
                    startDate: "",
                    endDate: "",
                    orderType: "asc",

                },
                columns1:[
                    {
                        title:'订单号',
                        align: "center",
                        key:'orderCode'
                    },
                    {
                        title:'车牌号',
                        align: "center",
                        key:'carNo'
                    },
                    {
                        title:'负责人',
                        align: "center",
                        key:'name',
                        render (h, p) {
                            let name = p.row.name
                            let mobile = p.row.mobile
                            return h('span', name?mobile+'\n（'+name+'）':mobile)
                        }
                    },
                    {
                        title:'分配时间',
                        align: "center",
                        key:'fromCdt'
                    },
                    {
                        title:'支付状态',
                        align: "center",
                        key:'paystatus',
                        render (h, p) {
                            let paystatus = p.row.paystatus
                            if(paystatus==0){
                                return h('span', '未支付')
                            }else if(paystatus==1){
                                return h('span', '已支付')
                            }
                        }
                    }
                ],
                historyData:[
                    
                ],
                columns: [],
                userList: [],
                applyUserList: [],
                totalCount: "",
                allocateConfig: {
                    orderCodes: [],
                    applyUid: "",
                },
                modelStatus: false,
                modelStatus2: false,

            }
        },
        mounted () {
            this.getColumns()
            this.queryList()
            this.getApplyUserList()
        },
        methods: {
            sortable (data) {
                if (data.key == 'forceValidDate') {
                    this.queryData.orderType = data.order;
                    this.queryList(1)
                }
            },
            insurDatePick (date) {
                if (date[0]&&date[1]) {
                    this.queryData.startDate = date[0]
                    this.queryData.endDate = date[1]
                } else {
                    this.queryData.startDate = ""
                    this.queryData.endDate = ""
                }
            },
            getColumns () {
                let _this = this;
                let list = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: "订单号", key: "orderCode", align: "center" },
                    { title: "车牌号", key: "carNo", align: "center" },
                    {
                        title: "最近保险起保日",
                        key: "forceValidDate",
                        align: "center",
                        "sortable": 'custom',
                        render (h, params) {
                            return h('span', dateFormat(params.row.forceValidDate))
                        }
                    },
                    {
                        title: "上次负责人",
                        align: "center",
                        render (h, p) {
                            let disName = p.row.disName
                            let disMobile = p.row.disMobile
                            return h('span', disName?disMobile+'\n（'+disName+'）':disMobile)
                        }
                    },
                    {
                        title: "上次支付状态",
                        align: "center",
                        render (h, p){
                            let paystatus = p.row.paystatus
                            return h('span', paystatus==0?'未支付':'已支付')
                        }
                    },
                    {
                        title: "负责人",
                        align: "center",
                        render (h, p) {
                            let name = p.row.name
                            let mobile = p.row.mobile
                            return h('span', name?mobile+'\n（'+name+'）':mobile)
                        }
                    },
                    {
                        title: "分配时间",
                        align: "center",
                        render (h, p) {
                            return h('span', dateFormat(p.row.disTime))
                        }
                    },
                    {
                        title: "操作",
                        align: "center",
                        render (h, p) {
                            let carNo = p.row.carNo
                            return h('a',
                            {
                                on:{
                                    'click': () => {
                                        historyAllocate(carNo).then(data => {
                                            if (data.errCode === 10000 ) {
                                                _this.historyData=data.data
                                                _this.openModel2()
                                            } else {
                                                _this.$Message.error(data.data)
                                            }
                                        }).catch(err => {
                                            _this.$Message.error("获取分配历史列表失败")
                                            console.log(err)
                                        })
                                    }
                                }
                            },
                             '分配历史')
                        }
                    }
                ]
                this.columns = list
            },
            queryList (page) {
                this.loadbox = true;
                if(page){
                    this.queryData.pageNo = 1
                }
                getAllocateList(this.queryData).then(data => {
                    if (data.errCode === 10000 ) {
                        this.totalCount = data.data.totalCount
                        // this.queryData.pageNo
                        this.userList = data.data.results
                    } else {
                        this.$Message.error(data.data)
                    }
                    this.loadbox = false;
                }).catch(err => {
                    this.$Message.error("待分配订单列表获取失败")
                    console.log(err)
                    this.loadbox = false;
                })
            },
            getApplyUserList () {
                getUserList(this.queryData).then(data => {
                    if (data.errCode === 10000 ) {
                        this.applyUserList = data.data
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("电销员列表获取失败")
                    console.log(err)
                })
            },
            openModel () {
                this.modelStatus = true
            },
            openModel2 () {
                this.modelStatus2 = true
            },
            selecteRow (data) {
                this.allocateConfig.orderCodes=[]
                data.map(item => {
                    this.allocateConfig.orderCodes.push(item.orderCode)
                })
            },
            okStatus () {
                saveAllocate(this.allocateConfig).then(data => {
                    if (data.errCode === 10000) {
                        this.$Message.success("分配成功")
                        this.modelStatus = false
                        this.queryList()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("分配失败")
                    console.log(err)
                })
            },
            changePage (page) {
                this.queryData.pageNo = page;
                this.queryList()
            }
        }
    }
</script>