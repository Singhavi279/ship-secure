import React from 'react'

export const Footer = ({ id }) => {
  return (
    <section class="info_section" id={id} >
      <div class="container-fluid" >
        <div class="row" >
          <div class="col-md-4 info_logo" style={{ padding: "2%" }}>
            <div class="logo-box" >
              <img src="images/ShipSecureLogoFooterNoBG.png" alt="" />
              {/* <span>
              Ship Securex
            </span> */}
            </div>
            <p style={{ fontStyle: 'italic', color: 'black' }}>
              24x7 GPS Tracked
            </p>
            <div class="info_social">
              <div>
                <a href="">
                  <img src="images/facebookLogo.svg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/twitterLogo.svg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/instagramLogo.svg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/linkedinLogo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 info_address" style={{ padding: "2%" }}>
            <h5>
              Address
            </h5>
            <p>
              SHOP NO. 4, BHARAT DHARAM KANTA OPP. RAJA RANI FARM HOUSE GT ROAD LALKUAN GHAZIABAD UP – 201009
            </p>
            <p>
              <a href='tel:+919811132865'>
                (+91) 9811132865
              </a>
            </p>
            <p>
              <a href="tel:+919205203378">
                (+91) 9205203378
              </a>
            </p>
            <p>
              <a href="mailto:abhaya.kumar@shipsecuretpt.com">
                abhaya.kumar@shipsecuretpt.com
              </a>
            </p>
            <p>
              <a href="mailto:pramod.yadav@shipsecuretpt.com">
                pramod.yadav@shipsecuretpt.com
              </a>
            </p>
          </div>
          <div class="col-md-4 info_links" style={{ padding: "2%" }}>

            <div class="info_nav ">
              <nav class="">
                <ul>
                  <h5>
                    Links
                  </h5>
                  <li>
                    <a href="#home"> Home</a>
                  </li>
                  <li>
                    <a href="#aboutus">About</a>
                  </li>
                  <li>
                    <a href="#ourvision">Our vision</a>
                  </li>
                  <li>
                    <a href="#contactus">Contact Us</a>
                  </li>
                  <li>
                    <a href="#footer"> We are here</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>


      </div>
    </section>

  )
}
