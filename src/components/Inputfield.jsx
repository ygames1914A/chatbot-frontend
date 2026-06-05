import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AiContext } from "../context/AiResponse";
import axios from "axios";
import toast from "react-hot-toast";

export default function Inputfield() {
    const {  setAiResponse, setUserResponse } =
        useContext(AiContext);
    const [isloading, setisLoading] = useState(false);
    async function messageHandler(prop) {
        if (prop.message.trim() != "") {
            try {
                setisLoading(true);
                // const response = await ollama.chat({
                //     model: "qwen2.5-coder:1.5b",
                //     messages: [{ role: "user", content: prop.message }],
                // });
                const { data } = await axios.post("https://chatbot-backend-global.vercel.app/ai", {
                    // model: "qwen2.5-coder:1.5b",
                    // stream: false,
                    prompt: prop.message,
                    
                });
                console.log(data);
                
                setUserResponse((prev) => [
                    ...prev,
                    { role: "user", content: prop.message },
                ]);
                // console.log(prop);
                setAiResponse((prev) => [...prev,  data]);
                // console.log(response.message);
                formik.values.message = "";
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.content)
            } finally {
                setisLoading(false);
            }
        } else {
            toast.error("Please enter a message");
        }
    }

    // useEffect(() => {
    //     console.log(userResponse);
    // }, [userResponse]);

    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: messageHandler,
    });

    return (
        <>
            <div className="container h-[10vh] mx-auto py-4">
                <form onSubmit={formik.handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        className="border-2 border-black w-full outline-none rounded-2xl p-2"
                    />
                    <button
                        type="submit"
                        className="p-4 bg-indigo-500 rounded-2xl text-white"
                        disabled={isloading}
                    >
                        {!isloading ? "Submit" : "Loading..."}
                    </button>
                </form>
            </div>
        </>
    );
}
