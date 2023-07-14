import React, { createContext, useState } from 'react';

export const MyIdContext = createContext();

export const MyIdContextProvider = ({ children }) => {

    // Alterar o ID do cart.
    const [id, setId] = useState(65);

    return (
        <MyIdContext.Provider value={{ id, setId }}>
            {children}
        </MyIdContext.Provider>
    )
}