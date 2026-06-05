import { Toaster } from "react-hot-toast";
import "./App.css";
import Chatfield from "./components/Chatfield";
import Inputfield from "./components/Inputfield";

function App() {
    return (
        <>
            <Toaster/>
            <Chatfield />
            <Inputfield />
        </>
    );
}

export default App;
