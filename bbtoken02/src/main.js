
import "@babel/polyfill";
import React from "react";
import dva from 'dva';
import createLoading from 'dva-loading';
import { routerRedux } from 'dva/router';
import createHistory from 'history/createBrowserHistory';


import home from './models/home';
import notice from './models/notice';
import exchange from './models/exchange';
import user from './models/user';
import globals from './models/global';
import help from './models/help';
import digiccy from './models/digiccy';
import news from './models/news';
import order from './models/order';
import business from './models/business';
import property from './models/property';
import trade from './models/trade';


import App from './app';
//import 'antd/lib/style/index.less';
import '@/assets/css/less/styles.less';



//热更新使用


const app = dva({
    history: createHistory()
});


// 2. Plugins
app.use(createLoading());

// 3. Model
//app.model(test);

app.model(home);
app.model(notice);
app.model(exchange);
app.model(user);
app.model(globals);
app.model(help);
app.model(digiccy);
app.model(news);
app.model(order);
app.model(business);
app.model(property);
app.model(trade);
// 4. Router
const { ConnectedRouter } = routerRedux;
const main = function RouterConfig({ history }) {
    return (
     <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>

    );
};
app.router(main);

// 5. Start
app.start('#app');

export default app._store; // eslint-disable-line
