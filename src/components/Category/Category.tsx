import Header from "../Header";
import Topbar from "../Topbar";

const jobsData = [1, 2, 3, 4, 5, 6];

const Category = () => {
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                {jobsData.map(() => (
                    <div className="card my-2">
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
