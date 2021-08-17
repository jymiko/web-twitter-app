import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';
import History from './views/History';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" exact component={LoginForm} /> */}
        {/* <Route path={["/premium/:offerid"]} exact render={()=>isAuthenticated ? <Premium />: <Redirect to="/login"/>}/>
        <Route path={["/reader/:itemid"]} exact render={()=>isAuthenticated ? <Reader />: <Redirect to="/login"/>}/> */}
        <Route path={["/"]} exact component={App}/>
        <Route path={["/history"]} exact component={History}/>
        {/* <Route component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
