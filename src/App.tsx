// import logo from './logo.svg';
// import './App.css';
// import Topbar from "./components/Topbar";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Services from "./components/Services";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditProfile from "./components/EditProfile";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import PrivateRoute from "./common/PrivateRoute";
import Category from "./components/Category/Category";
import CreateJob from "./components/Employyer/CreateJob";
import ResumeForm from "./components/Employee/ResumeForm";

function App() {
    return (
        // <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit_profile" element={<EditProfile />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/createjob" element={<CreateJob />} />
                    <Route path="/update_resume" element={<ResumeForm />} />
                </Route>
            </Routes>
        </BrowserRouter>

        // </div>
    );
}

export default App;
