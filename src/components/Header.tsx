// import React from "react";
// import { useNavigate } from "react-router-dom";

function Header() {
    // const navigate = useNavigate();
    // const handleProfileClick = () => {
    //     navigate("/profile");
    // };
    // const handleHomeClick = () => {
    //     navigate("/");
    // };
    return (
        <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a
                    href="/"
                    className="logo d-flex align-items-center"
                    // onClick={handleHomeClick}
                >
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1>
                        Impact<span>.</span>
                    </h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a
                                href="/"
                                className="headerItem"
                                // onClick={handleHomeClick}
                            >
                                Home
                            </a>
                        </li>
                        {/* <li><a href="#about">About</a></li>
          					<li><a href="#services">Services</a></li> */}

                        {localStorage.getItem("loggedInUser") ? (
                            <>
                                <li>
                                    <a
                                        className="headerItem"
                                        href="/createjob"
                                        // onClick={handleProfileClick}
                                    >
                                        CreateJob
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="headerItem"
                                        href="/employee"
                                        // onClick={handleProfileClick}
                                    >
                                        Employee
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="headerItem"
                                        href="/update_resume"
                                        // onClick={handleProfileClick}
                                    >
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="headerItem"
                                        href="/profile"
                                        // onClick={handleProfileClick}
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li
                                    onClick={() => {
                                        localStorage.removeItem("loggedInUser");
                                        localStorage.removeItem("userId");
                                    }}
                                >
                                    <a href="" className="headerItem">
                                        Logout
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <a href="/login" className="headerItem">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a href="/signup" className="headerItem">
                                        Register
                                    </a>
                                </li>
                            </>
                        )}
                        {/* <li><a href="#team">Team</a></li>
       					   <li><a href="blog.html">Blog</a></li> */}
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
       					   </li> */}
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </nav>
                {/* .navbar */}
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
            </div>
        </header>
        //   {/* End Header */}
    );
}

export default Header;
