import { Status } from 'Models/Status';
import {
  TOKEN_CONFIRM,
  TOKEN_CONFIRM_SUCCESS,
  TOKEN_CONFIRM_FAILURE,
  EXCHANGE_LIST,
  BASE_COIN_LIST,
  TOKEN_OWNERS_OFFERS,
  TOKEN_OWNERS_OFFERS_FAILURE,
  TOKEN_OWNERS_OFFERS_SUCCESS,
  MARKET_MAKER_OFFERS,
  MARKET_MAKER_OFFERS_SUCCESS,
  MARKET_MAKER_OFFERS_FAILURE,
  EXCHANGES_OFFERS,
  EXCHANGES_OFFERS_SUCCESS,
  EXCHANGES_OFFERS_FAILURE,
  IState,
  MARKET_MAKER_SETUP_DETAILS,
  MARKET_MAKER_SETUP_DETAILS_FAILURE,
  MARKET_MAKER_SETUP_DETAILS_SUCCESS,
  TOKEN_OWNERS_SETUP_DETAILS,
  TOKEN_OWNERS_SETUP_DETAILS_SUCCESS,
  TOKEN_OWNERS_SETUP_DETAILS_FAILURE,
  EXCHANGES_SETUP_DETAILS_SUCCESS,
  EXCHANGES_SETUP_DETAILS_FAILURE,
  EXCHANGES_SETUP_DETAILS,
  UPDATE_MARKET_MAKER_SETUPDETAILS,
  FETCH_VOTE_LIST,
  FETCH_VOTE_LIST_SUCCESS,
  FETCH_VOTE_LIST_FAILED,
  OCCURE_VOTING,
  OCCURE_VOTING_SUCCESS,
  OCCURE_VOTING_FAILED,
  UPDATE_TRADERS_SETUPDETAILS,
  TRADERS_SETUP_DETAILS_SUCCESS,
  TRADERS_SETUP_DETAILS,
  TRADERS_SETUP_DETAILS_FAILURE,
  TRADERS_OFFERS,
  TRADERS_OFFERS_SUCCESS,
  TRADERS_OFFERS_FAILURE,
  SAVE_TOKEN_WALLET_ADDRESS,
  SAVE_TOKEN_WALLET_ADDRESS_FAILED,
  SAVE_TOKEN_WALLET_ADDRESS_SUCCESS,
  FETCH_TOKEN_CREDIT,
  FETCH_TOKEN_CREDIT_SUCCESS,
  FETCH_TOKEN_CREDIT_FAILED
} from './types';

const initialState: IState = {
  status: new Status(),
};

