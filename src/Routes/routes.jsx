import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<HomePage />}/>
    </Routes>
}