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
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/dashboard">
          <Layout header="Dashboard">
            <Dashboard />
          </Layout>
        </Route>
        <Route exact path="/projects">
          <Layout header="Projects">
            <Project />
          </Layout>
        </Route>
        <Route path="/">
          <div className="min-h-screen flex flex-col justify-center">
            <div>
              <h2 className="text-center text-xl text-gray-900">
                &#x1F6AA; Page Not Found!
              </h2>
              <Link to="/login">
                <h2 className="text-center text-xl text-gray-900 mt-4">
                  &#x1F3E1; Click here to go Home!
                </h2>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
