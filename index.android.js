 /* 
 Action - an object that tells the reducer how to change its data
 Reducer - a function that returns some data
 State - data for our app to use
 Store - an object that holds the application's data (reducer && state)
 
 example:
 Action - turn 'asdf' into an array of characters
 Reducer - if the action's type is 'split', i will take a string of 
 characters and turn it into an array
 State - ['a', 's', 'd', 'f']
 */

 /* 
 const reducer = (state = [], action) => {
if (action.type === 'split_string') {
	return action.payload.split('');
} else if (action.type === 'add_character') {
return [ ...state, action.payload ];
}
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string', 
  payload: 'asdf' 
};

store.dispatch(action);

store.getState();

const action2 = { 
  type: 'add_character', 
  payload: 'a' 
};

store.dispatch(action2);
store.getState();
 */
import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('tech', () => App);
