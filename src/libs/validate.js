/*
 * Created by wang youxu on 17/6/27.
 */
export function telValid (str) {
    const reg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])+\d{8}$/
    return reg.test(str)
}
export function idValid (str) {
    const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    return reg.test(str)
}
export function carNoValid (str) {
    const reg = /^[A-Z_a-z]{1}[A-Z_a-z_0-9]{6}/
    return reg.test(str)
}