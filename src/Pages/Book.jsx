import React, { useState } from "react";
import mentalHealth from "../Assets/mentalhealth.jpg";
import Modal from "../Components/Model";

export const Book = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    concern: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      
      // Simulating API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success modal
      setModal({ show: true, message: "Your session has been booked successfully!", type: "success" });

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        mobile: "",
        concern: "",
      });
    } catch (error) {
      // Show error modal
      setModal({ show: true, message: "Something went wrong. Please try again.", type: "error" });
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: "How do I book a session?",
      answer: "You can book a session by filling out the form above or contacting me directly.",
    },
    {
      question: "Is the session completely free?",
      answer: "Yes, this is a pro bono counseling service at no cost to you.",
    },
    {
      question: "How will I be contacted after booking?",
      answer: "I will reach out to you via email or phone to confirm your session details.",
    },
    {
      question: "What should I prepare for the session?",
      answer: "Just bring an open mind and any thoughts or concerns you'd like to discuss.",
    },
  ];

  return (
    <div className="bg-[#F5F1E9] text-gray-900 text-[18px] md:text-[20px]">
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#F5F1E9] text-center">
        <h1 className="text-5xl font-bold text-[#1F3D1A]">Book a Free Appointment</h1>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mt-8">
          {/* Text Left, Image Right */}
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-2xl font-medium text-[#5B5438] my-5">
              Taking the first step towards well-being
            </h2>
            <p className="text-xl leading-relaxed">
              Counseling is a step towards self-care. Book your free session today and let's work 
              towards your mental well-being.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src={mentalHealth} alt="Mental Health Illustration" className="w-full max-w-md rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 bg-[#DED3BF]">
        <h2 className="text-4xl font-bold text-[#1F3D1A] text-center mb-8">Fill in Your Details</h2>
        <form 
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3865E]"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3865E]"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3865E]"
              placeholder="+91 XXXXXXXXXX"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Your Concern</label>
            <textarea
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3865E]"
              placeholder="Briefly describe what you'd like to discuss..."
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#A3865E] text-white font-medium px-6 py-3 rounded-lg cursor-pointer shadow-md text-lg hover:bg-[#8B6D4E] transition w-full"
          >
            Submit
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#F5F1E9]">
        <h2 className="text-4xl font-bold text-[#1F3D1A] text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition duration-300"
            >
              <summary className="text-2xl font-semibold text-[#1F3D1A] cursor-pointer focus:outline-none">
                {faq.question}
              </summary>
              <p className="mt-3 text-lg text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {modal.show && <Modal message={modal.message} type={modal.type} onClose={() => setModal({ show: false })} />}

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[#DED3BF] text-center">
        <h2 className="text-3xl font-bold text-[#1F3D1A] mb-6">Need More Help?</h2>
        <p className="text-xl mb-8">Feel free to contact me for any additional questions.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="bg-[#A3865E] text-white font-medium px-8 py-4 rounded-lg shadow-md text-lg hover:bg-[#8B6D4E] transition"
          >
            Contact Me
          </a>
          <a
            href="/"
            className="bg-[#5B5438] text-white font-medium px-8 py-4 rounded-lg shadow-md text-lg hover:bg-[#3D3225] transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};
