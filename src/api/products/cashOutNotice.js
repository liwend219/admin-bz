import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询提现通知的配置状态
export function cashOutNoticeStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/cashbackNotify",
        data
    })
}
// 启用提现通知的配置状态
export function saveCashOutNoticeStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/cashbackNotify",
        data
    })
}
// 提现成功通知
export function cashOutSuccess () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/cashbackNotify_success",
        data
    })
}
// 提现失败通知
export function cashOutFail () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/cashbackNotify_fail",
        data
    })
}