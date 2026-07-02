import type { LoginConfig, LoginResponse, LoginToken, PermissionInfo, UserInfo } from '~/types'
import type { MenuRoute } from '~/types/menu'

// ==================== Mock 数据 ====================

const mockToken: LoginToken = {
  accessToken: 'mock_access_token_xihan_dev_2024',
  refreshToken: 'mock_refresh_token_xihan_dev_2024',
  tokenType: 'Bearer',
  expiresIn: 3600,
  issuedAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
}

export const mockLoginConfig: LoginConfig = {
  loginMethods: ['password'],
  oAuthProviders: [],
}

export const mockUserInfo: UserInfo = {
  basicId: 'mock_user_001',
  userName: 'admin',
  nickName: '管理员',
  email: 'admin@xihan.fun',
  avatar: '',
  tenantId: 'tenant_001',
  isPlatform: false,
  canAccessPlatform: true,
  roles: ['Admin'],
  permissions: ['*'],
}

const mockMenus: MenuRoute[] = [
  {
    path: '/workbench',
    name: 'Workbench',
    component: 'views/workbench/dashboard/index',
    meta: { title: '工作台', icon: 'lucide:layout-dashboard', order: 0, affixTab: true },
    children: [
      { path: '/workbench/dashboard', name: 'WorkbenchDashboard', component: 'views/workbench/dashboard/index', meta: { title: '仪表盘', icon: 'lucide:activity', order: 0 } },
      { path: '/workbench/inbox', name: 'WorkbenchInbox', component: 'views/workbench/inbox/index', meta: { title: '收件箱', icon: 'lucide:inbox', order: 1 } },
      { path: '/workbench/widgets', name: 'WorkbenchWidgets', component: 'views/workbench/widgets/index', meta: { title: '小组件', icon: 'lucide:widget', order: 2 } },
    ],
  },
  {
    path: '/identity',
    name: 'Identity',
    component: 'views/identity/user/index',
    meta: { title: '身份权限', icon: 'lucide:shield', order: 1 },
    children: [
      { path: '/identity/user', name: 'IdentityUser', component: 'views/identity/user/index', meta: { title: '用户管理', icon: 'lucide:users', order: 0 } },
      { path: '/identity/role', name: 'IdentityRole', component: 'views/identity/role/index', meta: { title: '角色管理', icon: 'lucide:user-check', order: 1 } },
      { path: '/identity/org', name: 'IdentityOrg', component: 'views/identity/org/index', meta: { title: '组织管理', icon: 'lucide:building-2', order: 2 } },
      { path: '/identity/permission', name: 'IdentityPermission', component: 'views/identity/permission/index', meta: { title: '权限管理', icon: 'lucide:lock', order: 3 } },
      { path: '/identity/authorization', name: 'IdentityAuthorization', component: 'views/identity/authorization/index', meta: { title: '授权管理', icon: 'lucide:key-round', order: 4 } },
      { path: '/identity/field-security', name: 'IdentityFieldSecurity', component: 'views/identity/field-security/index', meta: { title: '字段安全', icon: 'lucide:scan-eye', order: 5 } },
      { path: '/identity/online-user', name: 'IdentityOnlineUser', component: 'views/identity/online-user/index', meta: { title: '在线用户', icon: 'lucide:users-round', order: 6 } },
    ],
  },
  {
    path: '/tenant',
    name: 'Tenant',
    component: 'views/tenant/list/index',
    meta: { title: '租户管理', icon: 'lucide:building', order: 2 },
    children: [
      { path: '/tenant/list', name: 'TenantList', component: 'views/tenant/list/index', meta: { title: '租户列表', icon: 'lucide:list', order: 0 } },
      { path: '/tenant/edition', name: 'TenantEdition', component: 'views/tenant/edition/index', meta: { title: '版本管理', icon: 'lucide:package', order: 1 } },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: 'views/setting/config/index',
    meta: { title: '系统设置', icon: 'lucide:settings', order: 3 },
    children: [
      { path: '/setting/menu', name: 'SettingMenu', component: 'views/setting/menu/index', meta: { title: '菜单管理', icon: 'lucide:menu', order: 0 } },
      { path: '/setting/dict', name: 'SettingDict', component: 'views/setting/dict/index', meta: { title: '字典管理', icon: 'lucide:book-open', order: 1 } },
      { path: '/setting/config', name: 'SettingConfig', component: 'views/setting/config/index', meta: { title: '配置管理', icon: 'lucide:sliders-horizontal', order: 2 } },
      { path: '/setting/cache', name: 'SettingCache', component: 'views/setting/cache/index', meta: { title: '缓存管理', icon: 'lucide:database', order: 3 } },
      { path: '/setting/job', name: 'SettingJob', component: 'views/setting/job/index', meta: { title: '任务调度', icon: 'lucide:timer', order: 4 } },
      { path: '/setting/server', name: 'SettingServer', component: 'views/setting/server/index', meta: { title: '服务器监控', icon: 'lucide:server', order: 5 } },
      { path: '/setting/version', name: 'SettingVersion', component: 'views/setting/version/index', meta: { title: '版本管理', icon: 'lucide:git-branch', order: 6 } },
    ],
  },
  {
    path: '/log',
    name: 'Log',
    component: 'views/log/access/index',
    meta: { title: '日志管理', icon: 'lucide:file-text', order: 4 },
    children: [
      { path: '/log/access', name: 'LogAccess', component: 'views/log/access/index', meta: { title: '访问日志', icon: 'lucide:log-in', order: 0 } },
      { path: '/log/operation', name: 'LogOperation', component: 'views/log/operation/index', meta: { title: '操作日志', icon: 'lucide:terminal', order: 1 } },
      { path: '/log/login', name: 'LogLogin', component: 'views/log/login/index', meta: { title: '登录日志', icon: 'lucide:log-in', order: 2 } },
      { path: '/log/exception', name: 'LogException', component: 'views/log/exception/index', meta: { title: '异常日志', icon: 'lucide:alert-triangle', order: 3 } },
      { path: '/log/api', name: 'LogApi', component: 'views/log/api/index', meta: { title: 'API日志', icon: 'lucide:code', order: 4 } },
      { path: '/log/diff', name: 'LogDiff', component: 'views/log/diff/index', meta: { title: '变更日志', icon: 'lucide:git-compare', order: 5 } },
    ],
  },
  {
    path: '/approval',
    name: 'Approval',
    component: 'views/approval/review/index',
    meta: { title: '审批管理', icon: 'lucide:check-circle', order: 5 },
    children: [
      { path: '/approval/review', name: 'ApprovalReview', component: 'views/approval/review/index', meta: { title: '审批列表', icon: 'lucide:clipboard-list', order: 0 } },
      { path: '/approval/constraint', name: 'ApprovalConstraint', component: 'views/approval/constraint/index', meta: { title: '审批约束', icon: 'lucide:shield-alert', order: 1 } },
    ],
  },
  {
    path: '/message',
    name: 'Message',
    component: 'views/message/notification/index',
    meta: { title: '消息中心', icon: 'lucide:message-square', order: 6 },
    children: [
      { path: '/message/notification', name: 'MessageNotification', component: 'views/message/notification/index', meta: { title: '通知管理', icon: 'lucide:bell', order: 0 } },
      { path: '/message/template', name: 'MessageTemplate', component: 'views/message/template/index', meta: { title: '消息模板', icon: 'lucide:file-text', order: 1 } },
      { path: '/message/record', name: 'MessageRecord', component: 'views/message/record/index', meta: { title: '消息记录', icon: 'lucide:history', order: 2 } },
    ],
  },
  {
    path: '/file',
    name: 'File',
    component: 'views/file/storage/index',
    meta: { title: '文件管理', icon: 'lucide:folder', order: 7 },
    children: [
      { path: '/file/storage', name: 'FileStorage', component: 'views/file/storage/index', meta: { title: '文件存储', icon: 'lucide:hard-drive', order: 0 } },
      { path: '/file/library', name: 'FileLibrary', component: 'views/file/library/index', meta: { title: '文件库', icon: 'lucide:folder-open', order: 1 } },
      { path: '/file/export-center', name: 'FileExportCenter', component: 'views/file/export-center/index', meta: { title: '导出中心', icon: 'lucide:download', order: 2 } },
    ],
  },
  {
    path: '/openapi',
    name: 'OpenApi',
    component: 'views/openapi/app/index',
    meta: { title: '开放接口', icon: 'lucide:plug', order: 8 },
    children: [
      { path: '/openapi/app', name: 'OpenApiApp', component: 'views/openapi/app/index', meta: { title: '应用管理', icon: 'lucide:app-window', order: 0 } },
    ],
  },
  {
    path: '/develop',
    name: 'Develop',
    component: 'views/develop/code-gen/index',
    meta: { title: '开发工具', icon: 'lucide:code', order: 9 },
    children: [
      { path: '/develop/code-gen', name: 'DevelopCodeGen', component: 'views/develop/code-gen/index', meta: { title: '代码生成', icon: 'lucide:file-code', order: 0 } },
    ],
  },
  {
    path: '/editor-demo',
    name: 'EditorDemo',
    component: '_core/editor-demo/index',
    meta: { title: '编辑器演示', icon: 'lucide:file-pen-line', order: 10 },
  },
  {
    path: '/about/project',
    name: 'AboutProject',
    component: '_core/about/index',
    meta: { title: '关于项目', icon: 'lucide:info', order: 11 },
  },
]

export const mockPermissionInfo: PermissionInfo = {
  roles: ['Admin'],
  permissions: ['*'],
  menus: mockMenus,
}

// ==================== Mock 响应 ====================

export function mockLoginResponse(_username: string): LoginResponse {
  return {
    requiresTwoFactor: false,
    token: mockToken,
  }
}

export function mock2FALoginResponse(_username: string): LoginResponse {
  return {
    requiresTwoFactor: true,
    availableTwoFactorMethods: ['totp', 'email'],
    twoFactorMethod: 'totp',
    codeSent: false,
    token: null,
  }
}
