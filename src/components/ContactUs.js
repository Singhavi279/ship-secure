import React, { useState } from 'react'

export const ContactUs = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: 0,
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let entries = JSON.parse(localStorage.getItem('queries')) || []
        entries.push(formData)
        localStorage.setItem('queries', JSON.stringify(formData))
        alert("Registred you query")
        setFormData({
            name: "",
            email: "",
            phone: 0,
            message: "",
        })
    }
    return (


        <section class="contact_section" id={id} style={{ paddingBottom: "75px" }}>
            <div class="container layout_padding2-top" >
                <div class="row" style={{ justifyContent: 'center' }} >
                    {/* <div class="col-md-6" style={{border: "2px solid red"}}>
                        <img src='images/ContactUsTruck.jpg' style={{objectFit: 'cover', maxWidth: "100%"}}/>
                    </div> */}

                    <div class="col-md-6">
                        <h2 class="heading_style" style={{marginBottom: "10px"}}>
                            Contact us
                        </h2>
                        <div class="contact_form-container">
                            <form action="">
                                <div>
                                    <input type="text" name="name" value={formData.name || ''} onChange={(e) => handleChange(e)} placeholder="Your Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" value={formData.email || ''} placeholder="Your Email" onChange={(e) => handleChange(e)} />
                                </div>
                                <div>
                                    <input type="number" name="phone" value={formData.phone || ''} placeholder="Your Phone" onChange={(e) => handleChange(e)} />
                                </div>

                                <div>
                                    <textarea type="text" name="message" value={formData.message || ''} class="message_input" placeholder="Message" onChange={(e) => handleChange(e)} />
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="submit" onClick={(e) => handleSubmit(e)} class="">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
