import React from 'react'

export const AboutUs = ({ id }) => {
    return (
        // About Section
        <section class="about_section layout_padding2-bottom" id={id}>
            <div class="container">
                <div class="row">
                    <div class="col" style={{padding: "10px 0"}}>
                        <h2 class="heading_style">
                            About Us
                        </h2>
                        <p>

                        </p>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">
                            <img src="images/indian_truck_ss.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-md-6 about_detail-container" >
                        <div class="about_detail-box" >
                            <h3>
                                Our Vision
                            </h3>
                            <p >
                                Our aim is to act as an indispensable partner to our clients by helping them build and maximize sustainable competitive advantages. We do this by helping them get their products to market quickly, efficiently, and safely. In addition to our expertly crafted and reliably delivered logistics solutions, our clients can rest assured that every interaction will be driven by integrity and respect, the fundamental principles of our business.
                            </p>    
                            <div class="d-flex  align-self-start">
                                <a href="" class="quote-btn about-btn">
                                    <span>
                                        Know More
                                    </span>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
