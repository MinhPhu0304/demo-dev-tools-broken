import { combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { AppDockHistoryState, appDockHistoryReducer } from './appDockHistory';
import { CurrentAppState, currentAppReducer } from './currentAppReducer';

export interface RootState {
    counter: CounterState;
    currentApp: CurrentAppState;
    appDockHistory: AppDockHistoryState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer,
    currentApp: currentAppReducer,
    appDockHistory: appDockHistoryReducer,
});
