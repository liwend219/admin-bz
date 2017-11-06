import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询账单列表
export function queryAccountlist(opt) {
    const data = {
        payType: opt.payType, // 0 支付宝打款 , 4 微信退款,6 支付宝退款
        orderCode: opt.orderCode,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
		status: opt.status,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/account",
        data
    });
}
// 打款
export function accountPay(opt) {
    const data = {
	    idList: opt.idList,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/pay",
        data
    });
}
// 退款
export function accountRefund(opt) {
    const data = {
	    idList: opt.idList,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/refund",
        data
    });
}