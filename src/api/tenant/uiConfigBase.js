import fetch from '../../libs/fetch';
import Root from '../../libs/root';

const javacore = Root.javacore
/* 短信验证码 */
export function getBasicInfo(){
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/tInterface/basic",
        data
    });
}
export const nodeRoot = Root.noderoot