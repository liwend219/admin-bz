import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 请求佣金配置列表
export function commissionConfigtList (opt) {
    const data = {
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        policyId: opt.policyId,
        provinceCode: opt.provinceCode,
        cityCode: opt.cityCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/scoreRate/queryPage",
        data
    })
}
// 新建佣金配置项
export function saveCommissionConfig (opt) {
    const data = {
        syRate: opt.syRate,
        jqRate: opt.jqRate,
        policyId: opt.policyId,
        provinceCode: opt.provinceCode,
        cityCode: opt.cityCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/scoreRate/save",
        data
    })
}
// 更新佣金配置项
export function updateCommissionConfig (opt) {
    const data = {
        syRate: opt.syRate,
        jqRate: opt.jqRate,
        policyId: opt.policyId,
        provinceCode: opt.provinceCode,
        cityCode: opt.cityCode,
        id: opt.id
    }
    return fetch({
        baseURL: javacore,
        url: "/scoreRate/update",
        data
    })
}
// 查询支持的保险公司
export function querySupportPolicys () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/scoreRate/querySupportPolicys",
        data
    })
}