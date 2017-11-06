<style scoped>
.noticeconfig-header{
    margin-bottom: 40px;
}
.noticeconfig-form{
    max-width: 300px;
}
</style>
<template>
    <div>
        <div class="noticeconfig-header">
            <h2>通知设置</h2>
        </div>
        <div>
            <Form ref="formInline" :label-width="70" class="noticeconfig-form">
                <Form-item label="公司名称" class="noticeconfig-form-item">
                    <Input type="text" placeholder="公司名称" readonly class="noticeconfig-form-input" v-model="notice.companyName"></Input>
                </Form-item>
                <Form-item label="产品名称" class="noticeconfig-form-item">
                    <Input type="text" placeholder="产品名称" readonly class="noticeconfig-form-input" v-model="notice.productName"></Input>
                </Form-item>
                <Form-item class="noticeconfig-form-item">
                    <!--<Button type="primary" @click="saveNoticeConfig">保存</Button>-->
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    import { queryNoticeBasic } from "../../api/products/noticeConfig.js"
    export default {
        data () {
            return {
                notice: {
                    companyName: "",
                    productName: "",
                }
            }
        },
        mounted () {
            this.getNoticeBasic()
        },
        methods: {
            getNoticeBasic () {
                queryNoticeBasic().then(data => {
                    if (data.errCode == 10000) {
                        if (!data.data) {
                            this.$Message.warning("暂无配置信息")
                        }
                        this.notice.companyName = data.data.companyName
                        this.notice.productName = data.data.productName
                    } else {
                        this.$Message.error(data.data)
                    } 
                }).catch(err => {
                    this.$Message.error("获取通知设置信息失败")
                    console.log(err)
                })
            }
        }
    }
</script>