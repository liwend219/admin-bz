const getters = {
  token: state => state.user.token,
  mobile: state => state.user.mobile,
  agent: state => state.user.agent,
  tid: state => state.user.tid,
  subMenu: state => state.app.subMenu,
};
export default getters