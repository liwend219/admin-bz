import fetch from '../libs/fetch';
import Root from '../libs/root';

const javacore = Root.javacore
/* 短信验证码 */
export function getIndexInfo(){
    const data = {}
    return fetch({
        baseURL: javacore,
        url: "/tInterface/getIndexInfo",
        data
    });
}