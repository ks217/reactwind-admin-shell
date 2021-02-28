import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from './Layout';
// import useAuth and PrivateLayout
const PrivateRoute = ({ component: Component, header: header, ...rest }) => {
  const token = true;
  if (!token) return <Redirect to="/login" />;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout header={header}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default PrivateRoute;
