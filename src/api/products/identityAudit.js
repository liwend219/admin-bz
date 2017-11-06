import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询身份审核的配置状态
export function inentityAuditStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/inentityAudit",
        data
    })
}
// 启用身份审核的配置状态
export function saveInentityAuditStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/inentityAudit",
        data
    })
}
// 请求身份审核列表
export function inentityAuditList (opt) {
    const data = {
        idCardStatus: opt.idCardStatus,
        order: opt.order,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        userId: opt.userId,
        sort: "cdt",
        tenantCode: opt.tenantCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/purse/identityAudit",
        data
    })
}
// 身份审核
export function inentityAudit (opt) {
    const data = {
        purseUserId: opt.purseUserId,
        status: opt.status
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/purse/dealIdentityAudit",
        data
    })
}