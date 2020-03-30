import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configStore from "./store/storeConfig";
import MainPage from './components/Dashboard';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// include css
import './css/index.css';

var store = configStore();


ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            
            {/* <Route exact path="/pendingpage" component={PendingPage} />
            <Route path="/admin" component={AdminHome} />

            <Route path="/candidate" component={CandidateHome} />
            <Route path="/org" component={OrganisationHome} />

            <Route exact path="/change_password" component={ChangePassword} />
            <Route exact path="/change_password/:jtkn" component={ChangePassword}/> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();