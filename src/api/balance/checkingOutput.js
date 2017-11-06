import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

// 查询对账列表
export function queryBalanceList(opt) {
    const data = {
        type: opt.type,
        toTid: opt.toTid,
        carNo: opt.carNo,
        policyId: opt.policyId,
		status: opt.status,
		insuredStartTime: opt.insuredStartTime,
		insuredEndDate: opt.insuredEndDate,
		pageNo: opt.pageNo,
		pageSize: opt.pageSize
    }
    return fetch({
        baseURL: javacore,
        url: "/balance/getbalance",
        data
    })
}