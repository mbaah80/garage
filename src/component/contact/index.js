import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact-us">
            <p className="small">Contact</p>
            <h2>
                Get In Touch
            </h2>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="emailName">
                        <div className="form-group ">
                            <input type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group ">
                            <input type="email" className="input-right" name="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <input type="text" name="subject" placeholder="Your Subject" required/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;
