import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action) {
  
  switch(action.type) {
    case FETCH_WEATHER:
      console.log('disp:', action.payload.data);
      // return state.push(action.payload.data);

      // ** return new instance of state ** ES5
      // return state.concat([action.payload.data]);

      // ** return new instance of state ** ES6
      return [action.payload.data, ...state];
  }
  return state;
};