import React, { createContext, useReducer, useContext } from "react";

//Define the context

const initialState = {
    isLoggedIn: false,
    currentTab: "today",
};

const globalReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGGED_IN": {
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        }
        case "SET_TAB": {
            return {
                ...state,
                currentTab: action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        globalReducer,
        // loadData() ||
        initialState
    );

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
