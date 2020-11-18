import{createContext,
    useContext,
    useReducer } from 'react'

    //create  a context using createContext
    export const DataLayerContext = createContext();
    
    export const DataLayer =({initialState,reducer,children})=>(
         //Children is the component that is
         // wrapped within the DataLayer tag in index.js
         <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
             {children}
         </DataLayerContext.Provider>
    );

   export const useDataLayerValue = ()=> useContext(DataLayerContext);