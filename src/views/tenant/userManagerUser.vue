<template>
    <div style="margin-top: 38px;">
        <Row type="flex" align="middle">
            <Col :span="20">            
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="manageruser-form">
                        <Form-item label="用户ID" class="manageruser-form-item">
                            <Input type="text" placeholder="用户ID" class="manageruser-form-input" v-model="queryData.id"></Input>
                        </Form-item>
                        <Form-item label="手机号" class="manageruser-form-item">
                            <Input placeholder="手机号" class="manageruser-form-input" v-model="queryData.mobile"></Input>
                        </Form-item>
                        <Form-item label="姓名" class="manageruser-form-item">
                            <Input placeholder="姓名" class="manageruser-form-input" v-model="queryData.name"></Input>
                        </Form-item>
                        <Form-item label="用户标签" class="manageruser-form-item">
                            <Select clearable v-model="queryData.flag">
                                <Option value="1">电销</Option>
                                <Option value="2">代理人</Option>
                                 <Option value="0">默认用户</Option> 
                            </Select>
                        </Form-item>
                        <Form-item class="manageruser-form-item">
                            <Button type="ghost" @click="queryUsers(1)">查询</Button>
                        </Form-item>
                    </Form>
                </Card>
            </Col>
            <Col :span="4" style="text-align:right;">
                <Button type="primary" @click="openModel">编辑</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" :data="userList" @on-current-change="selecteRow" highlight-row></Table>
        <div class="manageruser-pagebar" v-if="userList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="manageruser-page-components" show-total></Page>
        </div>

        <Modal
            v-model="modelBox"
            title="编辑用户信息"
            @on-ok="updateUser"
            @on-cancel="modelBox = false">
            <Form ref="formInline" inline :label-width="80" class="manageruser-form-model">
                <Form-item label="用户姓名" class="manageruser-form-model-item">
                    <Input type="text" placeholder="用户姓名" class="manageruser-form-model-input" v-model="userSected.name"></Input>
                </Form-item>
                <Form-item label="用户身份证" class="manageruser-form-model-item">
                    <Input placeholder="用户身份证" class="manageruser-form-model-input" v-model="userSected.idNo"></Input>
                </Form-item>
                <Form-item label="用户标签" class="manageruser-form-model-item">
                    <Select style="width:130px" v-model="userSected.flag">
                        <Option value="1">电销</Option>
                        <Option value="2">代理人</Option>
                        <Option value="0">默认用户</Option> 
                    </Select>
                </Form-item>
                <Form-item label="备注" class="manageruser-form-model-item">
                    <Input placeholder="备注" class="manageruser-form-model-input" v-model="userSected.note"></Input>
                </Form-item>                   
            </Form>
        </Modal>
    </div>
</template>
<script>
    import { idValid } from "../../libs/validate.js"
    import { queryUserList, updateUserList } from "../../api/tenant/userManagerUser.js";
    import { Modal } from "iview"
    
    function flagFormat (flag) {
        return {
            "1": "电销",
            "2": "代理人",
            "0":"默认用户"  
        }[flag]
    }
    export default {
        data () {
            return {
                queryData: {
                    id: "",
                    mobile: "",
                    name: "",
                    flag: "",
                    pageSize: "20",
                    pageNo: 1,
                },
                columns: [
                    { title: "用户ID", key: "id", align: "center" },
                    { title: "手机号码", key: "mobile", align: "center" },
                    { title: "姓名", key: "name", align: "center" },
                    { title: "身份证", key: "idNo", align: "center" },
                    {
                        title: "用户标签",
                        key: "flag",
                        align: "center",
                        render (h, params) {
                            return h('span', flagFormat(params.row.flag))
                        }
                    },
                    {
                        title: "备注",
                        key: "note",
                        align: "center",
                        ellipsis: true,
                        render (h, params) {
                            return h('span', 
                                {   
                                    style: {
                                        cursor: "pointer",
                                        color: "#2db7f5"
                                    },
                                    on: {
                                        click: () => {
                                            Modal.info({
                                                title: '用户备注',
                                                content: `${params.row.note}`
                                            })
                                        }
                                    },
                                },
                            params.row.note);
                        }
                    },
                ],
                userList: [],
                totalCount: "",
                userSected: {
                    id: "",
                    channel: "",
                    name: "",
                    idNo: "",
                    note: "",
                    flag: ""
                },
                modelBox: false,
            }
        },
        mounted () {            
            this.queryUsers()
        },
        methods: {
            queryUsers (page) {
                if(page){
                    this.queryData.pageNo = 1
                }
                queryUserList(this.queryData).then(data => {
                    if (data.errCode === 10000) {
                        this.totalCount = data.data.totalCount
                        this.userList = data.data.results
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch( err => {
                    this.$Message.error("无法获取用户信息")
                    console.log(err)
                })
            },
            changePage (no) {
                this.queryData.pageNo = no
                this.queryUsers()
            },
            selecteRow (data) {
                for (let key in this.userSected) {
                    this.userSected[key] = key == "flag" ?  data[key].toString() : data[key]
                }
            },
            openModel () {
                if (this.userSected.id == "") {
                    this.$Message.warning("请选择你要编辑的用户")
                } else {
                    this.modelBox = true
                }
            },
            updateUser () {
                if (this.userSected.idNo&&!idValid(this.userSected.idNo)) {
                    this.$Message.warning("请输入正确的用户身份证")
                    return
                }
                updateUserList(this.userSected).then(data => {
                    console.log(data)
                    if (data.errCode == 10000) {
                        this.$Message.success("保存成功")
                        this.queryUsers()
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("保存失败")
                    console.log(err)
                })
            }
        }
    }
</script>
<style scoped>
.manageruser-header{
    margin-left: -15px;
    margin-right: -15px;
    width: 100%;
}
.manageruser-header h2{
    margin-bottom: 15px;
}
.manageruser-form{
        margin-bottom: -10px;
}
.manageruser-form-item{
    margin-bottom: 10px;
}
.manageruser-form-input{
    max-width: 120px;
}
.manageruser-form-model{
        margin-bottom: -10px;
}
.manageruser-form-model-item{
    margin-bottom: 10px;
}
.manageruser-form-model-input{
    max-width: 130px;
}
.manageruser-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.manageruser-page-components{
    display: inline-block;
    vertical-align: middle;
}
</style>