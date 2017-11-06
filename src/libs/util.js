let util = {};

util.title = function (title) {//设置页面title
    title = title ? title + ' - 保挣科技' : '保挣科技';
    window.document.title = title;
};

export default util;
