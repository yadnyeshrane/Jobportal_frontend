import Category from "../Category/Category";
import Header from "../Header";
import Topbar from "../Topbar";
import Resume from "./Resume";

function EmployeeSec() {


    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div className="d-flex">
                    <Resume />
                    <Category />
                </div>
            </div>
        </>
    );
}

export default EmployeeSec;
