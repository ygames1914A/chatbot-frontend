import React, { createContext, useState } from "react";

export const AiContext = createContext();

export default function AiResponse({ children }) {
    const [aiResponse, setAiResponse] = useState([]);

    const [userResponse, setUserResponse] = useState([]);

    return (
        <AiContext.Provider
            value={{ aiResponse, setAiResponse, userResponse, setUserResponse }}
        >
            {children}
        </AiContext.Provider>
    );
}
