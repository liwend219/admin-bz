<style scoped>
.commissionconfig-page{
    margin-top: 38px;
}
.commissionconfig-form{
        margin-bottom: -10px;
}
.commissionconfig-form-item{
    margin-bottom: 10px;
}
.commissionconfig-form-input{
    max-width: 120px;
}
.commissionconfig-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.commissionconfig-page-components{
    display: inline-block;
    vertical-align: middle;
}
</style>
<template>
    <div class="commissionconfig-page">
        <Row type="flex" align="middle">
            <Col :span="20">
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="commissionconfig-form">
                        <Form-item label="投保城市" class="commissionconfig-form-item">
                            <microCityPicker style="width:120px" @on-change="selectCity"></microCityPicker>
                        </Form-item>
                        <Form-item label="保险公司" class="commissionconfig-form-item">
                            <Select style="width:120px" clearable v-model="queryData.policyId">
                                <Option v-for="item, index in supportPolicys" :value="item.policyId" :key="index">
                                    {{ item.policyName }}
                                </Option>
                            </Select>
                        </Form-item>
                        <Form-item class="commissionconfig-form-item">
                            <Button type="primary" @click="queryList(1)">搜索</Button>
                        </Form-item>
                    </Form>
                </Card>
            </Col>
            <Col :span="4" style="text-align:right;">
                <Button type="ghost" @click="updateConfig">编辑</Button>
                <Button type="primary" @click="saveConfig">新建</Button>
            </Col>
        </Row>
        <Table stripe :columns="columns" :data="configList" @on-current-change="selecteRow" highlight-row></Table>
        <div class="commissionconfig-pagebar" v-if="configList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="commissionconfig-page-components" show-total></Page>
        </div>

        <Modal
            class="commissionconfig-model"
            v-model="modelConfig.status"
            title="佣金配置">
            <Form ref="formInline" inline :label-width="80">
                <Form-item label="投保城市" class="commissionconfig-form-item">
                    <microCityPicker style="width:120px"  v-model="modelCityCode"></microCityPicker>
                </Form-item>
                <Form-item label="保险公司" class="commissionconfig-form-item">
                    <Select style="width:120px" v-model="configCommit.policyId">
                        <Option :value="item.policyId" v-for="item, index in supportPolicys" v-text="item.policyName" :key="index"></Option>
                    </Select>
                </Form-item>
                <Form-item label="商业险佣金" class="commissionconfig-form-item">
                    <Input type="text" placeholder="商业险佣金" class="commissionconfig-form-input" v-model="configCommit.syRate"></Input>
                </Form-item>
                <Form-item label="交强险佣金" class="commissionconfig-form-item">
                    <Input type="text" placeholder="交强险佣金" class="commissionconfig-form-input" v-model="configCommit.jqRate"></Input>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="info" size="large" @click="okStatus">保存</Button>
                <Button size="large" @click="modelConfig.status=false">取消</Button>
            </div>
        </Modal>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { dateFormat } from "../../libs/filters.js";
    import microCityPicker from "../../components/microCityPicker.vue";
    import { commissionConfigtList, saveCommissionConfig, updateCommissionConfig, querySupportPolicys } from "../../api/products/commissionConfig.js";

    export default {
        components: {
            microCityPicker
        },
        data () {
            return {
                loadbox: true,
                pp: 3,
                supportPolicys: [],
                queryData: {
                    pageNo: 1,
                    pageSize: 20,
                    policyId: "",
                    provinceCode: "",
                    cityCode: "",
                },
                columns: [
                    { title: "保险公司", key: "policyName", align: "center" },
                    { title: "所属省", key: "provinceName", align: "center" },
                    { title: "所属市", key: "cityName", align: "center" },
                    {
                        title: "商业险佣金",
                        key: "syRate",
                        align: "center"
                    },
                    {
                        title: "交强险佣金",
                        key: "jqRate",
                        align: "center"
                    },
                    {
                        title: "创建时间",
                        key: "cdt",
                        align: "center",
                        render (h, params) {
                            return h('span', dateFormat(params.row.cdt))
                        }
                    }
                ],
                configList: [],
                totalCount: "",
                configSelected: {
                    policyId: "",
                    provinceCode: "",
                    cityCode: "",
                    syRate: "",
                    jqRate: "",
                    id: ""
                },
                configCommit: {
                    policyId: "",
                    provinceCode: "",
                    cityCode: "",
                    syRate: "",
                    jqRate: "",
                },
                modelCityCode: [],
                modelConfig:{
                    status: false,
                    type: "",
                },
            }
        },
        mounted () {
            this.queryList()
            this.getSupportPolicys()
        },
        methods: {
            getSupportPolicys () {  
                querySupportPolicys().then(data => {
                    if (data.errCode === 10000) {
                        this.supportPolicys = data.data
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.$Message.error("保险公司列表获取失败")
                    console.log(err)
                })
            },
            queryList (page) {
                if(page){
                    this.queryData.pageNo = 1
                }
                this.loadbox = true;
                commissionConfigtList(this.queryData).then(data => {
                    this.loadbox = false;
                    if (data.errCode === 10000) {
                        this.totalCount = data.data.totalCount
                        this.configList = data.data.results
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.v = true;
                    this.$Message.error("佣金配置列表获取失败")
                    console.log(err)
                })
            },
            selectCity (arr) {
                console.log(arr)
                this.queryData.provinceCode = arr[0]||""
                this.queryData.cityCode = arr[1]||""
            },            
            changePage (page) {
                this.queryData.pageNo = page;
                this.queryList()
            },
            selecteRow (row) {
                for (var key in this.configSelected) {
                    this.configSelected[key] = row[key]
                }
            },
            updateConfig () {
                if (!this.configSelected.id) {
                    this.$Message.warning("请选择一条要编辑的配置项")
                    return
                }
                this.configCommit = this.configSelected
                this.modelConfig.type = "update"
                this.modelConfig.status = true
                this.modelCityCode = []
                this.modelCityCode.push(this.configCommit.provinceCode)
                this.modelCityCode.push(this.configCommit.cityCode)
            },
            saveConfig () {
                this.modelConfig.type = "save"
                this.configCommit={
                    policyId: "",
                    provinceCode: "",
                    cityCode: "",
                    syRate: "",
                    jqRate: "",
                }
                this.modelCityCode = []
                this.modelConfig.status = true
            },
            okStatus () {
                // if (!this.configCommit.policyId||!this.configCommit.provinceCode) {
                //     this.$Message.warning("保险公司、投保城市、商业险佣金、交强险佣金都不能为空")
                //     return
                // }
                this.configCommit.provinceCode = this.modelCityCode[0]
                this.configCommit.cityCode = this.modelCityCode[1]
                this.modelConfig.status = false
                if (this.modelConfig.type == "save") {
                    saveCommissionConfig(this.configCommit).then(data => {
                        if (data.errCode === 10000) {
                            this.$Message.success("配置保存成功")
                            this.queryList()
                        } else {
                            this.$Message.error(data.data)
                        }
                    }).catch(err => {
                        this.$Message.error("配置保存失败")
                        console.log(err)
                    })
                } else if (this.modelConfig.type == "update") {
                    updateCommissionConfig(this.configCommit).then(data => {
                        if (data.errCode === 10000) {
                            this.$Message.success("配置保存成功")
                            this.queryList()
                        } else {
                            this.$Message.error(data.data)
                        }
                    }).catch(err => {
                        this.$Message.error("配置保存失败")
                        console.log(err)
                    })
                }
            }
        }
    }
</script>
