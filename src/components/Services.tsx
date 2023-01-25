import React from "react";

function Services() {
    const categories = [
        {
            id: 1,
            name: "मुळ ठिकाण /गृह ",
            summery:
                "प्रभाव विनामूल्य सेवा प्रदान करते. जसे नोकरी नियुक्ती, नोकऱ्यांची उपलब्धता, तसेच नागरी सेवा प्रदान. या सेवेचा लाभ कोणीही विनामूल्य घेऊ शकतो.",
            href: "/",
        },
        {
            id: 2,
            name: "रूपरेखा",
            summery:
                "इथे वापरकर्ता स्वतःची रूपरेखा कधीही पाहू शकतो, तसेच गरज वाटल्यास तो लागलीच अद्यायावत सुद्धा करू शकतो. त्वरीत व लगेच अद्यायावत करा, कारण आमच्या सेवेचा लाभ घेण्यासाठी रुपरेखा अद्यायावत करणे अनिर्वाय आहे.",
            href: "/profile",
        },
        {
            id: 3,
            name: "नियोक्ता",
            summery:
                "एक नियोक्ता जो नोकऱ्या उपलब्ध करू शकतो व नोकरी उपलब्धता ही सेवा विनामुल्य आहे.",
            href: "/employee",
        },
        {
            id: 4,
            name: "नागरी सेवा",
            summery:
                "लष्करी, न्यायीक शाखा व निवडून आलेले राजकरणी सोडून राज्य प्रशासनाच्या कायमस्वरूपी व्यवसायीक शाखा. ",
            href: "/civil-services",
        },
        {
            id: 5,
            name: "विवाह",
            summery:
                "लग्न ज्याला आपण विवाह किंवा विवाह बंधन म्हणतो व ते सांस्कृतीकदृष्ट्या, कायदेशीर मान्यता दृष्ट्या जोडीदारांना ( नवरा-बायको ) एकसंध करते. विवाह हा नवरा बायको, त्यांची मुले व सासू-सासरे यांच्यात स्थापित अधिकार व दायित्वे निर्माण करतो.",
            href: "/matrimony",
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
