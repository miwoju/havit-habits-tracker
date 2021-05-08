import React, { createContext, useReducer, useContext } from "react";
import { version } from "../../package.json";

//Define the context

const initialState = {
    habitsData: [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title:
                "Drink Coffee In The Morning Today Because That's The Best Thing",
            icon: "coffee",
            streak: 5,
            goal: 10,
            completed: false,
            progress: 0,
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Weight Lift",
            icon: "dumbbell",
            streak: 0,
            goal: 10,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Brush Teeth",
            icon: "tooth",
            streak: 159,
            goal: 200,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1-471f-bd96-1455571e29d72",
            title: "Run",
            icon: "running",
            streak: 15,
            goal: 20,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1-471f-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 2500,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0rf-3da1-471f-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 3000,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a20f-3da1-471f-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 3000,
            completed: false,
            progress: 0,
        },
        {
            id: "58694af0f-3da1-471f-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 3000,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1g-471f-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 3000,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1-471fw-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            goal: 7,
            completed: false,
            progress: 0,
        },
        {
            id: "58694a0f-3da1-471fg-bd96-1455471e29d72",
            title:
                "Read A Book Because That's One Of The Best Things You Can Do",
            icon: "book-open",
            streak: 2401,
            // goal: 7,
            completed: false,
            progress: 0,
        },
    ],
};

const DataStateContext = createContext(initialState);
const DataDispatchContext = createContext();

const dataReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRIMOGEMS": {
            return { ...state, primogemsAmount: action.payload };
        }
        case "COMPLETE_HABIT": {
            const index = state.habitsData.findIndex(
                (habit) => habit.id === action.payload
            ); //finding index of the item
            const newArray = [...state.habitsData]; //making a new array
            newArray[index].completed = !newArray[index].completed; //changing value in the new array
            newArray[index].streak += 1;
            newArray[index].progress = (
                (newArray[index].streak / newArray[index].goal) *
                100
            ).toFixed(2);

            if (newArray[index].progress < 100) {
                newArray[index].progress = (
                    (newArray[index].streak / newArray[index].goal) *
                    100
                ).toFixed(2);
            } else {
                newArray[index].progress = 100;
            }

            return {
                ...state,
                habitsData: newArray,
            };
        }
        case "RESET_DATA": {
            return initialState;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        dataReducer,
        // loadData() ||
        initialState
    );

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
