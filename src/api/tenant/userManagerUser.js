import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询用户列表
export function queryUserList(opt) {
    const data = {
        id: opt.id,
        mobile: opt.mobile,
        name: opt.name,
        flag: opt.flag,
        pageSize: opt.pageSize,
        pageNo: opt.pageNo
    }
    return fetch({
        baseURL: javacore,
        url: "/userManage/query",
        data
    });
}
// 添加用户
export function updateUserList(opt) {
    const data = {
        id: opt.id,
        name: opt.name,
        flag: opt.flag,
        note: opt.note,
        idNo: opt.idNo,
        channel: opt.channel
    }
    return fetch({
        baseURL: javacore,
        url: "/userManage/update",
        data
    });
}