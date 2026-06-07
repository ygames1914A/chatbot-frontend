import React, { useContext, useEffect, useState } from "react";
import { AiContext } from "../context/AiResponse";

export default function Chatfield() {
    const { aiResponse, setAiResponse, userResponse, setUserResponse } =
        useContext(AiContext);
    const [mergedArray, setMergedArray] = useState([]);

    useEffect(() => {
        setMergedArray([]);
        userResponse.forEach((item, index) => {
            // console.log(item);
            setMergedArray((prev) => [...prev, item]);
            if (index < aiResponse.length) {
                
                setMergedArray((prev) => [...prev, aiResponse[index]]);
            }
        });
    }, [aiResponse, userResponse]);

    useEffect(() => {
      console.log(mergedArray);

    }, [mergedArray])
    

    return (
        <>
            <div className="container mx-auto overflow-y-auto flex-1 p-4 flex flex-col gap-y-4">
                {mergedArray.map((element, index) => {
                    // ${element.role === "user" ? "float-right":null}
                    // console.log(element);
                    return (
                        <>
                            <div
                                key={index}
                                className={`p-4 rounded-2xl 
                                    ${element.role === "user" ? "self-end bg-[#0b82fe]  text-white" : ""}
                                    ${element.role === "assistant" ? "bg-[#e9e8eb]" : ""}
                                    `}
                            >
                                {element.content}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
