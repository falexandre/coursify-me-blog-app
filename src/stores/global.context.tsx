import React, { createContext, useReducer, ReactNode, useContext } from 'react';

type StateGlobal = {
    order: string;
}

const defaultState: StateGlobal = {
    order: 'all',
};

export enum ActionGlobalType {
    UPDATE_CATEGORY = 'Update category list',
}

export type Action =
    | { type: ActionGlobalType.UPDATE_CATEGORY; payload: StateGlobal };

export const reducer = (state: StateGlobal, action: Action) => {
    switch (action.type) {
        case ActionGlobalType.UPDATE_CATEGORY:
            return { ...state, ...{ order: action.payload } };
        default:
            throw new Error('Not among actions');
    }
};

export interface Store {
    state: StateGlobal;
    dispatch: React.Dispatch<Action>;
}

export const GlobalContext = createContext<Store>({ state: defaultState, dispatch: () => null });
export const useStateGlobalContext = () => useContext(GlobalContext);

type StateProvider = {
    children: ReactNode;
};

export const StateGlobalProvider = ({ children }: StateProvider) => {
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, defaultState);
    return <GlobalContext.Provider value={{ state, dispatch }} children={children} />;
};
