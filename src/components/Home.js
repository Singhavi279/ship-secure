import React from 'react'

export const Home = ({ id }) => {
    return (
        // Home.js
        <div class="hero_area" id={id}>
            <section class="header_section" >
                <div class="container-fluid container-fluid-responsive" style={{ backgroundImage: 'linear-gradient(to right,#e5e9ef 0%, #2a4792 35%)', backgroundColor: "#2A4792" }}>
                    <nav class="navbar navbar-expand-lg custom_nav-container d-lg-none" style={{display:'flex',justifyContent:'space-between', backgroundColor: "#2A4792"}}>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{margin:0}}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        
                        <div class="logo-box d-flex" style={{ backgroundImage: "linear-gradient(white,#E5E9EF)"}}>
                            <img src="images/ShipSecureLogoFooterNoBG.png" alt="" style={{ width: "250px", height: 'auto' }} />
                        </div>
                        <div class="collapse navbar-collapse py-2" id="navbarSupportedContent" style={{}}>
                            <ul class="navbar-nav " style={{alignItems: 'start'}}>
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="#home">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#aboutus"> About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#ourvision"> Our vision</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#contactus"> Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#footer"> Credentials</a>
                                </li>
                            </ul>
                        </div>


                    </nav>
                    <div class="header_container" >
                        <div class="logo-box" id="navbar_lg_left" style={{ display: 'flex' }}>
                            <img src="images/ShipSecureLogoFooterNoBG.png" alt="" style={{ width: "250px", height: "auto" }} />
                            {/* <span>
                                Ship Secure
                            </span> */}
                        </div>
                        <div id="navbar_lg_right">
                            <div class="header_top" >
                                <div class="header_top-contact">

                                    <a href="tel:9811132865" class="ml-4">
                                        <div>
                                            <img src="images/callLogoOrange.svg" alt="" />
                                        </div>
                                        <span class="text-white">
                                            9811132865
                                        </span>
                                    </a>
                                    <a href="mailto:abhaya.kumar@shipsecuretpt.com" class="ml-4">
                                        <div>
                                            <img src="images/mailLogoSolidOrange.svg" alt="" />
                                        </div>
                                        <span class="text-white">
                                            abhaya.kumar@shipsecuretpt.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="header_btm" style={{ left: "50px" }} >
                                <nav class="navbar navbar-expand-lg custom_nav-container ">

                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                                            <ul class="navbar-nav  ">
                                                <li class="nav-item active">
                                                    <a class="nav-link text-white" href="#home">Home <span class="sr-only">(current)</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link text-white" href="#aboutus"> About Us</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link text-white" href="#ourvision"> Our vision</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link text-white" href="#contactus"> Contact Us</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link text-white" href="#footer"> Credentials</a>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="slider_section" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div id="carouselExampleIndicators" class="carousel active" data-ride="carousel" style={{}}>
                    

                    <div className="carousel-inner" style={{}} >
                        {[
                            "Unbeatable Trucking & Transport Services",
                            "Premium Hauling & Logistics Solutions",
                            "Reliable Freight & Transport Services",
                            "Top-Tier Shipping & Delivery Services"
                        ].map((item, index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                    <div className="container">
                                        <div className="slider_item-container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="slider_item-detail">
                                                        <div>
                                                            <h1>{item}</h1>
                                                            <div className="d-flex">
                                                                <div>
                                                                    <a href="/#aboutus" className="read-btn">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="slider_img-box">
                                                        <img src="" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{justifyContent: 'center'}} >
                        <ol class="carousel-indicators" style={{position: "relative", marginTop: "5%", left: 0,
                        }}>
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                    </div>
                </div>
            </section>

        </div>
    )
}
