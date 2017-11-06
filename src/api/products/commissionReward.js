import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询佣金分配的配置状态
export function rewardStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/esaleComission",
        data
    })
}
// 启用佣金分配的配置状态
export function saveRewardStatus (opt) {
    const data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/esaleComission",
        data
    })
}