import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询用户列表
export function queryAgentList(opt) {
    const data = {
        merName: opt.merName,
        contactsName: opt.contactsName
    }
    return fetch({
        baseURL: javacore,
        url: "/tgroup/getAgent",
        data
    })
}