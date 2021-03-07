import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
// import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import React from 'react';
function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login}></Route>
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          header="Dashboard"
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/projects"
          component={Project}
          header="Projects"
        ></PrivateRoute>
        {/* <Route exact path="/dashboard">
          <Layout key="1" header="Dashboard">
            <Dashboard />
          </Layout>
        </Route> */}
        {/* <Route exact path="/projects">
          <Layout key="2" header="Projects">
            <Project />
          </Layout>
        </Route> */}
        <Route path="/">
          <div className="min-h-screen flex flex-col justify-center text-gray-900 dark:text-gray-400 dark:bg-gray-900">
            <div className="text-center text-xl">&#x1F6AA; Page Not Found!</div>
            <div className="mt-4 flex justify-center">
              <Link
                to="/login"
                className="p-2 rounded text-xl text-gray-100 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-gray-300"
              >
                &#x1F3E1; Click here to go Home
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
