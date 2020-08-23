import React,{useState} from 'react'
import { connect } from 'dva';
function Login(props) {
  const {dispatch,data} = props 
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  function getUserName (e) {
    setUserName(e.target.value)
  }
  function getPassword (e) {
    setPassword(e.target.value)
  }

  function login () {
    dispatch({
      type: 'loginStore/login',
      payload: {userName,password}
    })
  }
  return (
    <div>
      <div>
        <label> 用户名 </label>
        <input type="text" defaultValue={userName}
          onChange = {getUserName}
        />
      </div>
      <div>
        <label> 密码 </label>
        <input type="password" defaultValue={password}
          onChange = {getPassword}
        />
      </div>
      <div>
        <button onClick={login}> 登录 </button>
      </div>
    </div>
  )
}


export default connect(
  state => ({data: state.loginStore.loginData})
)(Login)