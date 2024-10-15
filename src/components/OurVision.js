import React from 'react'

export const OurVision = ({ id }) => {
  return (
    // Who are we
    <div class="layout_padding" id={id}>
      <section class="company_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 company_detail-container" >
                <div class="company_detail-box" >
                  <h3>
                    Company and Transport
                  </h3>
                  <p >
                    Shipsecure Transport Pvt. Ltd. is an Logistics service provider company to various Indian & Multinational Companies, with the help of tech enabled services like GPS and Sim based tracking facility. Shipsecure is an 2021 registered Logistics company with the attached fleet of over 400 Vehicles running PAN India.
                    24 x 7 Operations and control tower facility for live tracking of vehicles with the help of highly professionals in the team
                  </p>
                </div>
            </div>
            <div class="col-md-6" style={{ padding: "0", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src="images/croppedservice3.png" style={{width: "100%"}}alt="" class="img-fluid" />
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
