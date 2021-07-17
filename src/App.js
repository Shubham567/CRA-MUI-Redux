// import './App.css';
import { useEffect } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routes from './routes';
import {useSelector} from 'react-redux';

function App() {
  
  const appDetails = useSelector(state => state.AppReducer);

  useEffect(() => {
    document.title = appDetails.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) {
      metaDesc.content = appDetails.description;
    }
  }, [appDetails])

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