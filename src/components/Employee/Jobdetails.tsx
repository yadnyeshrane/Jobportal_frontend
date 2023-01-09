import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getJobdetails } from "../appi";
import Header from "../Header";
import Topbar from "../Topbar";

function Jobdetails() {
    const [searchParams] = useSearchParams();
    const[data,setData]=useState();
  
  useEffect(()=>{
    var code:any = searchParams.get("id"); // "1234"

    async function getjobdetailsData(){
  let res=await getJobdetails(code);
  console.log("Response")
  if(res.status === 200){
    //setData(res.msg)
  }
    }
    getjobdetailsData()
  },[])
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div className="mt-2">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <p>
                                        <strong>
                                            Node.js Developer -
                                            Redis/Microservices Architecture
                                        </strong>
                                    </p>
                                    <span>Appscrip</span>
                                    <div>
                                        <p>
                                            <i className="bi bi-briefcase-fill" />
                                            &nbsp;&nbsp;1-2 years
                                        </p>
                                        <p>
                                            <i className="bi bi-cash" />
                                            &nbsp;&nbsp;Not disclosed
                                        </p>
                                        <p>
                                            <i className="bi bi-geo-alt-fill" />
                                            &nbsp;&nbsp; Mumbai Bhnadup west
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                   
                                    <div>
                                        <p>
                                            <strong>Job desceiption</strong>: &nbsp;&nbsp;
                                            <p>
                                                Mandatory : - Node.JS, Knowledge
                                                of various Node.JS packages like
                                                passport JS, JWT, etc, Ajax,
                                                Java Script, HTML, CSS,
                                                Responsive Web Design, MongoDB,
                                                Web sockets, promises, async
                                                await, asynchronous programming.
                                                Good to have : - Knowledge of
                                                REDIS, micro-service
                                                architecture, MQTT, cluster
                                                module, worker concept, Message
                                                queues like Rabbit MQ, Kafka,
                                                3rd party API integrations like
                                                payment gateways, email API's,
                                                SMS API's., Swagger, Chai,
                                                Mocha, nock.Js. - Knowledge of
                                                GIT management, Continuous
                                                Integration and Continuous
                                                Development practices. Soft
                                                Skills : - Strong communication
                                                skills, high spirited, eager to
                                                learn, able to perform in a high
                                                pressure environment
                                            </p>
                                        </p>
                                        <p>
                                            <strong>Job Requirements</strong>: &nbsp;&nbsp;
                                            <p>
                                                Mandatory : - Node.JS, Knowledge
                                                of various Node.JS packages like
                                                passport JS, JWT, etc, Ajax,
                                                Java Script, HTML, CSS,
                                                Responsive Web Design, MongoDB,
                                                Web sockets, promises, async
                                                await, asynchronous programming.
                                                Good to have : - Knowledge of
                                                REDIS, micro-service
                                                architecture, MQTT, cluster
                                                module, worker concept, Message
                                                queues like Rabbit MQ, Kafka,
                                                3rd party API integrations like
                                                payment gateways, email API's,
                                                SMS API's., Swagger, Chai,
                                                Mocha, nock.Js. - Knowledge of
                                                GIT management, Continuous
                                                Integration and Continuous
                                                Development practices. Soft
                                                Skills : - Strong communication
                                                skills, high spirited, eager to
                                                learn, able to perform in a high
                                                pressure environment
                                            </p>
                                        </p>
                                        <div id="education" className="mt-4">
                                           <strong>Education:</strong>
                                           <p>Only Be and with similar degree required</p>
                                        </div>
                                        <div>
                                           <span style={{color:"#999"}}>Role:</span>
                                            <p style={{margin:"0px"}}>software developer</p>
                                            <span style={{color:"#999"}}>Industry Type:</span>
                                            <p style={{margin:"0px"}}>software developer</p>
                                            <span style={{color:"#999"}}>Employment Type:</span>
                                            <p style={{margin:"0px"}}>Full Time, Permanent</p>
                                        </div>


                                        <div id="keyskills" className="mt-2">
                                            <p>
                                                <strong>Key Skills:</strong>
                                            </p>
                                          <span style={{padding:'5px 10px' ,border:"1px solid #ccc",borderRadius:'15px'}}>
                                            <span>Mongo</span>
                                          </span>
                                          <a style={{padding:'5px 10px' ,border:"1px solid #ccc",borderRadius:'15px'}}>
                                            <span>Node </span>
                                          </a>
                                          <a style={{padding:'5px 10px' ,border:"1px solid #ccc",borderRadius:'15px'}}>
                                            <span>Redis</span>
                                          </a>
                                          <a style={{padding:'5px 10px' ,border:"1px solid #ccc",borderRadius:'15px'}}>
                                            <span>Sql</span>
                                          </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <p>
                                        <strong>
                                          Compony Info
                                        </strong>
                                    </p>
                                    <span>Appscrip</span>
                                    <div>
                                    <span style={{color:"#999"}}>Adress:</span>
                                            <p style={{margin:"0px"}}>Company Adress</p>
                                            <span style={{color:"#999"}}>Email:</span>
                                            <p style={{margin:"0px"}}>CompanyEmail</p>
                                            <span style={{color:"#999"}}>Mobileno:</span>
                                            <p style={{margin:"0px"}}>9987654321</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobdetails;
