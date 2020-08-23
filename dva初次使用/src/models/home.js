import {getHomeList} from '../services/homeService'
export default {
  namespace: 'homeStore',
  state: {
    lists: []
  },
  // dva采用了redux-saga 所以它用了新的actions处理方法
  // redux-saga专门用于处理异步的action
  effects: {
    // generator函数  异步处理为同步效果
    *getList ({payload},{call,put}) {
      console.log('getList')
      /* 
        * payload表示组件传递过来的数据
        * call是用于调用异步数据请求
        * put是用于将action发送给reducer
      */
      const result = yield call(getHomeList)
      yield put({type: 'GET_LIST',payload: result})
    }
  },
  reducers: {
    GET_LIST (state,action) {
      state.lists = action.payload.data.data.content
      return {...state}
    }
  }
}