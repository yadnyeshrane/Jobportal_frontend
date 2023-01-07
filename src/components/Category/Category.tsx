import Header from "../Header";
import Topbar from "../Topbar";

const jobsData = [1, 2, 3, 4, 5, 6];

const Category = () => {
    return (
        <>
            <div className="container">                                      
                <div className="input-group mt-2" >
                    <select className="form-control" id="inputGroupSelect04" defaultValue="0">
                        <option value="">Choose...</option>
                        <option value="0">All</option>
                        <option value="1">IT</option>
                        <option value="3">HR</option>
                        <option value="2">Marketing</option>
                    </select>
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary bltn-block"
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                {jobsData.map((data) => (
                    <div className="card my-2" key={data}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {`< Job Title / Position >`}
                            </h5>
                            <h6 className="card-title">{`< Company Name >`}</h6>

                            <div>
                                <i className="bi bi-briefcase" />
                                &nbsp;
                                {`< Experience >`} |&nbsp;&nbsp;
                                <i className="bi bi-cash" />
                                &nbsp;
                                {`< Salery >`} |&nbsp;&nbsp;
                                <i className="bi bi-geo-alt" />
                                &nbsp;
                                {`< location >`}&nbsp;
                            </div>
                            <div>
                                <i className="bi bi-briefcase" />
                                &nbsp;
                                {`< vaccency >`} |&nbsp;&nbsp;
                                <i className="bi bi-cash" />
                                &nbsp;
                                {`< company Email >`} |&nbsp;&nbsp;
                            </div>

                            <p className="card-text">{`< Other text info >`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Category;
