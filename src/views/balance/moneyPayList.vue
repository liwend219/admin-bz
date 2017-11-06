<template>
    <div style="margin-top: 38px;">
        <!--<Row type="flex" align="middle">
            <Col :span="20">-->
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="moneypaylist-form">
                        <Form-item label="用户ID" class="moneypaylist-form-item">
                            <Input type="text" placeholder="用户ID" class="moneypaylist-form-input" v-model="queryData.userId"></Input>
                        </Form-item>
                        <Form-item label="订单号" class="moneypaylist-form-item">
                            <Input placeholder="订单号" class="moneypaylist-form-input" v-model="queryData.orderCode"></Input>
                        </Form-item>
                        <Form-item label="手机号" class="moneypaylist-form-item">
                            <Input placeholder="手机号" class="moneypaylist-form-input" v-model="queryData.tel"></Input>
                        </Form-item>
                        <Form-item label="车牌号" class="moneypaylist-form-item">
                            <Input placeholder="车牌号" class="moneypaylist-form-input" v-model="queryData.carNo"></Input>
                        </Form-item>
                        <!-- <Form-item label="审核状态" class="moneypaylist-form-item">
                            <Select v-model="queryData.status" clearable class="moneypaylist-form-input" style="width: 120px;">
                                <Option :value="-1">全部</Option>
                                <Option :value="1">信息未完成</Option>
                                <Option :value="2">等待审核</Option>
                                <Option :value="3">审核通过</Option>
                            </Select>
                        </Form-item> -->
                        <Form-item label="支付时间" class="moneypaylist-form-item">
                            <Date-picker type="daterange" placement="bottom" placeholder="选择日期" @on-change="payDatePick"></Date-picker>
                        </Form-item>
                        <Form-item label="商业险起保日" :label-width="90" class="moneypaylist-form-item">
                            <Date-picker type="daterange" placement="bottom" placeholder="选择日期" @on-change="insurDatePick"></Date-picker>
                        </Form-item>
                        <Form-item label="投保城市" class="moneypaylist-form-item">
                            <microCityPicker style="width:120px" @on-change="selectCity"></microCityPicker>
                        </Form-item>
                        <Form-item class="moneypaylist-form-item">
                            <Button type="ghost" @click="queryList(1)">查询</Button>
                        </Form-item>
                    </Form>
                </Card>
                <Button-group style="margin-bottom: 15px;">
                    <Button @click="showUserInfo"><Icon type="document-text"></Icon>　用户档案</Button>
                    <Button @click="showQuoterDetail"><Icon type="social-yen"></Icon>　查看报价</Button>
                    <Button @click="openModel"><Icon type="edit"></Icon></Icon>　补全保单号</Button>
                </Button-group>
            <!--</Col>
            <Col :span="4" style="text-align:right;">
                <Button type="primary" @click="openModel">补全保单号</Button>
            </Col>
        </Row>-->
        <Table stripe :columns="columns" :data="payList" @on-current-change="selecteRow" highlight-row></Table>
        <Spin fix v-show="loadbox">加载中...</Spin>
        <div class="moneypaylist-pagebar" v-if="payList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="moneypaylist-page-components" show-total></Page>
        </div>
        <Modal
            v-model="modelBox"
            title="补全保单号"
            @on-ok="updatePolicyNumber"
            @on-cancel="modelBox = false">
            <Form ref="formInline" inline :label-width="80" class="moneypaylist-form-model">
                <Form-item label="车牌号" class="moneypaylist-form-model-item">
                    <Input type="text" placeholder="车牌号" readonly class="moneypaylist-form-model-input" v-model="paySected.carNo"></Input>
                </Form-item>
                <Form-item label="产品名" class="moneypaylist-form-model-item">
                    <Input placeholder="产品名" readonly class="moneypaylist-form-model-input" v-model="paySected.productName"></Input>
                </Form-item>
                <Form-item label="保险公司" class="moneypaylist-form-model-item">
                    <Input placeholder="保险公司" readonly class="moneypaylist-form-model-input" v-model="paySected.companyName"></Input>
                </Form-item>
                <Form-item label="保单号" class="moneypaylist-form-model-item">
                    <Input placeholder="保单号" class="moneypaylist-form-model-input" v-model="paySected.policyNumber"></Input>
                </Form-item>
            </Form>
        </Modal>
        <Modal
            v-model="modelBox1"
            title="用户档案">
            <h3>基本信息</h3>
            <ul class="modalShowList">
              <li class="modelShowItem">用户姓名：<span v-text="userInfo.base.carOwner"></span></li>
              <li class="modelShowItem">手机号码：<span v-text="userInfo.base.tel"></span></li>
              <li class="modelShowItem">身份证号：<span v-text="userInfo.base.idNo"></span></li>
              <li class="modelShowItem">投保城市：<span v-text="userInfo.base.province+userInfo.base.city"></span></li>
              <li class="modelShowItem">交强起保：<span v-text="userInfo.base.forceValidDate"></span></li>
              <li class="modelShowItem">商业起保：<span v-text="userInfo.base.insureValidDate"></span></li>
            </ul>
            <h3>车辆信息</h3>
            <ul class="modalShowList">
              <li class="modelShowItem">车主姓名：<span v-text="userInfo.base.carOwner"></span></li>
              <li class="modelShowItem">车牌号码：<span v-text="userInfo.base.carNo"></span></li>
              <li class="modelShowItem">品牌型号：<span v-text="userInfo.base.vehicleName"></span></li>
              <li class="modelShowItem">车架号：<span v-text="userInfo.base.vin"></span></li>
              <li class="modelShowItem">发动机号：<span v-text="userInfo.base.engineNo"></span></li>
              <li class="modelShowItem">初登日期：<span v-text="userInfo.base.enrollDate"></span></li>
            </ul>
            <h3>收件地址</h3>
            <ul class="modalShowList">
              <li class="modelShowItem">收件人：<span v-text="userInfo.address.name"></span></li>
              <li class="modelShowItem">收件人手机：<span v-text="userInfo.address.mobile"></span></li>
              <li class="modelShowItem">收件地址：
                <span v-text="userInfo.address.province+'-'+userInfo.address.city+'-'+userInfo.address.area+'-'+userInfo.address.address"></span>
              </li>
            </ul>
            <div slot="footer">
                <Button type="primary" @click="modelBox1=false">确认</Button>
            </div>
        </Modal>
        <Modal
            v-model="modelBox2"
            title="报价详情">
            <h3>本单报价</h3>
            <Table size="small" :columns="quotesColumns" :data="quotesList"></Table>
            <h3>本单收益</h3>
            <Table size="small" :columns="pteYieldColumns" :data="pteYieldList"></Table>
            <h3>小计总和：<span v-text="quotesAmount"></span></h3>
            <div slot="footer">
                <Button type="primary" @click="modelBox2=false">确认</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import { idValid } from "../../libs/validate.js"
    import microCityPicker from "../../components/microCityPicker.vue"
    import { queryPaylist, accomplishPolicy, getUserRecord, getUserAddress, getQuoteDetail } from "../../api/balance/moneyPayList.js"
    import { dateFormat, moneyFormat, moneyFormat2 } from "../../libs/filters.js"
    import { Modal } from "iview"
    import axios from 'axios'

    function statusFormat (status) {
        return {
            "-1": "全部",
            "1": "信息未完成",
            "2": "等待审核",
            "3": "审核通过",
        }[status]
    }
    export default {
        components: {
            microCityPicker
        },
        data () {
            return {
                loadbox: true,
                ddate: "",
                queryData: {
                    userId: "",
                    orderCode: "",
                    czpayNo: "",
                    tel: "",
                    payBeginTime: "",
                    payEndTime: "",
                    beginTime: "",
                    endTime: "",
                    carNo: "",
                    status: "",
                    pcode: "",
                    cityCode: "",
                    signupStatus: "",
                    containjq: "",
                    order: "desc",
                    sort: "payTime",
                    pageNo: 1,
                    pageSize: 20,
                },
                columns: [
                    { title: "用户ID", key: "userId", align: "center", width: 80, fixed: 'left' },
                    { title: "订单号", key: "orderCode", align: "center", width: 180, },
                    { title: "车主", key: "carOwner", align: "center", width: 100, },
                    { title: "手机号", key: "telephone", align: "center", width: 120,  },
                    { title: "车牌号", key: "carNo", align: "center", width: 120,  },
                    // { title: "产品名", key: "productName", align: "center", width: 100,  },
                    { title: "投保城市", key: "cityName", align: "center", width: 120,  },
                    // {
                    //     title: "报名时间",
                    //     key: "cdt",
                    //     align: "center",
                    //     width: 100,
                    //     render: (h, p) => {
                    //         return h("span", dateFormat(p.row.cdt))
                    //     }
                    // },
                    { title: "保险公司", key: "companyName", align: "center", width: 100,  },
                    {
                         title: "有效性",
                         key: "inValid",
                         align:"center",
                         width: 100,
                         render:(h, p) =>{
                             return h("span", p.row.inValid==0?"有效":"无效")
                         }
                    },
                    { title: "交强险", key: "forcePrice", align: "center", width: 100,  },
                    { title: "商业险", key: "bizPrice", align: "center", width: 100,  },
                    {
                        title: "支付时间",
                        key: "payTime",
                        align: "center",
                        width: 100,
                        render: (h, p) => {
                            return h("span", dateFormat(p.row.payTime))
                        }
                    },
                    // {
                    //     title: "审核状态",
                    //     key: "status",
                    //     align: "center",
                    //     width: 100,
                    //     render: (h, p) => {
                    //         return h("span", statusFormat(p.row.status))
                    //     }
                    // },
                    { title: "商业险起保日", key: "insureValidDate", align: "center", width: 100,  },
                    { title: "保单号", key: "policyNumber", align: "center", width: 180,  },
                ],
                payList: [],
                totalCount: "",
                paySected: {
                    orderCode: "",
                    policyNumber: "",
                    companyName: "",
                    productName: "",
                    carNo: "",
                },
                modelBox: false,
                modelBox1: false,
                modelBox2: false,
                userInfo: {
                  base: {},
                  address: {}
                },
                quotesColumns: [
                  { title: "险种", key: "name", align: "center", width: 100},
                  {
                    title: "保额",
                    key: "amount",
                    align: "center",
                    width: 80,
                    render: (h, p) => {
                      return h("span", p.row.amount)
                    }
                  },
                  {
                    title: "报价",
                    key: "quote",
                    align: "center",
                      width: 80,
                    render: (h, p) => {
                      return h("span", moneyFormat2(p.row.quote))
                    }
                  },
                  {
                    title: "是否进口",
                    key: "importFlag",
                    align: "center",
                    width: 90,
                    render: (h, p) => {
                      return h("span", p.row.importFlag==0?"否":"是")
                    }
                  },
                  {
                    title: "是否包含不计免赔",
                    key: "iopFlag",
                    lign: "center",
                    render: (h, p) => {
                      return h("span", p.row.iopFlag==0?"否":"是")
                    }
                  }
                ],
                pteYieldColumns: [
                  {
                    title: "可领取时间",
                    key: "availableDate",
                    align: "center"
                  },
                  {
                    title: "金额",
                    key: "cbAmount",
                    align: "center"
                  },
                  {
                    title: "收益类型",
                    key: "type",
                    align: "center",
                    render: (h, p) => {
                      let text = ""
                      if (p.row.type==5) {
                        text = "客户收益"
                      } else if (p.row.type==6) {
                        text = "电销收益"
                      }
                      return h("span", text)
                    }
                  },
                ],
                quotesList: [],
                pteYieldList: [],
                quotesAmount: "",
            }
        },
        mounted () {
            this.queryList()
        },
        methods: {
            selectCity (arr) {
                console.log(arr)
                this.queryData.pcode = arr[0]||""
                if(this.queryData.pcode==310000||this.queryData.pcode==110000||this.queryData.pcode==120000||this.queryData.pcode==500000){
                    this.queryData.cityCode =""
                }
                
            },
            
            queryList (page) {
                this.loadbox = true;
                if(page){
                    this.queryData.pageNo = 1
                }
                queryPaylist(this.queryData).then(data => {
                    if (data.errCode === 10000) {
                        this.totalCount = data.data.total
                        this.payList = data.data.pageRows
                    } else {
                        this.$Message.error(data.data)
                    }
                    this.loadbox = false;
                }).catch( err => {
                    this.$Message.error("无法获取用户信息")
                    console.log(err)
                    this.loadbox = false;
                })
            },
            changePage (no) {
                this.queryData.pageNo = no
                this.queryList()
            },
            selecteRow (data) {
                for (let key in this.paySected) {
                    this.paySected[key] = data[key];
                }
            },
            payDatePick (date) {
                if (date[0]&&date[1]) {
                    this.queryData.payBeginTime = date[0]
                    this.queryData.payEndTime = date[1]
                } else {
                    this.queryData.payBeginTime = ""
                    this.queryData.payEndTime = ""
                }
            },            
            insurDatePick (date) {
                if (date[0]&&date[1]) {
                    this.queryData.beginTime = date[0]
                    this.queryData.endTime = date[1]
                } else {
                    this.queryData.beginTime = ""
                    this.queryData.endTime = ""
                }
            },
            openModel () {
                if (this.paySected.orderCode == "") {
                    this.$Message.warning("请选择你要编辑的订单")
                } else {
                    this.modelBox = true
                }
            },
            updatePolicyNumber () {
                if (!this.paySected.policyNumber) {
                    this.$Message.warning("请输入保单号")
                    return
                }
                let opt = {
                    orderCode: this.paySected.orderCode,
                    policyNumber: this.paySected.policyNumber
                }
                accomplishPolicy(opt).then(data => {
                    console.log(data)
                    if (data.errCode == 10000) {
                        this.$Message.success("保存成功")
                        this.queryList()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("保存失败")
                    console.log(err)
                })
            },
            showUserInfo () {
              let opt = {"orderCode": this.paySected.orderCode}
              if (opt.orderCode == "") {
                  this.$Message.warning("请选择你要查看的订单")
                  return
              }
              
              axios.all([getUserRecord(opt), getUserAddress(opt)])
              .then(axios.spread((record,address) => {
                if (record.errCode!=10000) {
                  this.$Message.error(record.data)
                  return
                }
                if (address.errCode!=10000) {
                  this.$Message.error(address.data)
                  return
                }
                this.userInfo.base = record.data
                this.userInfo.address = address.data.consignee
                this.modelBox1 = true

                if(this.userInfo.address==null){
                    this.userInfo.address ="";
                }
              })).catch(err => {
                console.log(err)
              })
            },
            showQuoterDetail () {
              if (this.paySected.orderCode == "") {
                  this.$Message.warning("请选择你要查看的订单")
                  return
              }
              getQuoteDetail({orderCode: this.paySected.orderCode}).then(data => {
                if (data.errCode==10000) {
                  this.quotesList = data.data.list
                  this.pteYieldList = data.data.listPreYield
                  this.quotesAmount = data.data.amount
                  this.modelBox2 = true
                } else {
                  this.$Message.error(data.data)
                }
              }).catch(err => {
                console.log(err)
              })
            }
        }
    }
</script>
<style scoped>
.moneypaylist-header{
    margin-left: -15px;
    margin-right: -15px;
    width: 100%;
}
.moneypaylist-header h2{
    margin-bottom: 15px;
}
.moneypaylist-form{
        margin-bottom: -10px;
}
.moneypaylist-form-item{
    margin-bottom: 10px;
}
.moneypaylist-form-input{
    max-width: 120px;
}
.moneypaylist-form-model{
        margin-bottom: -10px;
}
.moneypaylist-form-model-item{
    margin-bottom: 10px;
}
.moneypaylist-form-model-input{
    max-width: 130px;
}
.moneypaylist-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.moneypaylist-page-components{
    display: inline-block;
    vertical-align: middle;
}
.modalShowList{
  margin: 8px 0;
}
.modelShowItem{
  line-height: 20px;
  font-size: 1.2em;
}
</style>
