import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Redirect exact from="/" to="/login" />
        <Route path="*">
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
