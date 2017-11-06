import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询电销通知的配置状态
export function saleNoticeStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/esaleNotify",
        data
    })
}
// 启用电销通知的配置状态
export function saveSaleNoticeStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/esaleNotify",
        data
    })
}
// 报价成功通知
export function quoteSuccess () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_quote_success",
        data
    })
}
// 保价失败通知
export function quoteFail () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_quote_fail",
        data
    })
}
// 支付链接通知
export function payment () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_payment",
        data
    })
}
//支付失败通知
export function payfail () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_payfail",
        data
    })
}