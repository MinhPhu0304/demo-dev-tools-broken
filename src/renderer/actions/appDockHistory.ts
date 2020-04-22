import { Action, ActionCreator } from 'redux';

export const UPSERT_APP_URL = 'UPSERT_APP_URL';
export type UpsertPayload = {
    [key: string]: string;
};

export interface UpsertAppDockURLAction extends Action {
    type: 'UPSERT_APP_URL';
    payload: UpsertPayload;
}

export const upsertAppDockURL: ActionCreator<UpsertAppDockURLAction> = (payload: UpsertPayload) => {
    return {
        type: UPSERT_APP_URL,
        payload,
    };
};

export type AppDockHistoryActions = UpsertAppDockURLAction;
