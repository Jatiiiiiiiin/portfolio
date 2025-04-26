import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ga1j5sm',
            'template_54yyw3d',
            form.current,
            '-1q7ybYIp_RbkkKyT'
        )
        .then((result) => {
            console.log('Message Sent:', result.text);
            alert("Message sent successfully! ✅");
            e.target.reset();
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <div className="contact-container">
            {/* Left Section */}
            <div className="contact-left">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-description">
                    I'm currently looking for internship opportunities in web development and software engineering. Feel free to reach out if you'd like to collaborate or discuss potential opportunities.
                </p>
                <div className="contact-info">
                    <div className="info-item">
                        <span className="material-icons">email</span>
                        <span>jatinjatinth@gmail.com</span> {/* Replace with your actual email */}
                    </div>
                    <div className="info-item">
                        <span className="material-icons">phone</span>
                        <span>+91 9719543817</span> {/* Replace with your actual phone number */}
                    </div>
                    <div className="info-item">
                        <span className="material-icons">locationn</span>
                        <span>Ghaziabad, Uttar-Pradesh</span> {/* Replace with your actual location */}
                    </div>
                </div>
                <div className="social-icons">
                    <i className="ri-github-fill"></i>
                    <i className="ri-linkedin-box-fill"></i>
                    <i className="ri-twitter-fill"></i>
                </div>
                <button className="contact-button">
                    <span>Contact Me</span>
                    <span className="material-icons"></span>
                </button>
            </div>

            {/* Right Section */}
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <input type="text" name="user_name" placeholder="Enter your name" className="form-input" required />
                        <input type="email" name="user_email" placeholder="Enter your email" className="form-input" required />
                    </div>
                    <input type="text" name="subject" placeholder="Enter subject" className="form-input full-width" required />
                    <textarea name="message" placeholder="Enter your message" className="form-textarea" required></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}