const LOG_MAP = [
    ['/character/list', '获取角色列表'],
    ['/log/list', '获取日志列表'],
    ['/user/list', '获取用户列表'],
    ['/user/info', '获取自己的登入信息'],
    ['/phone/list', '获取手机列表'],
    ['/phone/detail', '获取手机详情页'],
    ['/phone/add', '添加新手机'],
    ['/phone/update/count', '变更库存'],
    ['/phone-classify/add', '新曾手机分类'],
    // ['/phone/update', '更改手机配置'],
    ['/phone-classify/list', '获取手机分类管理列表'],
    ['/auth/login', '登录系统'],
    ['/inventory-log/list', '获取手机库存变更日志'],
    ['/invite/add', '添加邀请码'],
    ['/invite/list', '获取邀请码列表'],
    ['/forget-password/update/status', '更新密码状态'],
    ['/forget-password/add', '申请忘记密码'],
    ['/forget-password/list', '获取重置密码列表'],
    ['/dashboard/base-info', '获取总览页面'],
  ];
  
  export const getLogInfoByPath = (path) => {
    let title = '';
  
    LOG_MAP.forEach((item) => {
      if (path.includes(item[0])) {
        title = path.replace(item[0], item[1]);
      }
    });
  
    return title || path;
  };