export default (state, action) => {
  switch (action.type) {
    case TOKEN_CONFIRM:
      return {
        ...state,
        status: {
          loading: true,
        }
      };
    case TOKEN_CONFIRM_SUCCESS:
      return {
        ...state,
        status: { loading: false, success: true },
      };
    case TOKEN_CONFIRM_FAILURE:
      return {
        ...state,
        status: { loading: false, error: true },
      };
    case EXCHANGE_LIST:
     return {
       ...state,
       exchanges : action.payload
     };
    case BASE_COIN_LIST:
      return  {
        ...state,
        base_coin: action.payload
      }
    case TOKEN_OWNERS_OFFERS:
      return {
        ...state,
        tokenOwnersOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: {
            loading: true,
          }
        }
      };
    case TOKEN_OWNERS_OFFERS_SUCCESS:
      return {
        ...state,
        tokenOwnersOffers: {
          offers: action.payload,
          status: { loading: false, success: true },
        }
      };
    case TOKEN_OWNERS_OFFERS_FAILURE:
      return {
        ...state,
        tokenOwnersOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: { loading: false, error: true },
        }
      };
    case MARKET_MAKER_OFFERS:
      return {
        ...state,
        marketMakerOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: {
            loading: true,
          }
        }
      };
    case MARKET_MAKER_OFFERS_SUCCESS:
      return {
        ...state,
        marketMakerOffers: {
          offers: action.payload,
          status: { loading: false, success: true },
        }
      };
    case MARKET_MAKER_OFFERS_FAILURE:
      return {
        ...state,
        marketMakerOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: { loading: false, error: true },
        }
      };
    case EXCHANGES_OFFERS:
      return {
        ...state,
        marketMakerOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: {
            loading: true,
          }
        }
        
      };
    case EXCHANGES_OFFERS_SUCCESS:
      return {
        ...state,
        exchangesOffers: {
          offers: action.payload,
          status: { loading: false, success: true },
        } 
      };
    case EXCHANGES_OFFERS_FAILURE:
      return {
        ...state,
        exchangesOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: { loading: false, error: true },
        }
      };
    case TRADERS_OFFERS:
      return {
        ...state,
        tradersOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: {
            loading: true,
          }
        }
        
      };
    case TRADERS_OFFERS_SUCCESS:
      return {
        ...state,
        tradersOffers: {
          offers: action.payload,
          status: { loading: false, success: true },
        } 
      };
    case TRADERS_OFFERS_FAILURE:
      return {
        ...state,
        tradersOffers: {
          offers: {data: {
            awaitingOffers: [],
            eligibleOffers: [],
            incomingOffers: [],
            runningOffers: [],
          }},
          status: { loading: false, error: true },
        }
      };
    case MARKET_MAKER_SETUP_DETAILS:
      return {
        ...state,
        marketMakerSetupDetails: {
          setupDetails: {},
          status: { loading: true },
        }
      };
    case MARKET_MAKER_SETUP_DETAILS_FAILURE:
      return {
        ...state,
        marketMakerSetupDetails: {
          setupDetails: {},
          status: { loading: false, error: true },
        }
      };
    case MARKET_MAKER_SETUP_DETAILS_SUCCESS:
      return {
        ...state,
        marketMakerSetupDetails: {
          setupDetails: action.payload,
          status: { loading: false, success: true },
        }
      };
    case UPDATE_MARKET_MAKER_SETUPDETAILS:
      return {
        ...state,
        marketMakerSetupDetails: {
          setupDetails: {
            data: action.payload
          },
          status: { loading: false, success: true },
        }
      };
    case TOKEN_OWNERS_SETUP_DETAILS:
      return {
        ...state,
        tokenOwnersSetupDetails: {
          setupDetails: {},
          status: { loading: true },
        }
      };
    case TOKEN_OWNERS_SETUP_DETAILS_FAILURE:
      return {
        ...state,
        tokenOwnersSetupDetails: {
          setupDetails: {},
          status: { loading: false, error: true },
        }
      };
    case TOKEN_OWNERS_SETUP_DETAILS_SUCCESS:
      return {
        ...state,
        tokenOwnersSetupDetails: {
          setupDetails: action.payload,
          status: { loading: false, success: true },
        }
      };
    case EXCHANGES_SETUP_DETAILS:
      return {
        ...state,
        exchangesSetupDetails: {
          setupDetails: {},
          status: { loading: true },
        }
      };
    case EXCHANGES_SETUP_DETAILS_FAILURE:
      return {
        ...state,
        exchangesSetupDetails: {
          setupDetails: {},
          status: { loading: false, error: true },
        }
      };
    case EXCHANGES_SETUP_DETAILS_SUCCESS:
      return {
        ...state,
        exchangesSetupDetails: {
          setupDetails: action.payload,
          status: { loading: false, success: true },
        }
      };
    case TRADERS_SETUP_DETAILS:
      return {
        ...state,
        tradersSetupDetails: {
          setupDetails: {},
          status: { loading: true },
        }
      };
    case TRADERS_SETUP_DETAILS_FAILURE:
      return {
        ...state,
        tradersSetupDetails: {
          setupDetails: {},
          status: { loading: false, error: true },
        }
      };
    case TRADERS_SETUP_DETAILS_SUCCESS:
      return {
        ...state,
        tradersSetupDetails: {
          setupDetails: action.payload,
          status: { loading: false, success: true },
        }
      };
    case UPDATE_TRADERS_SETUPDETAILS:
      return {
        ...state,
        marketMakerSetupDetails: {
          setupDetails: {
            data: action.payload
          },
          status: { loading: false, success: true },
        }
      };
    case FETCH_VOTE_LIST:
      return {
        ...state,
        voteList: {
          votes: {},
          status: { loading: true },
        }
      };
    case FETCH_VOTE_LIST_FAILED:
      return {
        ...state,
        voteList: {
          ...state.voteList,
          status: { loading: false, error: true },
        }
      };
    case FETCH_VOTE_LIST_SUCCESS:
      return {
        ...state,
        voteList: {
          votes: action.payload,
          status: { loading: false, success: true },
        }
      };
    case OCCURE_VOTING:
      return {
        ...state,
        occureVote: {
          voting: {},
          status: { loading: true },
        }
      };
    case OCCURE_VOTING_FAILED:
      return {
        ...state,
        occureVote: {
          ...state.occureVote,
          status: { loading: false, error: true },
        }
      };
    case OCCURE_VOTING_SUCCESS:
      return {
        ...state,
        occureVote: {
          voting: action.payload,
          status: { loading: false, success: true },
        }
      };
    case SAVE_TOKEN_WALLET_ADDRESS:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          status: { loading: true },
        }
      };
    case SAVE_TOKEN_WALLET_ADDRESS_FAILED:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          status: { loading: false, error: true },
        }
      };
    case SAVE_TOKEN_WALLET_ADDRESS_SUCCESS:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          wallet: action.payload.data,
          status: { loading: false, success: true },
        }
      };
    case FETCH_TOKEN_CREDIT:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          status: { loading: true },
        }
      };
    case FETCH_TOKEN_CREDIT_FAILED:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          status: { loading: false, error: true },
        }
      };
    case FETCH_TOKEN_CREDIT_SUCCESS:
      return {
        ...state,
        tokenCreditData: {
          ...state.tokenCreditData,
          tokenCredit: action.payload.data,
          status: { loading: false, success: true },
        }
      };
    default:
      return {
        ...state,
      };
  }
};
