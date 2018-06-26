import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'https://easy-mock.com/mock/5b236542f3c9fb2931a37f12/carbon/comparative',
    method: 'get',
    params
  })
}
