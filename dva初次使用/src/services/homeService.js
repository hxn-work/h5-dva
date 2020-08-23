import request from './../utils/request';
export function getHomeList () {
  return request('http://59.110.226.77:3000/api/list/hot?cid=17')
}