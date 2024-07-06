import React, { createContext, useContext, useReducer } from 'react';

// Create the DataLayer context
export const DataLayerContext = createContext();

// DataLayerProvider component
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Custom hook to access the DataLayer values
export const useDataLayerValue = () => useContext(DataLayerContext);
