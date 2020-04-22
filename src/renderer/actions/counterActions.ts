import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface IncrementAction extends Action {
    type: 'INCREMENT';
}
export interface DecrementAction extends Action {
    type: 'DECREMENT';
    payload: number | null;
}

export const increment: ActionCreator<IncrementAction> = () => ({
    type: INCREMENT,
});

export const decrement: ActionCreator<DecrementAction> = () => {
    return {
        type: DECREMENT,
        payload: 1,
    };
};

export type CounterAction = IncrementAction | DecrementAction;
