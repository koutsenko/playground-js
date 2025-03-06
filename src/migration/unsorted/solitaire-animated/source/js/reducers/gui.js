import constants from '../constants/app';

export default function(state, action) {
  if (state === undefined) {
    state = {
      locked: false
    };
  }

  switch (action.type) {
    case constants.LOCK_GUI:
      return {
        locked: true
      };
      
    case constants.UNLOCK_GUI:
      return {
        locked: false
      };

    default:
      return state;
  };
};
