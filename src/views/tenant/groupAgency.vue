<style scoped>
.groupagency-card {
    margin-bottom: 15px;
    margin-top: 38px;
}
.groupagency-form {
    margin-bottom: -10px;
}
.groupagency-form-item {
    margin-bottom: 10px;
}
.groupagency-form-input {
    max-width: 120px;
}
</style>
<template>
    <div>
        <Card class="groupagency-card">
            <Form ref="formInline" inline :label-width="70" class="groupagency-form">
                <Form-item label="公司名" class="groupagency-form-item">
                    <Input type="text" placeholder="公司名" class="groupagency-form-input" v-model="queryData.merName"></Input>
                </Form-item>
                <Form-item label="联系人" class="groupagency-form-item">
                    <Input placeholder="联系人" class="groupagency-form-input" v-model="queryData.contactsName"></Input>
                </Form-item>
                <Form-item class="groupagency-form-item">
                    <Button type="primary" @click="queryList">查询</Button>
                </Form-item>
            </Form>
        </Card>
        <Table stripe :columns="columns" :data="agenciesList"></Table>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { queryAgentList } from "../../api/tenant/groupAgency.js";
    import { dateFormat } from "../../libs/filters.js";

    export default {
        data () {
            return {
                loadbox: true,
                queryData: {
                    merName: "",
                    contactsName: ""
                },
                columns: [
                    { title: "用户ID", key: "merid", align: "center" },
                    { title: "公司名", key: "mername", align: "center", ellipsis: true },
                    { title: "联系人", key: "contactsName", align: "center" },
                    { title: "联系人电话", key: "contactsTelephone", align: "center" },
                    {
                        title: "合约开始时间",
                        key: "contractStartTime",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.contractStartTime))
                        }
                    },
                    {
                        title: "合约到期时间",
                        key: "contractEndTime",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.contractEndTime))
                        }
                    },
                    {
                        title: "建立时间",
                        key: "mercreatetime",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.mercreatetime))
                        }
                    },
                ],
                agenciesList: []
            }
        },
        mounted () {
            this.queryList()
        },
        methods: {
            queryList () {
                this.loadbox = true;
                queryAgentList(this.queryData).then(data => {
                    this.loadbox = false
                    if (data.errCode == 10000) {
                        this.agenciesList = data.data
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("公司列表获取失败")
                    console.log(err)
                    this.loadbox = true;
                })
            }
        }
    }
</script>