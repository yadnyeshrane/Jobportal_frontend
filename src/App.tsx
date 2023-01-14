// import logo from './logo.svg';
// import './App.css';
// import Topbar from "./components/Topbar";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Services from "./components/Services";
// import CardList from "./common/CardList";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditProfile from "./components/EditProfile";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import PrivateRoute from "./common/PrivateRoute";
import Category from "./components/Category/CategoryCard";
import CreateJob from "./components/Employyer/CreateJob";
import ResumeForm from "./components/Employee/ResumeForm";
import Resume from "./components/Employee/Resume";
import EmployeeSec from "./components/Employee/EmployeeSec";
import Jobdetails from "./components/Employee/Jobdetails";
import EmployeeList from "./components/Employyer/EmployeeList";
import CandidateDetails from "./components/Employyer/CandidateDetails";
import EmployerIndexpage from "./components/Employyer/EmployerIndexpage";
import CivilServicesIndex from "./components/CivilServices/CivilServicesIndex";
import MatrimonyIndexPage from "./components/Matrimony/MatrimonyIndexPage";

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
                    {/* <Route path="/createjob" element={<CreateJob />} /> */}
                    <Route path="/update_resume" element={<ResumeForm />} />
                    <Route path="/employee" element={<EmployeeSec />} />
                    <Route path="/employer" element={<EmployerIndexpage />} />
                    <Route path="/civil-services" element={<CivilServicesIndex />} />
                    <Route path="/matrimony" element={<MatrimonyIndexPage />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/jobdetails" element={<Jobdetails />} />
                    <Route path="/employeelist" element={<EmployeeList />} />
                    <Route path="/candidate-details" element={<CandidateDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>

        // </div>
    );
}

export default App;
