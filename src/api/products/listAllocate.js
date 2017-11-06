import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 请求名单分配列表
export function getAllocateList (opt) {
    const data = {
        orderCode: opt.orderCode,
        carNo: opt.carNo,
        mobile: opt.mobile,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        startDate: opt.startDate,
        endDate: opt.endDate,
        orderType: opt.orderType
    }
    return fetch({
        baseURL: javacore,
        url: "/esale/queryOrderDistribute",
        data
    })
}
// 待分配用户列表
export function getUserList () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/esale/userList",
        data
    })
}
// 名单分配
export function saveAllocate (opt) {
    const data = {
        orderCodes: opt.orderCodes,
        applyUid: opt.applyUid
    }
    return fetch({
        baseURL: javacore,
        url: "/esale/distribute",
        data
    })
}
// 分配历史
export function historyAllocate (carNo) {
    const data = {
        carNo
    }
    return fetch({
        baseURL: javacore,
        url: "/esale/disLog",
        data
    })
}