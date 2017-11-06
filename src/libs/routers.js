// 公共模块
const login = (resolve) => require(['../views/login.vue'], resolve);
const dashboard = (resolve) => require(['../views/layout.vue'], resolve);

const demo = (resolve) => require(['../views/demo.vue'], resolve);

// 租户模块
const uiBase = (resolve) => require(['../views/tenant/uiConfigBase.vue'], resolve);
const uiGlobal = (resolve) => require(['../views/tenant/uiConfigGlobal.vue'], resolve);
const tenantUI = [
    { path: '/uiConfig/base', meta: { title: '基础' }, name: "基础", component: uiBase },
    { path: '/uiConfig/global', meta: { title: '全局' }, name: "全局", component: uiGlobal },
];
const manageUser = (resolve) => require(['../views/tenant/userManagerUser.vue'], resolve);
const tenantUser = [
    { path: '/usermanage/user', meta: { title: '用户' }, name: "用户", component: manageUser },
];
const groupSources = (resolve) => require(['../views/tenant/groupSources.vue'], resolve);
const groupAgency = (resolve) => require(['../views/tenant/groupAgency.vue'], resolve);
const tenantGroup = [
    { path: '/group/sources', meta: { title: '渠道商' }, name: "渠道商", component: groupSources },
    { path: '/group/agency', meta: { title: '代理' }, name: "代理", component: groupAgency },
];

// 产品模块
// 电销
const commissionReward = (resolve) => require(['../views/products/commissionReward.vue'], resolve);
const listAllocate = (resolve) => require(['../views/products/listAllocate.vue'], resolve);
const productSale = [
    { path: '/sale/commission', meta: { title: '佣金奖励' }, name: "佣金奖励", component: commissionReward },
    { path: '/sale/allocate', meta: { title: '名单分配' }, name: "名单分配", component: listAllocate },
]
// 车险
const commissionConfig = (resolve) => require(['../views/products/commissionConfig.vue'], resolve);
const productInsur = [
    { path: '/carcare/commission', meta: { title: '保险佣金配置' }, name: "保险佣金配置", component: commissionConfig },
]
// 非车险
const insurProList = (resolve) => require(['../views/products/insurProList.vue'], resolve);
// const insurProEditer = (resolve) => require(['../views/products/insurProEditer.vue'], resolve);
const insurPro = [
  { path: '/insur/insurProList', meta: { title: '产品列表' }, name: "产品列表", component: insurProList },
  // { path: '/insur/insurProEditer', meta: { title: '产品详情' }, name: "产品详情", component: insurProEditer },
]
// 钱包
const identityAudit = (resolve) => require(['../views/products/identityAudit.vue'], resolve);
const chashOut = (resolve) => require(['../views/products/chashOut.vue'], resolve);
const productWallet = [
    { path: '/wallet/identity', meta: { title: '身份审核管理' }, name: "身份审核管理", component: identityAudit },
    { path: '/wallet/chashout', meta: { title: '提现申请' }, name: "提现申请", component: chashOut },
]
// 支付
const overallconfig = (resolve) => require(['../views/products/overallconfig.vue'], resolve);
const payConfig = (resolve) => require(['../views/products/payConfig.vue'], resolve);
const productPay = [
    { path: '/pay/overallconfig', meta: { title: '全局配置'}, name :'全局配置', component: overallconfig },
    { path: '/pay/payconfig', meta: { title: '支付配置' }, name: "支付配置", component: payConfig },
]
// 通知
const noticeConfig = (resolve) => require(['../views/products/noticeConfig.vue'], resolve);
const saleNotice = (resolve) => require(['../views/products/saleNotice.vue'], resolve);
const insurNotice = (resolve) => require(['../views/products/insurNotice.vue'], resolve);
const payNotice = (resolve) => require(['../views/products/payNotice.vue'], resolve);
const integrateNotice = (resolve) => require(['../views/products/integrateNotice.vue'], resolve);
const cashOutNotice = (resolve) => require(['../views/products/cashOutNotice.vue'], resolve);
const productNotice = [
    { path: '/notice/noticeconfig', meta: { title: '通知设置' }, name: "通知设置", component: noticeConfig },
    { path: '/notice/noticesale', meta: { title: '电销通知' }, name: "电销通知", component: saleNotice },
    { path: '/notice/noticeinsur', meta: { title: '投保通知' }, name: "投保通知", component: insurNotice },
    { path: '/notice/noticepay', meta: { title: '支付通知' }, name: "支付通知", component: payNotice },
    { path: '/notice/noticeintegrate', meta: { title: '积分通知' }, name: "积分通知", component: integrateNotice },
    { path: '/notice/noticecashout', meta: { title: '提现通知' }, name: "提现通知", component: cashOutNotice },
]

