import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import root from './root';
import loginReducers from 'Components/PublicPages/Login/reducers';
import signupReducers from 'Components/PublicPages/Signup/reducers';
import publicBlogReducers from 'Components/PublicPages/Blog/reducers';
import publicPricingReducers from 'Components/PublicPages/Pricing/reducers';
import globalMessageReducers from 'Components/GlobalMessage/reducers';
import globalTooltipReducers from 'Components/GlobalTooltip/reducers';
import verifyEmailReducers from 'Components/PublicPages/VerifyEmail/reducers';
import forgotPasswordReducers from 'Components/PublicPages/ForgotPassword/reducers';
import twoFactorReducers from 'Components/PublicPages/Login/TwoFactor/reducers';
import setupDetailsReducers from 'Components/SetupDetails/reducers';
import marketMakerSettingReducers from 'Components/MarketMakerSetting/reducers';
import marketMakerReducers from 'Components/MarketMaker/reducers';
import exchangesReducers from 'Components/Exchanges/reducers';
import tokenOwnersReducers from 'Components/TokenOwners/reducers';
import shareReducers from 'Components/Share/reducers';
import processReducers from 'Components/Admin/Settings/reducers';
import historyReducers from 'Components/AutobotHistoryModal/reducers';

export default combineReducers({
  root,
  routing: routerReducer,
  form: formReducer,
  login: loginReducers,
  twoFactor: twoFactorReducers,
  globalMessage: globalMessageReducers,
  globalTooltip: globalTooltipReducers,
  verifyEmail: verifyEmailReducers,
  setupDetails: setupDetailsReducers,
  forgotPassword: forgotPasswordReducers,
  signup: signupReducers,
  publicBlog: publicBlogReducers,
  publicPricing: publicPricingReducers,
  marketMakerSetting: marketMakerSettingReducers,
  marketMaker: marketMakerReducers,
  tokenOwners: tokenOwnersReducers,
  exchanges: exchangesReducers,
  shareData: shareReducers,
  adminProcessData: processReducers,
  autobotHistoryData: historyReducers
});
