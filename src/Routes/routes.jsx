import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/search" element={<SearchPage />}/>
    </Routes>
}