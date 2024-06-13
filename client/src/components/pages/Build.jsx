import React, { useState } from 'react';
import Heading from '../common/Heading';
import axios from 'axios';
import { BACKEND_URL } from "../../config";
import { toast } from 'react-toastify';

const Build = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // phone: '',
        projectDetails: '',
        budget: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isbudget = (budget) => {
        if (budget < 1500) return false;
        return true;
    }
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

        // validate project details input
        if (!formData.projectDetails) {
            newErrors.projectDetails = "Project details is required";
        } else if (formData.projectDetails.length <= 10) {
            newErrors.projectDetails = "Project details must contains 10 characters"
        } else if (formData.projectDetails.length > 500) {
            newErrors.projectDetails = "Project details cannot exceed 500 characters";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const newErrors = validateInputs();
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            try {
                await axios.post(`${BACKEND_URL}/build`, formData);
                setFormData({
                    name: '',
                    email: '',
                    // phone: '',
                    projectDetails: '',
                    budget: ''
                });
                toast.success("Message sent successfully");
            } catch (error) {
                toast.error("Message not sent");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section className="min-h-screen pt-16 flex justify-center items-center">
            <div className="p-8 w-full max-w-lg">
                <Heading title="Let's Build Your Website" />
                <form onSubmit={handleSubmit} className='bg-boxBg p-6 rounded-md flex flex-col gap-4 mt-8'>
                    <label className='flex flex-col gap-2'>
                        Your Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='py-2 px-4 rounded-md bg-[#ffffff2f] text-white border-[2px] border-transparent focus:border-dimWhite outline-none'
                            placeholder='Full Name'
                            required
                        />
                        {errors.name && <small className="text-red-400">{errors.name}</small>}
                    </label>
                    <label className='flex flex-col gap-2'>
                        Your Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='py-2 px-4 rounded-md bg-[#ffffff2f] text-white border-[2px] border-transparent focus:border-dimWhite outline-none'
                            placeholder='Email'
                            required
                        />
                        <small className='text-red-500'>Err</small>
                    </label>
                    {/* <label className='flex flex-col gap-2'>
                        Your Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className='py-2 px-4 rounded-md bg-[#ffffff2f] text-white border-[2px] border-transparent focus:border-dimWhite outline-none'
                            placeholder='Phone number'
                            required
                        />
                        <small className='text-red-500'>Err</small>
                    </label> */}
                    <label className='flex flex-col gap-2'>
                        Project Details:
                        <textarea
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            className='py-2 px-4 rounded-md bg-[#ffffff2f] text-white border-[2px] border-transparent focus:border-dimWhite outline-none'
                            placeholder='Project Details'
                            required
                        ></textarea>
                        <small className='text-red-500'>Err</small>
                    </label>
                    <label className='flex flex-col gap-2'>
                        Your budget (min: ₹1500):
                        <input
                            type="number"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className='py-2 px-4 rounded-md bg-[#ffffff2f] text-white border-[2px] border-transparent focus:border-dimWhite outline-none'
                            placeholder='Budget'
                            required
                        />
                        <small className='text-red-500'>Err</small>
                    </label>
                    <button
                        type='submit'
                        className="bg-secondary text-white py-2 mt-6 rounded-md text-xl w-full flex items-center justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Build;
