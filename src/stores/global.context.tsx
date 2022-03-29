import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { PostDto } from '../services/post/post.dto';

type StateGlobal = {
    order?: string;
    post?: PostDto | any;
}

const defaultState: StateGlobal = {
    order: 'all',
    post: {}
};

export enum ActionGlobalType {
    UPDATE_CATEGORY = 'Update category list',
    SET_POST = 'Set active post',
}

export type Action =
    | { type: ActionGlobalType.UPDATE_CATEGORY; payload: string }
    | { type: ActionGlobalType.SET_POST; payload: PostDto };

export const reducer = (state: StateGlobal, action: Action) => {
    switch (action.type) {
        case ActionGlobalType.UPDATE_CATEGORY:
            return { ...state, ...{ order: action.payload } };
        case ActionGlobalType.SET_POST:
            return { ...state, ...{ post: action.payload } };
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
    return <GlobalContext.Provider value={{ state, dispatch }} children={children}/>;
};
