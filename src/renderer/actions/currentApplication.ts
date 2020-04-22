import { Action, ActionCreator } from 'redux';

export const CHANGE_APP = 'CHANGE_APP';

export interface ChangeAppAction extends Action {
    type: 'CHANGE_APP';
    payload: {
        appName: string;
    };
}

export const changeApp: ActionCreator<ChangeAppAction> = (appName: string) => {
    return {
        type: 'CHANGE_APP',
        payload: {
            appName,
        },
    };
};

export type CurrentAppAction = ChangeAppAction;
