import { ChangeAppAction, CHANGE_APP } from '../actions/currentApplication';

export interface CurrentAppState {
    readonly appName: string | null;
}

const defaultState: CurrentAppState = {
    appName: null,
};

export function currentAppReducer(state = defaultState, action: ChangeAppAction) {
    switch (action.type) {
        case CHANGE_APP:
            return {
                ...state,
                appName: action.payload.appName,
            };

        default:
            return state;
    }
}
