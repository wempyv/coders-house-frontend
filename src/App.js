import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';

const isAuth = true;
const user = {
  activated: false
}


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path='/authenticate' >
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
      </Switch>
    </BrowserRouter >
  );
}

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={({ location }) => {
      return isAuth ? (<Redirect to={{
        pathname: '/rooms',
        state: { from: location },
      }} />) : (children)
    }} />
  )
}

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={({ location }) => {
      return (
        !isAuth ? (<Redirect to={{ pathname: '/', state: { from: location } }} />) : isAuth && !user.activated ? (children) : <Redirect to={{ pathname: '/rooms', state: { from: location } }} />
      )
    }}>

    </Route>
  )
}

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={({ location }) => {
      return (
        !isAuth ? (<Redirect to={{ pathname: '/', state: { from: location } }} />) : isAuth && !user.activated ? (<Redirect to={{ pathname: '/active', state: { from: location } }} />) : <Redirect to={{ pathname: '/rooms', state: { from: location } }} />
      )
    }}>

    </Route>
  )
}

export default App;