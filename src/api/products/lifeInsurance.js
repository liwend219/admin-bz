import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

export const nodeRoot = Root.noderoot;
// 请求产品列表
export function getProductList (opt) {
    const data = {
        'title': opt.title,// 标题
        'categoryId': opt.categoryId,// 类别id
        'status': opt.status,// 状态
        'effectStartTime': opt.effectStartTime,// 生效时间
        'pageNo': opt.pageNo,
        'pageSize': opt.pageSize,
    }
    return fetch({
        baseURL: javacore,
        url: "/lifeInsurance/productList",
        data
    })
}
// 获取产品类别
export function getCategoryList () {
  const data = {}
    return fetch({
        baseURL: javacore,
        url: "/lifeInsurance/categoryList",
        data
    })
}

// 获取产品详情
export function getProductById (pid) {
    const data = {
        'pid': pid
    }
    return fetch({
        baseURL: javacore,
        url: "/lifeInsurance/getProductById",
        data
    })
}
// 保存产品详情(没有ID视为新建)
export function saveOrUpdProduct (opt) {
    const data = {
      'id': opt.id,// 编辑传，新建不传
      'categoryId': opt.categoryId,// 类别id
      'title': opt.title,// 名称
      'effectStartTime': opt.effectStartTime,
      'note': opt.note,//注释
      'indexImage': opt.indexImage,//主图
      'detailImages': opt.detailImages,//数组
      'description': opt.description,// 描述
    }
    return fetch({
        baseURL: javacore,
        url: "/lifeInsurance/saveOrUpdProduct",
        data
    })
}
// 上传图片
export function uploadImage (opt) {
    const data = {
        imgData:opt.imgData,
        agent:opt.agent,
        type:opt.type,
        phoneNo:opt.phoneNo,
    }
    return fetch({
        baseURL: nodeRoot,
        url: "/img/saveIdCardImage",
        data
    })
}
