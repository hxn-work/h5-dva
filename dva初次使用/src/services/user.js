import request from './../utils/request';
export function loginReq(data) {
  return request('http://59.110.226.77:3000/api/user/login',{
    method: 'POST',
    body: JSON.stringify(data)
  })
}