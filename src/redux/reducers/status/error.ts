import { getType } from 'deox';
import { AxiosError } from 'axios';

import { uiActions } from '@/redux/actions';

export type TErrorState = { [id: string]: null | Error | string };

interface IErrorPayload {
  error: Error | string;
}

interface IErrorAction {
  type: string;
  payload?: IErrorPayload;
}

interface IResetAction {
  type: string;
  payload: {
    actionName: string;
  };
}

const getErrorMatches = (actionType: string) => /(.*)_(REQUEST|FAILED)/.exec(actionType);

const errorReducer = (state: TErrorState = {}, action: IErrorAction | IResetAction): TErrorState => {
  if (action.type === getType(uiActions.resetActionStatus)) {
    const { actionName } = (action as IResetAction).payload;
    const { [actionName]: _, ...newState } = state;
    return newState;
  }

  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  let error = (action as IErrorAction).payload?.error;

  if (error instanceof Error) {
    const axiosErrorData = (error as AxiosError)?.response?.data;
    error =
      axiosErrorData?.message ||
      axiosErrorData?.error_description ||
      axiosErrorData?.errors?.[0].message ||
      error.message;
  }

  return {
    ...state,
    [requestName]: requestState === 'FAILED' && error ? error : null,
  };
};

export default errorReducer;
