import { createActionCreator } from 'deox';

import { UIActions } from './constants';

const uiActions = {
  setDevice: createActionCreator(UIActions.SET_DEVICE, (resolve) => (deviceWidth: number) => resolve({ deviceWidth })),
  resetActionStatus: createActionCreator(UIActions.RESET_ACTION_STATUS, (resolve) => (actionName: string) =>
    resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};

export default uiActions;
