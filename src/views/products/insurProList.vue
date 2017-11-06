<style scoped>
.insurprolist-page{
    margin-top: 38px;
}
.insurprolist-form{
        margin-bottom: -10px;
}
.insurprolist-form-item{
    margin-bottom: 10px;
}
.insurprolist-form-input{
    max-width: 120px;
}
.insurprolist-pagebar{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.insurprolist-page-components{
    display: inline-block;
    vertical-align: middle;
}
.modal-indexImg-show {
  height: 100px;
  padding-left: 80px;
  margin: 10px auto;
  border: 1px dashed #ddd;
  min-width: 120px;
}
.modal-indexImg-show img {
  height: 100%;
}
.modal-detailImages-show {
  height: 100px;
  padding-left: 80px;
  margin: 10px auto;
  border: 1px dashed #ddd;
  min-width: 120px;
}
.modal-detailImages-show li {
  display: inline-block;
  height: 100%;
  position: relative;
  margin-right: 5px;
  border: 1px solid #ddd;
}
.modal-detailImages-show li .icon-del {
  position: absolute;
  right: 0;
  bottom: 0;
  line-height: 26px;
  font-size: 18px;
}
.modal-detailImages-show li img {
  height: 100%;
}
</style>
<template>
    <div class="insurprolist-page">
        <Row type="flex" align="middle">
            <Col :span="20">
                <Card style="margin-bottom: 15px;">
                    <Form ref="formInline" inline :label-width="70" class="insurprolist-form">
                        <Form-item label="产品名称" class="insurprolist-form-item">
                            <Input placeholder="产品名称" v-model="queryData.title" class="insurprolist-form-input"></Input>
                        </Form-item>
                        <Form-item label="产品分类" class="insurprolist-form-item">
                          <Select style="width:120px" clearable v-model="queryData.categoryId">
                              <Option v-for="item, index in categoryList" :value="item.id" :key="index">
                                  {{ item.categoryName }}
                              </Option>
                          </Select>
                        </Form-item>
                        <Form-item label="上线时间" class="insurprolist-form-item">
                             <Date-picker type="date" @on-change="date => { queryData.effectStartTime = date }" placeholder="上线时间" class="insurprolist-form-input"></Date-picker>
                        </Form-item>
                        <Form-item label="产品状态" class="insurprolist-form-item">
                            <Select style="width:120px" clearable v-model="queryData.status">
                                <Option v-for="item, index in [-1, 0, 1, 2, 3]" :value="item" :key="index" v-text="statusFormat(item)"></Option>
                            </Select>
                        </Form-item>
                        <Form-item class="insurprolist-form-item">
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
        <Table stripe :columns="columns" :data="proList" @on-current-change="selecteRow" highlight-row></Table>
        <div class="insurprolist-pagebar" v-if="proList.length>0">
            <Page :total="totalCount" :current="queryData.pageNo" :page-size="20" @on-change="changePage" size="small" class="insurprolist-page-components" show-total></Page>
        </div>

        <Modal
            class="insurprolist-model"
            v-model="modelConfig.status"
            title="产品详情"
            :width="800">
            <Alert type="warning">请完善以下信息，以便完成您客户端产品信息</Alert>
            <Form ref="formInline" :label-width="80">
                <Form-item label="产品主图" class="insurprolist-form-item">
                    <picClippingBox :fixedNumberW="8" :fixedNumberH="5" @imgCropper="selecteMainImg"></picClippingBox>
                    <!-- <uploadBtn accept="image/jpeg,image/gif,image/png" @on-selected="selecteMainImg" style='display: inline-block;'></uploadBtn> -->
                    <span style='font-size:12px;margin-left:100px;'>图片大小(770*460)</span>
                </Form-item>
                <div class="modal-indexImg-show">
                  <img :src="prodetial.indexImage" alt="">
                </div>
                <Form-item label="产品名称" class="insurprolist-form-item">
                    <Input type="text" placeholder="产品名称" :maxlength='16' class="insurprolist-form-input" v-model="prodetial.title"></Input>
                    <span style='font-size:12px;margin-left:78px;'>产品名称长度不得超过16个字</span>
                </Form-item>
                <Form-item label="产品描述" class="insurprolist-form-item">
                    <Input type="text" placeholder="产品描述" :maxlength='20' class="insurprolist-form-input" v-model="prodetial.description"></Input>
                    <span style='font-size:12px;margin-left:78px;'>产品描述长度不得超过16个字</span>
                </Form-item>
                <Form-item label="产品分类" class="insurprolist-form-item">
                    <Select style="width:120px" v-model="prodetial.categoryId">
                        <Option :value="item.id" v-for="item, index in categoryList" v-text="item.categoryName" :key="index"></Option>
                    </Select>
                </Form-item>
                <Form-item label="产品详情图" class="insurprolist-form-item">
                    <uploadBtn accept="image/jpeg,image/gif,image/png" @on-selected="selecteDetailImg" style='display: inline-block;'></uploadBtn>
                    <span style='font-size:12px;margin-left:100px;'>图片大小(770*460)</span>
                </Form-item>
                <ul class="modal-detailImages-show">
                  <li v-for="item, index in prodetial.detailImages" :key="index">
                    <Button class="icon-del" shape="circle" icon="trash-a" @click="delDetailImg(index)"></Button>
                    <img :src="item" alt="">
                  </li>
                </ul>
                <Form-item label="上线日期" class="insurprolist-form-item">
                    <Date-picker type="date" :value="prodetial.effectStartTime" @on-change="date => { prodetial.effectStartTime = date }" placeholder="上线时间" class="insurprolist-form-input"></Date-picker>
                </Form-item>
                <Form-item label="产品备注" class="insurprolist-form-item">
                    <Input type="textarea" placeholder="产品备注" v-model="prodetial.note"></Input>
                </Form-item>
            </Form>
            <Alert show-icon>产品发布后将进入审核，通过审核将自动上线</Alert>
            <div slot="footer">
                <Button type="info" size="large" @click="okStatus">提交审核</Button>
                <Button size="large" @click="modelConfig.status=false">取消</Button>
            </div>
        </Modal>
        <Spin fix v-show="loadbox">加载中...</Spin>
    </div>
</template>
<script>
    import { dateFormat } from "../../libs/filters.js";
    import microCityPicker from "../../components/microCityPicker.vue";
    import uploadBtn from "../../components/uploadBtn.vue";
    import { getProductList, getCategoryList, getProductById, saveOrUpdProduct, nodeRoot, uploadImage, } from "../../api/products/lifeInsurance.js";
    import { Modal } from "iview"
    import picClippingBox from "../../components/picClippingBox.vue"

    export default {
        components: {
            microCityPicker,
            uploadBtn,
            picClippingBox
        },
        data () {
            return {
                loadbox: true,
                agent: this.$store.getters.agent,
                categoryList: [],
                queryData: {
                    pageNo: 1,
                    pageSize: 20,
                    categoryId: "",
                    title: "",
                    status: "",
                    effectStartTime: ""
                },
                columns: [
                    { title: "产品名称", key: "title", align: "center" },
                    { title: "产品分类", key: "categoryName", align: "center" },
                    { title: "上线时间", key: "effectStartTime", align: "center" },
                    {
                        title: "备注",
                        key: "note",
                        align: "center",
                        render (h, params) {
                            return h('a', {
                                on: {
                                    click: () => {
                                      Modal.info({
                                          title: "产品备注",
                                          content: params.row.note
                                      })
                                    }
                                }
                            }, "查看")
                        },
                    },
                    {
                        title: "状态",
                        key: "status",
                        align: "center",
                        render (h, params) {
                            return h('span', statusFormat(params.row.status))
                        }
                    }
                ],
                proList: [],
                totalCount: "",
                prodetialSel: "",
                prodetial: {
                    id: "",
                    categoryId: "",
                    title: "",
                    effectStartTime: "",
                    indexImage: "",
                    detailImages: [],
                    description: "",
                    note: ""
                },
                modelConfig:{
                    status: false,
                    type: "",
                },
            }
        },
        mounted () {
            this.queryList()
            this.getCategoryList()
        },
        methods: {
            getCategoryList () {
              getCategoryList().then(data => {
                if (data.errCode==10000) {
                  this.categoryList = data.data
                } else {
                  this.$Message.error(data.data)
                }
              }).catch(err => {
                console.log(err)
              })
            },
            queryList (page) {
                if(page){
                    this.queryData.pageNo = 1
                }
                this.loadbox = true;
                getProductList(this.queryData).then(data => {
                    this.loadbox = false;
                    if (data.errCode === 10000) {
                        this.totalCount = data.data.totalCount
                        this.proList = data.data.results
                    } else {
                        this.$Message.error(data.data)
                    }
                }).catch(err => {
                    this.loadbox = true;
                    this.$Message.error("产品列表获取失败")
                    console.log(err)
                })
            },
            imageSize (size) {
                if(size>2*1024*1024){
                    this.$Message.warning({
                        content: "照片大小不能超过2M",
                        duration: 5
                    })
                    return false;
                }else {
                    return true
                }
            },
            selecteMainImg (img) {
                
                // if(!this.imageSize(image.size)){return}
                // if(this.imageSize)
                let opt = {
                    imgData:img,
                    agent: this.agent,
                    type: "proMaster",
                    phoneNo: Math.random().toString(36).substr(2),
                }
                uploadImage(opt).then(data => {
                    this.prodetial.indexImage = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
        					console.log(err);
        				});
            },
            selecteDetailImg (image) {
              if(!this.imageSize(image.size)){return}
              
              let opt = {
                  imgData: image.data,
                  agent: this.agent,
                  type: "proDetail",
                  phoneNo: Math.random().toString(36).substr(2),
              }
              uploadImage(opt).then(data => {
                  let img = nodeRoot+data
                  this.prodetial.detailImages.push(img)
              }).catch( err => {
                  this.$Message.error("图片上传失败")
                console.log(err);
              });
            },
            delDetailImg (index) {
              this.prodetial.detailImages.splice(index, 1)
            },
            changePage (data) {
                this.queryData.pageNo = page;
                this.queryList()
            },
            selecteRow (row) {
              this.prodetialSel = row.id
            },
            updateConfig () {
                if (!this.prodetialSel) {
                    this.$Message.warning("请选择一条产品进行编辑")
                    return
                }
                getProductById(this.prodetialSel).then(data => {
                  if (data.errCode==10000) {
                    data.data.detailImages = JSON.parse(data.data.detailImages)
                    this.prodetial = data.data
                  } else {
                    this.$Message.warning(data.data)
                  }
                }).catch(err => {
                  console.log(data)
                })
                this.modelConfig.type = "update"
                this.modelConfig.status = true
            },
            saveConfig () {
                this.prodetial = {
                    id: "",
                    categoryId: "",
                    title: "",
                    effectStartTime: "",
                    note: "",
                    indexImage: "",
                    detailImages: [],
                    description: "",
                    note: ""
                }
                this.modelConfig.type = "save"
                this.modelConfig.status = true
            },
            judge (){
                if(this.prodetial.indexImage==""){
                    this.$Message.warning("产品主图不能为空！");
                    return false;
                }
                else if(this.prodetial.title==""){
                    this.$Message.warning("产品名称不能为空！");
                    return false;
                }
                else if(this.prodetial.description==""){
                    this.$Message.warning("产品描述不能为空！");
                    return false;
                }
                else if(this.prodetial.categoryId==""){
                    this.$Message.warning("产品分类不能为空！");
                    return false;
                }
                else if(this.prodetial.detailImages.length==0){
                    this.$Message.warning("产品详情图不能为空！");
                    return false;
                }
                else if(this.prodetial.effectStartTime==""){
                    this.$Message.warning("上线时间不能为空！");
                    return false;
                } else {
                    return true;
                }
            },
            okStatus () {
                if(!this.judge()){
                    return;
                };
                    
                this.modelConfig.status = false
                saveOrUpdProduct(this.prodetial).then(data => {
                if (data.errCode==10000) {
                    this.$Message.success("保存成功")
                    this.queryList()
                } else {
                    this.$Message.warning(data.data)
                }
                }).catch(err => {
                console.log(err)
                }) 
            },
            statusFormat: statusFormat,
        },
    }
    function statusFormat (status) {
      return {
        '-1': "审核失败",
        '0': "审核中",
        '1': "审核通过",
        '2': "已上线",
        '3': "已下架"
      }[status]
    }
</script>
