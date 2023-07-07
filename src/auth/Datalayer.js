import React,{createContext,useContext,useReducer} from 'react'

export const DatalayerContext = createContext();
export const Datalayer = ({initialstate,reducer,children}) =>(
    <DatalayerContext.Provider value={useReducer(reducer,initialstate)}>
    {children}
    </DatalayerContext.Provider>
);
export const useDatatlayerValue = () => useContext(DatalayerContext);