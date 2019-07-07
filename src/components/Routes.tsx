import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import GlobalMessage from 'Components/GlobalMessage';
import GlobalTooltip from 'Components/GlobalTooltip';
import ResetPassword from 'Components/PublicPages/ForgotPassword/ResetPassword';
import Signup from 'Components/PublicPages/Signup';
import SignupSuccess from 'Components/PublicPages/Signup/SignupSuccess';
import VerifyEmail from 'Components/PublicPages/VerifyEmail';
import SetupDetails from 'Components/SetupDetails';
// import Welcome from 'Components/Welcome';
import { isAuthenticated, isAdmin } from 'Utils/auth';
import Landing from 'Components/PublicPages/Landing';
import Pricing from 'Components/PublicPages/Pricing/Pricing';
import Blog from 'Components/PublicPages/Blog';
import BlogArticle from 'Components/PublicPages/Blog/Article';
import Article from 'Components/PublicPages/Articles/Article';
import TwoFactor from 'Components/PublicPages/Login/TwoFactor';
import PublicExchanges from 'Components/PublicPages/Exchanges';
import { getUserField } from 'Utils/auth';

import { createHashHistory } from 'history';
import ForgotPassword from 'Components/PublicPages/ForgotPassword';
import Login from 'Components/PublicPages/Login';
import Exchanges from 'Components/Exchanges';
import MainHeader from 'Partials/MainHeader';
import MarketMaker from 'Components/MarketMaker';
import TokenOwners from 'Components/TokenOwners';
import DataDashboard from 'Components/Admin/DataDashboard';
import AdminExchanges from 'Components/Admin/Exchanges';
import MarketMakerSetting from 'Components/MarketMakerSetting';
import Chart from 'Components/PublicPages/Chart';
import ComingSoon from 'Components/ComingSoon';
import TokenOwnerDashboard from 'Components/Dashboard/TokenOwner';
import MarketMakerDashboard from 'Components/Dashboard/MarketMaker';
import ExchangesDashboard from 'Components/Dashboard/Exchanges';
import TraderDashboard from 'Components/Dashboard/Trader';
import CommunityDashboard from 'Components/Dashboard/Community';
import ChatLogin from 'Components/ChatPanel/ChatLogin';
import Authentication from 'Components/Authentication';
import AdminSettings from 'Components/Admin/Settings';
import PreSignup from 'Components/PublicPages/Signup/PreSignup';
// import BuyBackEvent from 'Components/BuyBackEvent';

const env = require('Root/env.json');
(window as any).Intercom("boot", {
  app_id: env.intercomChatKey,
  name: getUserField('name'),
  email: getUserField('email'),
  city: getUserField('city'),
  country: getUserField('country'),
  phone: getUserField('phone'),
});

export const history = createHashHistory();


const Layout = (props) => (
  <div>
    <MainHeader {...props}/>
    {props.children}
  </div>
);

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Layout path={path}>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      )
    )}
  />
);

const ContentRoute = ({ component: Component, path, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
          <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      )
    )}
  />
);

const AdminRoute = ({ component: Component, path, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Layout path={path}>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      )
    )}
  />
);

const SetupRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      )
    )}
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Redirect to={{ pathname: '/setup-details/maket-maker', state: { from: props.location } }}/>
      ) : (
        <Component {...props} />
      )
    )}
  />
);

export default () => (
  <div>
    <Switch>
      {/* Routes that are available only to logged-out users */}
      <PublicRoute path="/login" exact component={Login}/>
      <PublicRoute path="/chatlogin" exact component={ChatLogin}/>
      <PublicRoute path="/pre-signup" exact component={PreSignup}/>
      <PublicRoute path="/signup/:referral?" exact component={Signup}/>
      <PublicRoute path="/signup-success" exact component={SignupSuccess}/>
      <PublicRoute path="/forgot-password" exact component={ForgotPassword}/>
      <PublicRoute path="/reset-password/:emailToken" exact component={ResetPassword}/>
      <PublicRoute path="/verify-email" exact component={VerifyEmail}/>
      <PublicRoute path="/two-factor" exact component={TwoFactor}/>
      <PublicRoute path="/public-exchanges" exact component={PublicExchanges}/>
      <PublicRoute path="/chart" exact component={Chart}/>
      <PublicRoute path="/coming-soon" exact component={ComingSoon}/>
      <SetupRoute path="/setup-details/:tab?" exact component={SetupDetails}/>
      <PrivateRoute path="/exchanges" exact component={Exchanges}/>
      <PrivateRoute path="/market-maker" exact component={MarketMaker}/>
      <PrivateRoute path="/token-owners" exact component={TokenOwners}/>
      <PrivateRoute path="/market-maker-setting" exact component={MarketMakerSetting}/>
      <PrivateRoute path="/dashboard/token-owner" exact component={TokenOwnerDashboard}/>
      <PrivateRoute path="/dashboard/market-maker" exact component={MarketMakerDashboard}/>
      <PrivateRoute path="/dashboard/exchanges" exact component={ExchangesDashboard}/>
      <PrivateRoute path="/dashboard/trader" exact component={TraderDashboard}/>
      <PrivateRoute path="/dashboard/community" exact component={CommunityDashboard}/>
      <ContentRoute path="/authentication" exact component={Authentication}/>
      {/* <ContentRoute path="/buy-back-event" exact component={BuyBackEvent}/> */}

      <AdminRoute path="/admin/data-dashboard" exact component={DataDashboard}/>
      <AdminRoute path="/admin/exchanges" exact component={AdminExchanges}/>
      <AdminRoute path="/admin/settings" exact component={AdminSettings}/>
      {/* Routes that are available for all */}
      <Route path="/:referral?" exact component={Landing}/>
      <Route path="/public/pricing" exact component={Pricing}/>
      {/* <Route path="/public/blog" exact component={Blog}/> */}
      <Route path="/public/blog/page/:page" exact component={Blog}/>
      <Route path="/public/blog/article/:slug" exact component={BlogArticle}/>
    </Switch>
    <Route component={GlobalMessage}/>
    <GlobalTooltip/>
  </div>
);
