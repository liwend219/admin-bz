import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询积分通知的配置状态
export function integrateNoticeStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/scoreNotify",
        data
    })
}
// 启用积分通知的配置状态
export function saveIntegrateNoticeStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/scoreNotify",
        data
    })
}
// 积分领取成功通知
export function integrateSuccess () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/scoreNotify_access",
        data
    })
}