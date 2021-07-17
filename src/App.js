// import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => <Route path={route.pathname} {...route.props} key={route.pathname}>{route.component}</Route>)
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;