import { Route, Redirect } from 'react-router-dom';

/**
 * UnlogRoute render component if isLog=false, otherwise redirect to last url
 * @param {Boolean} isLogin flag is login
 * @return {Component} render component or redirect
 */
const UnlogRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{ pathname: props.history.entries[props.history.entries.length - 2].pathname,
	state:    { from: props.location } }}/>
    )
  )}/>
);

export default UnlogRoute;
