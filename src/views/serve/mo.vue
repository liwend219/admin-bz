<template>
    <div style="padding:16px;">
        <div style="margin-bottom: 16px;font-size:0px;">
            <Input v-model="source" placeholder="请输入..." style="width: 300px"></Input>
            <Button style="margin-left:16px;" type="success" @click='query'>点击查询</Button>
        </div>
        <Table :columns="columns" :data="data"></Table>
        <Page v-show="data.length!=0" style="margin-top:16px;" :current="currentPage" :page-size="pageSize" :total="totalCount"></Page>
    </div>
</template>

<script>
    import axios from 'axios';
    var ENV = location.origin=='http://admin.baozhengtech.com'?'http://106.15.43.147:9990':'http://106.14.96.49:9990';
    export default {
        data() {
            return {
                source: "",
                pageNo: 1,
                currentPage: 1,
                pageSize: 20,
                totalCount: 0,
                pageCount: 1,
                columns: [
                    {
                        title: '导入日期',
                        key: 'cdt',
                        align: 'center',
                        width: 100,
                        fixed: 'left',
                        render: (h,p) => {
                            return h('span',p.row.cdt.slice(0, 10))
                        }
                    },
                    {
                        title: '导入目标',
                        key: 'tenantCode',
                        align: 'center',
                        width: 100,
                        fixed: 'left'
                    },                    
                    {
                        title: '标签',
                        align: 'center',
                        width: 120,
                        key: 'source'
                    },
                    {
                        title: '原始数据',
                        align: 'center',
                        width: 130,
                        key: 'totalCount'
                    },
                    {
                        title: '可报价数据',
                        align: 'center',
                        width: 110,
                        key: 'inputCount'
                    },
                    {
                        title: '累计落入报价范围',
                        align: 'center',
                        width: 140,
                        key: 'canQuoteCount'
                    },
                    {
                        title: '一次报价成功',
                        width: 130,
                        align: 'center',
                        key: 'firstSuccessCount'
                    },
                    {
                        title: '一次成功率',
                        width: 120,
                        align: 'center',
                        render: (h,p) => {
                            return h('span',(p.row.firstSuccessCount/p.row.canQuoteCount*100).toFixed(2)+'%')
                        }
                    },
                    {
                        title: '非一次报价成功',
                        align: 'center',
                        width: 130,
                        key: 'nonFirstSuccessCount'
                    },
                    {
                        title: '非一次成功率',
                        width: 120,
                        align: 'center',
                        render: (h,p) => {
                            return h('span',(p.row.nonFirstSuccessCount/p.row.canQuoteCount*100).toFixed(2)+'%')
                        }
                    },
                    {
                        title: '合计报价成功',
                        width: 120,
                        align: 'center',
                        render: (h,p) => {
                            return h('span',p.row.firstSuccessCount+p.row.nonFirstSuccessCount)
                        }
                    },
                    {
                        title: '合计成功率',
                        width: 110,
                        align: 'center',
                        render: (h,p) => {
                            return h('span',((p.row.firstSuccessCount+p.row.nonFirstSuccessCount)/p.row.canQuoteCount*100).toFixed(2)+'%')
                        }
                    },
                    {
                        title: '报价失败',
                        width: 100,
                        align: 'center',
                        key: 'nonPriceCount'
                    },
                    {
                        title: '失败率',
                        width: 100,
                        align: 'center',
                        render: (h,p) => {
                            return h('span',(p.row.nonPriceCount/p.row.canQuoteCount*100).toFixed(2)+'%')
                        }
                    }
                ],
                data: []
            }
        },
        methods: {
            getQuery (no) {
                let self = this;
                axios.get(ENV+'/report/inputOrderAccount?pageSize=20&pageNo='+no+'&source='+self.source)
                .then(function (response) {
                    if (response.status == 200) {
                        if (response.data.errCode==10000) {
                            self.pageNo = response.data.data.pageNo;
                            self.currentPage = response.data.data.currentPage;
                            self.pageSize = response.data.data.pageSize,
                            self.totalCount = response.data.data.totalCount;
                            self.pageCount = response.data.data.pageCount;
                            self.data = response.data.data.results
                        } else {
                            this.$Message.error({
                                content: "请求接口出错",
                                duration: 5,
                                closable: true
                            });
                        }
                    }
                })
                .catch(function (error) {
                    if (error.status == 200) {
                        if (error.data.errCode==10000) {
                            self.pageNo = error.data.data.pageNo;
                            self.currentPage = error.data.data.currentPage;
                            self.pageSize = error.data.data.pageSize,
                            self.totalCount = error.data.data.totalCount;
                            self.pageCount = error.data.data.pageCount;
                            self.data = error.data.data.results
                        } else {
                            this.$Message.error({
                                content: "请求接口出错",
                                duration: 5,
                                closable: true
                            });
                        }
                    }
                });
            },
            query () {
                this.getQuery(1)
            }
        },
        mounted () {
            // this.source = '安诚'
            this.getQuery(1)
        }
    }
</script>

<style scoped>

</style>