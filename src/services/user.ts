import request from '@/utils/request'
import qs from 'qs'

interface User {
  phone: string
  password: string
}
/**
 * 用户登录
 */
export const login = (data: User) => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/front/user/getInfo'
    // headers: { Authorization: store.state.user.access_token }
  })
}
