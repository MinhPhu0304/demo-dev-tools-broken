/* eslint-disable no-case-declarations */
import { UpsertPayload, UPSERT_APP_URL, AppDockHistoryActions } from '../actions/appDockHistory';

export type AppDockHistoryState = UpsertPayload;

const defaultState: AppDockHistoryState = {};

export function appDockHistoryReducer(state = defaultState, action: AppDockHistoryActions) {
    switch (action.type) {
        case UPSERT_APP_URL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