// 第三方服务


// 结算模块
const moneyPayList = (resolve) => require(['../views/balance/moneyPayList.vue'], resolve);
const moneyPreYield = (resolve) => require(['../views/balance/moneyPreYield.vue'], resolve);
const moneyAccount = (resolve) => require(['../views/balance/moneyAccount.vue'], resolve);
const moneyManage = [
    { path: '/money/moneypaylist', meta: { title: '已支付列表' }, name: "已支付列表", component: moneyPayList },
    { path: '/money/moneypreyield', meta: { title: '预收益管理' }, name: "预收益管理", component: moneyPreYield },
    { path: '/money/moneyaccount', meta: { title: '出账管理' }, name: "出账管理", component: moneyAccount },
]
const checkingEntry = (resolve) => require(['../views/balance/checkingEntry.vue'], resolve);
const checkingOutput = (resolve) => require(['../views/balance/checkingOutput.vue'], resolve);
const checking = [
    { path: '/checking/checkingrntry', meta: { title: '收项' }, name: "收项", component: checkingEntry },
    { path: '/checking/checkingoutput', meta: { title: '结项' }, name: "结项", component: checkingOutput }
]

const routers = [
    { // 用户界面配置 第一个路由配合导航条
        group: "租户模块",
        path: '/uiConfig',
        meta: { title: '用户界面配置' },
        name: "用户界面配置",
        redirect: '/uiConfig/base',
        component: dashboard,
        children: tenantUI
    },

    { // 用户管理
        group: "租户模块",
        path: '/usermanage',
        meta: { title: '用户管理' },
        name: "用户管理",
        component: dashboard,
        redirect: '/usermanage/user',
        children: tenantUser
    },
    { // 租户组级
        group: "租户模块",
        path: '/group',
        meta: { title: '租户组级' },
        name: "租户组级",
        component: dashboard,
        redirect: '/group/sources',
        children: tenantGroup
    },

    { // 电销
        group: "产品服务",
        path: '/sale',
        meta: { title: '电销' },
        name: "电销",
        component: dashboard,
        redirect: '/sale/commission',
        children: productSale
    },
    { // 车险
        group: "产品服务",
        path: '/carcare',
        meta: { title: '车险' },
        name: "车险",
        component: dashboard,
        redirect: '/carcare/commission',
        children: productInsur
    },
    {//非车险
      group: "产品服务",
      path: '/insur',
      meta: { title: '非车险' },
      name: "非车险",
      component: dashboard,
      redirect: '/insur/insurProList',
      children: insurPro
    },
    { // 钱包
        group: "产品服务",
        path: '/wallet',
        meta: { title: '钱包' },
        name: "钱包",
        component: dashboard ,
        redirect: '/wallet/identity',
        children: productWallet
    },
    { // 支付
        group: "产品服务",
        path: '/pay',
        meta: { title: '支付' },
        name: "支付",
        component: dashboard,
        redirect: '/pay/overallconfig',
        children: productPay
    },
    { // 通知
        group: "产品服务",
        path: '/notice',
        meta: { title: '通知' },
        name: "通知",
        component: dashboard,
        redirect: '/notice/noticeconfig',
        children: productNotice
    },

    { //保险公司
        group: "第三方服务",
        path: '/companys',
        meta: { title: '保险公司' },
        name: "保险公司",
        component: dashboard
    },

    { // 资金管理
        group: "结算",
        path: '/money',
        meta: { title: '账务管理' },
        name: "账务管理",
        component: dashboard,
        redirect: "/money/moneypaylist",
        children: moneyManage
    },
    { // 对账
        group: "结算",
        path: '/checking',
        meta: { title: '对账' },
        name: "对账",
        component: dashboard,
        redirect: "/checking/checkingrntry",
        children: checking
    },

    { path: '/', redirect: '/login', },
    { path: '/login', meta: { title: '登录' }, component: login },
    { path: '/demo', meta: { title: '示例' }, component: demo },
];

export default routers;
