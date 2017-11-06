import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore
//获取支付方式
export function payConfigStatus () {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/scoreRate/querySupportPolicys",
        data
    })
}

//修改支付方式
export function setConfigStatus (policyId, payType) {
    const data = {
        policyId,
        payType
    }
    return fetch({
        baseURL: javacore,
        url: "/config/updSupportPolicyPayType",
        data
    })
}