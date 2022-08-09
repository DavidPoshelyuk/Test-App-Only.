import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './Auth-reducer';



const rootReducer = combineReducers({
	authReducer,
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
