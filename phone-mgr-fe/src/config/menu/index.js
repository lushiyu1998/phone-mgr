export default [
    {
        title: '手机管理',
        url: '/phones',
        onlyAdmin: false,
    },
    {
        title: '用户管理',
        url: '/user',
        onlyAdmin: true,
    },
    {
        title: '操作日志',
        url: '/log',
        onlyAdmin: true,
    },
    {
        title: '杂项',
        onlyAdmin: false,
        children: [
            {
                title: '手机分类管理',
                url: '/phone-classify',
                onlyAdmin: true,
            },
            {
                title: '重置密码列表',
                url: '/reset/password',
                onlyAdmin: true,
            },
            {
                title: '邀请码管理',
                url: '/invite-code',
                onlyAdmin: true,
            },
        ],
    },
];