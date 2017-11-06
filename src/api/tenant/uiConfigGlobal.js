import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore

export const nodeRoot = Root.noderoot;
/* 获取配置信息*/
export function getGlobalInfo() {
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/tInterface/global/get",
        data
    });
}
// 保存配置信息
export function saveGlobalInfo(opt) {
    const data = opt
    return fetch({
        baseURL: javacore,
        url: "tInterface/global/saveOrUpd",
        data
    });
}
// 上传图片
export function uploadImage (opt) {
    const data = {
        imgData:opt.imgData,
        agent:opt.agent,
        type:opt.type,
        phoneNo:opt.phoneNo,
    }
    return fetch({
        baseURL: nodeRoot,
        url: "/img/saveIdCardImage",
        data
    })
}