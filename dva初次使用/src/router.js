import React,{lazy,Suspense} from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
const Home = lazy(() =>import('./routes/pages/home'))
const Login = lazy(() =>import('./routes/pages/login'))

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterConfig;
