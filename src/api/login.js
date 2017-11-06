import fetch from '../libs/fetch';
import Root from '../libs/root';

/* 图形验证码 */ 
export const imageSrc = Root.javacore;
/* 短信验证码 */
export function getMsgCode(mobile, nonstr, value){
    const data = {
        mobile,
        nonstr,
        value
    }
    return fetch({
        baseURL: imageSrc,
        url: "/login/sendCode",
        type: "get",
        data
    });
}
/* 登录 */ 
export function loginByTel(mobile, code){
    const data = {
        mobile,
        code
    }
    return fetch({
        baseURL: imageSrc,
        url: "/login/doLogin",
        data
    });
}
/* 登出 */
export function logOut(token){
    const data = {}
    return fetch({
        baseURL: imageSrc,
        url: "/login/logout",
        data
    });
}