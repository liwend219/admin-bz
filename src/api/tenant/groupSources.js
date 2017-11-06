import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询用户列表
export function queryChannelList(opt) {
    const data = {
        merName: opt.merName,
        contactsName: opt.contactsName
    }
    return fetch({
        baseURL: javacore,
        url: "/tgroup/getChannel",
        data
    })
}