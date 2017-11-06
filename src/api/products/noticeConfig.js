import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询通知设置
export function queryNoticeBasic () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/notification/basic/query",
        data
    })
}