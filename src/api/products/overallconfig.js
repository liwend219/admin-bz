import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore


// 查询退款方式配置状态
export function refundMode () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/config/query/directRefund",
        data
    })
}

// 启用退款方式的配置状态
export function saverefundModeStatus (id,tid,status) {
    const data = {
        id,
        tid,
        status, // 1或-1
    }
    return fetch({
        baseURL: javacore,
        url: "/config/saveOrUpd/directRefund",
        data
    })
}