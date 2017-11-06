import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询预收益列表
export function queryPreYieldlist(opt) {
    const data = {
		availableDate: opt.availableDate,
        availableEndDate: opt.availableEndDate,
        orderNo: opt.orderNo,
        pageNo: opt.pageNo,
        status: opt.status,
        pageSize: opt.pageSize,
		userId: opt.userId,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/preYield",
        data
    });
}
// 预收益审核
export function updatePreYield(opt) {
    const data = {
	    detailIds: opt.detailIds,
    	status: opt.status,
    }
    return fetch({
        baseURL: javacore,
        url: "/accounting/dealPreYield",
        data
    });
}