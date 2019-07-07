import { Status } from 'Models/Status';
import {
  SETUP_DETAILS,
  SETUP_DETAILS_SUCCESS,
  SETUP_DETAILS_FAILURE,
  IState,
} from './types';

const initialState: IState = {
  status: new Status(),
};

export default (state: IState = initialState, action) => {
  switch (action.type) {
    case SETUP_DETAILS:
      return {
        ...state,
        status: {
          loading: true,
        }
      };
    case SETUP_DETAILS_SUCCESS:
      return {
        ...state,
        status: { loading: false, success: true },
      };
    case SETUP_DETAILS_FAILURE:
      return {
        ...state,
        status: { loading: false, error: true },
      };
    default:
      return {
        ...state,
      };
  }
};
