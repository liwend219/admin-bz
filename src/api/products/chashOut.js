import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 请求提现审核列表
export function cashOutAuditList (opt) {
    const data = {
        applyerAlipayAccount: opt.applyerAlipayAccount,
        applyerName: opt.applyerName,
        order: opt.order,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        serialNo: opt.serialNo,
        userId: opt.userId,
        sort: "cdt",
        status: opt.status,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/purse/cashback",
        data
    })
}

// 提交提现审核
export function cashOutAuditDeal (opt) {
    const data = {
        purseDetailIds: opt.purseDetailIds,
        status: opt.status,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/purse/dealCashback",
        data
    })
}