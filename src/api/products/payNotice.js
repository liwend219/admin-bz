import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询支付通知的配置状态
export function payNoticeStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/paymentNotify",
        data
    })
}
// 启用支付通知的配置状态
export function savePayNoticeStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/paymentNotify",
        data
    })
}
// 支付成功通知
export function paySuccess () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/paymentNotify_success",
        data
    })
}
