<style scoped>
.identiyaudit-page{
    margin-top: 18px;
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
.identiyaudit-header-inline{
    height:48px;
    line-height: 48px;
    overflow: hiden;
}
.identiyaudit-header-inline h2{
    float: right;
}
.identiyaudit-header-inline .identiyaudit-header-btn{
    margin-left: 16px;
    margin-top: 6px;
    float: right;
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
.form-label {
    line-height: 36px;
    color: #333;
    display: inline-block;
    font-size: 16px;
    /* text-align:center; */
    width: 100%;
}
.form-input {
    height: 32px;
    appearance: none;
    border: 1px solid #e6e6e6;
    width: 170px;
    padding-left: 8px;
    padding-right: 8px;
    transition: 600ms;
    font-size: 14px;
}
.form-input:hover {
    border-color: rgba(33,150,243,.8);
}
.form-input:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 3px 2px rgba(33,150,243,.2);
}
</style>
<template>
    <div>
        <div v-if="identityAuditCofig.status!=1">
            <div class="identiyaudit-header">
                <h2>身份审核</h2>
                <p>你尚未启用身份审核</p>
            </div>
            <div>
                <Button size="large" type="primary" @click="updateIdentityAuditCofig(1)">立即启用</Button>
            </div>
        </div>
        <div class="identiyaudit-header-inline" v-if="identityAuditCofig.status==1">
            <Button class="identiyaudit-header-btn" size="large" type="ghost" @click="updateIdentityAuditCofig(-1)">停用</Button>
            <h2>身份审核</h2>
        </div>
        <div class="identiyaudit-page" v-if="identityAuditCofig.status==1">
            <Row type="flex" align="middle">
                <Col :span="20">
                    <Card style="margin-bottom: 15px;">
                        <Form ref="formInline" inline :label-width="70" class="identiyaudit-form">
                            <Form-item label="用户ID" class="identiyaudit-form-item">
                                <Input type="text" placeholder="用户ID" class="identiyaudit-form-input" v-model="queryData.id"></Input>
                            </Form-item>
                            <Form-item label="状态" class="identiyaudit-form-item">
                                <Select style="width:120px" clearable v-model="queryData.idCardStatus">
                                    <Option value="-1">审核失败</Option>
                                    <Option value="0">未上传</Option>
                                    <Option value="1">待审核</Option>
                                    <Option value="2">审核通过</Option>
                                </Select>
                            </Form-item>
                            <Form-item class="identiyaudit-form-item">
                                <Button type="primary" @click="queryList(1)">搜索</Button>
                            </Form-item>
                        </Form>
                    </Card>
                </Col>
                <Col :span="4" style="text-align:right;">
                    <Button type="primary" @click="openModel">身份审核</Button>
                </Col>
            </Row>
            <Table stripe :columns="columns" :data="userList" @on-current-change="selecteRow" highlight-row></Table>
            <div class="identiyaudit-pagebar" v-if="userList.length>0">
                <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="identiyaudit-page-components" show-total></Page>
            </div>
        </div>

        <Modal
            class="identiyaudit-model"
            v-model="modelStatus"
            title="身份审核">
            <div v-if="isShow" style="text-align:center">
                <label class="form-label">姓　　名：{{userSelected.name}}</label>
                <label class="form-label">身份证号：{{userSelected.idNo}}</label>
            </div>
            <br/>
            <img :src="userSelected.idCardBack" alt="">
            <img :src="userSelected.idCardFront" alt="">
            <div slot="footer" v-if="isShow">
                <Button type="info" size="large" @click="okStatus">审核通过</Button>
                <Button size="large" @click="cancelStatus">审核不通过</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import { dateFormat, moneyFormat } from "../../libs/filters.js";
    import { inentityAuditStatus, saveInentityAuditStatus, inentityAuditList, inentityAudit } from "../../api/products/identityAudit.js";

    const auditStatusFormat = (val) => {
        return {
            "-1": "审核失败",
            "0": "未上传",
            "1": "待审核",
            "2": "审核通过"
        }[val]
    }

    export default {
        data () {
            return {
                isShow:false,
                identityAuditCofig: {
                    id: "",
                    tid: "",
                    status: ""
                },
                queryData: {
                    idCardStatus: "",
                    order: "",
                    pageNo: 1,
                    pageSize: 10,
                    sort: "cdt",
                    userId: "",
                },
                columns: [
                    { title: "钱包ID", key: "id", align: "center" },
                    { title: "用户ID", key: "uid", align: "center" },
                    {
                        title: "钱包余额",
                        key:"purseLeft",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.purseLeft))
                        }
                        
                    },
                    {
                        title: "总收益",
                        key: "totalBalance",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.totalBalance))
                        }
                    },
                    {
                        title: "总提现",
                        key: "totalCashBack",
                        align: "center",
                        render (h, params) {
                            return h('span', moneyFormat(params.row.totalCashBack))
                        }
                    },
                    {
                        title: "身份信息审核状态",
                        key: "idCardStatus",
                        align: "center",
                        render (h, params) {
                            return h('span', auditStatusFormat(params.row.idCardStatus))
                        }
                    },
                    {
                        title: "更新时间",
                        key: "upd",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.upd))
                        }
                    },
                    {
                        title: "创建时间",
                        key: "cdt",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.cdt))
                        }
                    },
                ],
                userList: [],
                totalCount: "",
                userSelected: {
                    name:"",
                    idNo:"",
                    purseUserId: "",
                    status: "",
                    idCardBack: "",
                    idCardFront: ""
                },
                modelStatus: false,
            }
        },
        mounted () {
            this.getIdentityAuditCofig()
        },
        methods: {
            getIdentityAuditCofig () {
                inentityAuditStatus().then(data => {
                    if ( data.errCode === 10000 ) {
                        if (!data.data) {
                            return
                        }
                        this.identityAuditCofig.id = data.data.id
                        this.identityAuditCofig.tid = data.data.tid
                        this.identityAuditCofig.status = data.data.status
                        if (data.data.status == 1) {
                            this.queryList()
                        }
                    } else {
                        this.identityAuditCofig.status = -1
                        this.$Message.error( data.data )
                    }
                }).catch( err => {
                    this.$Message.error("无法获取用户信息")
                    console.log(err)
                })
            },
            updateIdentityAuditCofig (status) {
                this.identityAuditCofig.status = status
                saveInentityAuditStatus(this.identityAuditCofig).then(data => {
                    if ( data.errCode === 10000 ) {
                        this.$Message.success("启用成功")
                        this.getIdentityAuditCofig()
                    } else {
                        this.identityAuditCofig.status = -1
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("启用失败")
                    console.log(err)
                })
            },
            queryList (page) {
                if(page){
                    this.queryData.pageNo = 1
                }
                inentityAuditList(this.queryData).then(data => {
                    if (data.errCode === 10000 ) {
                        this.totalCount = data.data.total
                        this.userList = data.data.pageRows
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("审核列表获取失败")
                    console.log(err)
                })
            },
            openModel () {
                if (this.userSelected.purseUserId=="") {
                    this.$Message.warning("请选择你要审核的用户")
                } else if (this.userSelected.status==0) {
                    this.$Message.warning("未上传身份信息，无法审核")

                } else if (this.userSelected.status==-1) {
                    this.$Message.warning("已审核失败")
                } else if (this.userSelected.status==2) {
                    this.modelStatus = true
                    this.isShow = false
                }
                else {
                    this.modelStatus = true
                    this.isShow = true
                }
            },
            selecteRow (data) {
                this.userSelected.name = data.name
                this.userSelected.idNo = data.idNo
                this.userSelected.purseUserId = data.uid
                this.userSelected.status = data.idCardStatus
                this.userSelected.idCardBack = data.idCardBack
                this.userSelected.idCardFront = data.idCardFront
            },
            okStatus () {
                this.commitStatus(2)
            },
            cancelStatus () {
                this.commitStatus(-1)
            },
            commitStatus (status) {
                let opt = {
                    status: status,
                    purseUserId: this.userSelected.purseUserId
                }
                inentityAudit(opt).then(data => {
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
            },
            changePage (page) {
                this.queryData.pageNo = page;
                this.queryList()
            }
        }
    }
</script>
