import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Chat from "./pages/Chat/Chat";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/chat" element={<Chat/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;