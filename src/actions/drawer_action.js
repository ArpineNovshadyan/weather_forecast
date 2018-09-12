import {} from './types.js';

export const CloseDrawer  = (state) => {
   return {
       type: 'CLICK_BUTTON',
       open: state
   }
}