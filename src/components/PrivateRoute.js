import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isSignedIn } from '../recoil/users';

function PrivateRoute({ component: Component, ...rest }) {
  const authed = useRecoilValue(isSignedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authed) {
          // User is logged in
          console.log(authed);
          return <Component {...props} />;
        } else {
          // User is not logged in so redirect to login screen
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
