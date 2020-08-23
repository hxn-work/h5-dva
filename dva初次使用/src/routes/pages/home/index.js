import React,{useEffect} from 'react'
import { connect } from 'dva';

function Home (props) {
  const {dispatch,lists} = props 
  useEffect(() => {
    dispatch({
      type: 'homeStore/getList',
      payload: 1
    })
  },[])
   
  function renderLists () {
    return lists.map(item => <li key={item.id}> {item.d_title} </li>)
  }
  return (
    <div>
      <ul>
        {renderLists()}
      </ul>
    </div>
  )
}

export default connect(
  state => ({lists: state.homeStore.lists })
)(Home)