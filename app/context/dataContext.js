import React, { createContext, useReducer, useContext } from "react";
import { version } from "../../package.json";

//Define the context

const initialState = {
    fatesAmount: { acquaint: 20, intertwined: 20 },
    primogemsAmount: 1600,
    spent: 0,
    results: [],
    history: [],
    bannerStats: {
        beginner: {
            //Keep this at 9 for first guaranteed Noelle
            pity4Star: 9,
            pity5Star: 0,
            beginnerRolled: 0,
            guaranteedFeatured4Star: true,
        },
        featured: {
            pity4Star: 0,
            pity5Star: 0,
            guaranteedFeatured5Star: true,
            guaranteedFeatured4Star: false,
        },
        weapon: {
            pity4Star: 0,
            pity5Star: 0,
            guaranteedFeatured5Star: false,
            guaranteedFeatured4Star: false,
        },
        permanent: {
            pity4Star: 0,
            pity5Star: 0,
        },
    },
};

const DataStateContext = createContext(initialState);
const DataDispatchContext = createContext();

const dataReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRIMOGEMS": {
            return { ...state, primogemsAmount: action.payload };
        }
        case "SET_SPENT": {
            return { ...state, spent: action.payload };
        }
        case "SET_FATES": {
            return { ...state, fatesAmount: action.payload };
        }
        case "SET_RESULTS": {
            return { ...state, results: action.payload };
        }
        case "SET_PITY": {
            return { ...state, bannerStats: action.payload };
        }
        case "SET_HISTORY": {
            return { ...state, history: action.payload };
        }
        case "RESET_DATA": {
            return initialState;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

// function objectsHaveSameKeys(...objects) {
//     const allKeys = objects.reduce(
//         (keys, object) => keys.concat(Object.keys(object)),
//         []
//     );
//     const union = new Set(allKeys);
//     return objects.every((object) => union.size === Object.keys(object).length);
// }

// const loadData = () => {
//     const data = JSON.parse(localStorage.getItem("userData"));
//     localStorage.removeItem("history");

//     if (
//         !localStorage.getItem("version") ||
//         localStorage.getItem("version") !== version
//     ) {
//         // localStorage.clear();
//         localStorage.removeItem("globalData");
//         localStorage.removeItem("version");

//         localStorage.setItem("version", version);
//         return false;
//     }

//     if (!data || !initialState) {
//         return false;
//     } else if (!objectsHaveSameKeys(data, initialState)) {
//         return false;
//     }
//     return data;
// };

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        dataReducer,
        // loadData() ||
        initialState
    );

    // const { history } = state;
    // localStorage.setItem("userData", JSON.stringify(state));

    return (
        <DataDispatchContext.Provider value={dispatch}>
            <DataStateContext.Provider value={state}>
                {children}
            </DataStateContext.Provider>
        </DataDispatchContext.Provider>
    );
};

export const useDataStateContext = () => useContext(DataStateContext);
export const useDataDispatchContext = () => useContext(DataDispatchContext);
