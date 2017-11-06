import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询已支付列表
export function queryPaylist(opt) {
    const data = {
	    userId: opt.userId,
    	orderCode: opt.orderCode,
    	czpayNo: opt.czpayNo,
    	tel: opt.tel,
    	payBeginTime: opt.payBeginTime,
    	payEndTime: opt.payEndTime,
    	beginTime: opt.beginTime,
    	endTime: opt.endTime,
    	carNo: opt.carNo,
    	status: opt.status,
    	pcode: opt.pcode,
    	cityCode: opt.cityCode,
    	signupStatus: opt.signupStatus,
    	pageNo: opt.pageNo,
    	pageSize: opt.pageSize,
	    containjq: opt.containjq,
	    order: opt.order,
    	sort: opt.sort,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/paylist",
        data
    });
}
// 补全保单号
export function accomplishPolicy(opt) {
    const data = {
	    orderCode: opt.orderCode,
    	policyNumber: opt.policyNumber,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/accomplishPolicy",
        data
    });
}
// 获取用户信息
export function getUserRecord(opt) {
    const data = {
	    orderCode: opt.orderCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/getUserRecord",
        data
    });
}
// 获取用户地址
export function getUserAddress(opt) {
    const data = {
	    orderCode: opt.orderCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/getUserAddress",
        data
    });
}
// 获取报价详情
export function getQuoteDetail(opt) {
    const data = {
	    orderCode: opt.orderCode,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/getQuoteDetail",
        data
    });
}
