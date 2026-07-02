import { LocalStorage } from './storage'

const WHITELIST_KEY = 'login_whitelist'

export interface WhitelistAccount {
  username: string
  label?: string
  addedAt: number
}

/** 测试账号 - 这些账号始终可以登录，不受白名单限制 */
const BYPASS_ACCOUNTS = ['1550098@163.com', '1660098@163.com']

/** 获取白名单列表 */
export function getWhitelist(): WhitelistAccount[] {
  return LocalStorage.get<WhitelistAccount[]>(WHITELIST_KEY) ?? []
}

/** 检查账号是否是测试账号（始终允许登录） */
export function isBypassAccount(username: string): boolean {
  return BYPASS_ACCOUNTS.some(account => account.toLowerCase() === username.toLowerCase())
}

/** 检查账号是否在白名单中（包括测试账号） */
export function isInWhitelist(username: string): boolean {
  if (isBypassAccount(username)) {
    return true
  }
  const list = getWhitelist()
  return list.some(item => item.username.toLowerCase() === username.toLowerCase())
}

/** 添加账号到白名单 */
export function addToWhitelist(username: string, label?: string): void {
  const list = getWhitelist()
  if (list.some(item => item.username.toLowerCase() === username.toLowerCase())) {
    return
  }
  list.push({ username, label, addedAt: Date.now() })
  LocalStorage.set(WHITELIST_KEY, list)
}

/** 从白名单中移除账号 */
export function removeFromWhitelist(username: string): void {
  const list = getWhitelist().filter(item => item.username.toLowerCase() !== username.toLowerCase())
  LocalStorage.set(WHITELIST_KEY, list)
}

/** 清空白名单 */
export function clearWhitelist(): void {
  LocalStorage.set(WHITELIST_KEY, [])
}

/** 获取测试账号列表（用于显示） */
export function getBypassAccounts(): string[] {
  return [...BYPASS_ACCOUNTS]
}
