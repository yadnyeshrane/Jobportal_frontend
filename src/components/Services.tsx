import React from "react";

function Services() {
    const categories = [
        {
            id: 1,
            name: "Home",
            summery:
                "Imact provides free services like posting a job,creating a job, providing civil services.These services can avail by anyone which are completely free..!",
            href: "/category",
        },
        {
            id: 1,
            name: "Profile",
            summery:
                "A profile info where user can see his profile and if needed he can update the profie.Profile is manditory for using our services so go huury up please update it fast .",
            href: "/category",
        },
        {
            id: 1,
            name: "Employye",
            summery:
                "A Employee section where a partiuclar user can update his professionald details & he can avail the free services provided by impact by accepting terms and condition",
            href: "/category",
        },
        {
            id: 1,
            name: "Employyer",
            summery:
                "A Employer is one who can create a job .Creating a job is completely free!",
            href: "/category",
        },
        {
            id: 1,
            name: "IT",
            summery:
                "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
            href: "/category",
        },
        {
            id: 1,
            name: "IT",
            summery:
                "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
            href: "/category",
        },
    ];

    return (
        <>
            <section id="services" className="services sections-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Services</h2>
                        <p>
                            Aperiam dolorum et et wuia molestias qui eveniet
                            numquam nihil porro incidunt dolores placeat sunt id
                            nobis omnis tiledo stran delop
                        </p>
                    </div>
                    <div
                        className="row gy-4"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        {categories.map((data) => (
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item  position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity" />
                                    </div>
                                    <h3>{data.name}</h3>
                                    <p>{data.summery} </p>
                                    <a
                                        href={data.href}
                                        className="readmore stretched-link"
                                    >
                                        Read more
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="service-item  position-relative">
                                <div className="icon">
                                    <i className="bi bi-activity" />
                                </div>
                                <h3>Nesciunt Mete</h3>
                                <p>
                                    Provident nihil minus qui consequatur non
                                    omnis maiores. Eos accusantium minus dolores
                                    iure perferendis tempore et consequatur.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-broadcast" />
                                </div>
                                <h3>Eosle Commodi</h3>
                                <p>
                                    Ut autem aut autem non a. Sint sint sit
                                    facilis nam iusto sint. Libero corrupti
                                    neque eum hic non ut nesciunt dolorem.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-easel" />
                                </div>
                                <h3>Ledo Markt</h3>
                                <p>
                                    Ut excepturi voluptatem nisi sed. Quidem
                                    fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-bounding-box-circles" />
                                </div>
                                <h3>Asperiores Commodit</h3>
                                <p>
                                    Non et temporibus minus omnis sed dolor esse
                                    consequatur. Cupiditate sed error ea fuga
                                    sit provident adipisci neque.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-calendar4-week" />
                                </div>
                                <h3>Velit Doloremque</h3>
                                <p>
                                    Cumque et suscipit saepe. Est maiores autem
                                    enim facilis ut aut ipsam corporis aut. Sed
                                    animi at autem alias eius labore.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-chat-square-text" />
                                </div>
                                <h3>Dolori Architecto</h3>
                                <p>
                                    Hic molestias ea quibusdam eos. Fugiat enim
                                    doloremque aut neque non et debitis iure.
                                    Corrupti recusandae ducimus enim.
                                </p>
                                <a href="#" className="readmore stretched-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* End Our Services Section */}
        </>
    );
}

export default Services;
