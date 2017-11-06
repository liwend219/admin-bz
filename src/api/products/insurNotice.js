import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询投保通知的配置状态
export function insurNoticeStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/insureNotify",
        data
    })
}
// 启用投保通知的配置状态
export function saveInsurNoticeStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/insureNotify",
        data
    })
}
// 投保成功通知
export function insurSuccess () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/insureNotify_success",
        data
    })
}
// 投保失败通知
export function insurFail () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/template/query/insureNotify_fail",
        data
    })
}