import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';
import { Device } from '@/types/common';

export interface IUIState {
  device: {
    type: string;
    width: number;
  };
}

const initialState: IUIState = {
  device: {
    type: window.innerWidth >= 768 ? Device.desktop : Device.mobile,
    width: window.innerWidth,
  },
};

const uiReducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth >= 768 ? Device.desktop : Device.mobile,
      width: payload.deviceWidth,
    },
  })),
]);

export default uiReducer;
