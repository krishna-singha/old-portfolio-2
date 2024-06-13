import React, { useState } from 'react';
import Heading from '../common/Heading';
import styles from '../style';
import { BACKEND_URL } from "../../config"
import axios from "axios";
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const isEmail = (email) => {
        let atSymbol = email.indexOf('@');
        if (atSymbol < 1) return false;
        let dot = email.lastIndexOf('.');
        if (dot <= atSymbol + 2) return false;
        if (dot === email.length - 1) return false;
        return true;
    }

    const validateInputs = () => {
        const newErrors = {};

        // validate name input
        if (!formData.name) {
            newErrors.name = "Full name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must contains 3 characters"
        } else if (formData.name.length > 20) {
            newErrors.message = "Name cannot exceed 20 characters";
        }

        // validate email input
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!isEmail(formData.email)) {
            newErrors.email = "Email address is invalid";
        } else if (formData.email.length > 50) {
            newErrors.message = "Email cannot exceed 50 characters";
        }

        // validate message input
        if (!formData.message) {
            newErrors.message = "Message is required";
        } else if (formData.message.length <= 10) {
            newErrors.message = "Message must contains 10 characters"
        } else if (formData.message.length > 500) {
            newErrors.message = "Message cannot exceed 500 characters";
        }
        return newErrors;
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const newErrors = validateInputs();
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            try {
                await axios.post(`${BACKEND_URL}/contact`, formData);
                event.target.reset();
                toast.success("Message sent successfully");
            }
            catch (error) {
                toast.error("Message not sent");
            }
        } else {
            toast.error("Message not sent");
            setErrors(newErrors);
        }
    };

    return (
        <section className="px-4 pt-16 pb-8 min-h-[100vh] w-full flex flex-col items-center">
            <Heading title="Contact me" />
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8 items-center justify-between my-[2rem] ss:my-[5rem]">
                <div className="bg-boxBg rounded-md p-6 flex flex-col gap-8 h-fit">
                    <div>
                        <p className={`${styles.heading4} text-dimWhite`}>Let's discuss <br /> on something <span className="text-secondary">cool</span> <br /> together</p>
                    </div>
                    <div>
                        <a href="mailto:krishnasingha.dev@gmail.com" className={`${styles.paragraph}`}>
                            <i className="fa-solid fa-envelope mr-3"></i>
                            <span>krishnasingha.dev@gmail.com</span>
                        </a>
                    </div>
                    {/* <div>
                        <a href="https://wa.me/+916296189929" className={`${styles.paragraph}`}>
                            <i className="fa-solid fa-phone mr-3"></i>
                            <span>+91-6296189929</span>
                        </a>
                    </div> */}
                    <div className={`${styles.paragraph}`}>
                        <i className="fa-solid fa-location-dot mr-3"></i>
                        <span>Kharagpur, West Bengal</span>
                    </div>
                </div>

                <div className="bg-boxBg rounded-md p-6 max-w-[30rem] w-full h-fit">
                    <h1 className="text-center text-xl font-semibold text-dimWhite mb-6">Send Me Message</h1>
                    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 relative form-control">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                onChange={handleInput}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter full name"
                                className="bg-[#ffffff2f] text-white px-4 py-2 rounded-md border-[2px] border-transparent focus:border-dimWhite outline-none"
                            />
                            {errors.name && <small className="text-red-400">{errors.name}</small>}
                        </div>

                        <div className="relative flex flex-col gap-2 form-control">
                            <label htmlFor="email">Email:</label>
                            <input
                                onChange={handleInput}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="bg-[#ffffff2f] text-white px-4 py-2 rounded-md border-[2px] border-transparent focus:border-dimWhite outline-none"
                            />
                            {errors.email && <small className="text-red-400">{errors.email}</small>}
                        </div>

                        <div className="relative flex flex-col gap-2 form-control">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                onChange={handleInput}
                                id="message"
                                rows="7"
                                name="message"
                                placeholder="How can I help you?"
                                className="bg-[#ffffff2f] px-4 py-2 rounded-md text-white border-[2px] border-transparent focus:border-dimWhite outline-none"
                            ></textarea>
                            {errors.message && <small className="text-red-400">{errors.message}</small>}
                        </div>
                        <button type="submit" className="bg-secondary text-white py-2 mt-4 rounded-md text-xl w-full">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

