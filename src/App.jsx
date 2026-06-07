import { Toaster } from "react-hot-toast";
import "./App.css";
import Chatfield from "./components/Chatfield";
import Inputfield from "./components/Inputfield";

function App() {
    return (
        <>
            <Toaster />
            <div className="h-svh flex flex-col">
                <Chatfield />
                <Inputfield />
            </div>
        </>
    );
}

export default App;
