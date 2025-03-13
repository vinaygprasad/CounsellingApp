import React, { useState } from "react";
import Modal from "../Components/Model";

export const Contact = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success modal
      setModal({ show: true, message: "Your message has been sent successfully!", type: "success" });

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Show error modal
      setModal({ show: true, message: "Failed to send your message. Please try again.", type: "error" });
    }
  };


  return (
    <div className="bg-[#F5F1E9] text-gray-900 text-[18px] md:text-[20px]">
      {/* Hero Section */}
      <section className="pt-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#1F3D1A]">Get in Touch</h1>
        <h2 className="text-2xl font-medium text-[#5B5438] mt-4 mb-12">
          Reach Out for Support and Guidance
        </h2>
      </section>

      {/* Contact Form */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#1F3D1A] text-center mb-6">
            Send a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#A3865E] focus:border-[#A3865E]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#A3865E] focus:border-[#A3865E]"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#A3865E] focus:border-[#A3865E]"
                placeholder="Your Mobile Number"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#A3865E] focus:border-[#A3865E]"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#A3865E] focus:border-[#A3865E]"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#A3865E] text-white font-medium cursor-pointer px-6 py-3 rounded-lg shadow-md text-lg hover:bg-[#8B6D4E] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {modal.show && <Modal message={modal.message} type={modal.type} onClose={() => setModal({ show: false })} />}

      {/* Contact Information */}
      <section className="py-16 px-6 bg-[#DED3BF] flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#1F3D1A] text-center">
          Reach Me Directly
        </h2>
        <p className="mt-4 text-lg text-center">
          Connect with me through the following channels:
        </p>

        <div className="mt-8 space-y-6 text-lg flex flex-col items-start">
    {/* Email */}
    <div className="flex items-center space-x-3">
      <i className="fas fa-envelope text-[#1F3D1A] text-2xl"></i>
      <a href="mailto:nandhanakrishna.official@gamil.com">
        nandhanakrishna.official@gamil.com
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-3">
      <i className="fas fa-phone text-[#1F3D1A] text-2xl"></i>
      <p className="text-lg">+91 7012670933</p>
    </div>

    {/* Instagram */}
    <div className="flex items-center space-x-3">
      <i className="fab fa-instagram text-[#1F3D1A] text-2xl"></i>
      <a href="https://instagram.com/nandhana_krishna" target="_blank" rel="noopener noreferrer">
        @nandhana_krishna
      </a>
    </div>
  </div>
      </section>
    </div>
  );
};
