import { loginReq } from './../services/user';
export default {
  namespace: 'loginStore',
  state: {
    loginData: {}
  },
  effects: {
    *login ({payload},{call,put}) {
      const result = yield call(loginReq,payload)
      yield put({type: 'LOGIN',payload: result })
    }
  },
  subscriptions: {
    LOGIN ({ dispatch, history }, done) {
      const token = localStorage.getItem('token')

      if ( !token ) {
        history.push('/home')
      }
      console.log('dispatch',dispatch)
      console.log('history',history)
      console.log('done',done)
    }
  },
  reducers: {
    LOGIN (state,action) {
      state.loginData  = action.payload
      return {...state}
    }
  }
}