import React from "react";
import { Link } from "react-router-dom";
import { Testimonial } from "../Components/Testimonial";
import avatar from "../Assets/Nandhana.jpg";
import session from "../Assets/Session.jpg";
import stress from "../Assets/Stress.jpg"

export const Home = () => {
  return (
    <div className="bg-[#F5F1E9] text-gray-900 text-[18px] md:text-[20px]">
 {/* Hero Section (Light) */}
<section className="py-20 px-6 bg-[#F5F1E9]">
  {/* Main Heading */}
  <h1 className="text-5xl mb-5 font-bold text-[#1F3D1A] text-center">
    Find Strength in Seeking Help
  </h1>

  {/* Subheading (Tagline) */}
  <h2 className="text-2xl font-medium text-[#5B5438] text-center mt-4 mb-10">
    Your Well-Being Matters
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left px-15">
      <p className="mt-4 text-xl leading-relaxed">
        Life’s challenges can feel overwhelming, but you don’t have to face them alone.  
        Counseling provides a safe and supportive environment where you can explore your thoughts,  
        emotions, and experiences with professional guidance.
      </p>
      <p className="mt-3 text-xl leading-relaxed">
        This <strong>free pro bono counseling</strong> is here to help you navigate stress,  
        work-life balance, relationships, academic concerns, and more.  
        Together, we can work towards clarity, healing, and self-growth.
      </p>
      <p className="mt-3 text-xl leading-relaxed">
        Taking the first step can be the hardest, but it is also the most powerful.  
        Reach out today and start your journey towards mental wellness.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/3 flex justify-center px-4">
     <img src={session} alt="Counseling Illustration" className="w-full rounded-lg h-80 shadow-lg" />
    </div>
  </div>
</section>


{/* Services Section */}
<section className="py-24 px-8 bg-[#DED3BF]">
  {/* Heading with More Padding */}
  <h2 className="text-5xl font-bold text-center text-[#1F3D1A] mb-12">
    Together We Can Work On
  </h2>

  {/* Services & Image Layout */}
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Services in Column Format with Dark Beige Pills */}
    <div className="flex flex-col gap-5 px-15 md:w-1/2">
      {[
        "Stress & Time Management",
        "Academic Pressures",
        "Workplace Issues",
        "Interpersonal & Intrapersonal Conflicts",
        "Anything That Bothers You",
      ].map((service, index) => (
        <span
          key={index}
          className="bg-[#A3865E] text-white text-lg text-center font-medium px-6 py-3 rounded-full shadow-md"
        >
          {service}
        </span>
      ))}
    </div>

    {/* Image (Right Side) */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={stress}
        alt="Counseling Representation"
        className="w-full max-w-sm rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Languages Section */}
<div className="pt-10 px-8 bg-[#DED3BF]">
  {/* Subheading */}
  <h2 className="text-3xl font-bold text-center text-[#1F3D1A] mb-8">
    Languages Offered
  </h2>

  {/* Language Cards */}
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {["English", "മലയാളം", "தமிழ்"].map((language, index) => (
      <div
        key={index}
        className="text-xl font-semibold px-8 py-6 text-center"
      >
        {language}
      </div>
    ))}
  </div>
</div>
</section>


      {/* How to Book a Session (Light) */}
      <section className="py-15 px-6 bg-[#F5F1E9]">
        <h2 className="text-4xl font-bold text-center text-[#1F3D1A] mb-8">
          How to Book a Free Session
        </h2>
        <p className="text-center text-lg mb-8">
          Taking the first step toward better mental health is easy.
        </p>
        <div className="flex flex-col items-center gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg">
            <h3 className="text-2xl font-semibold text-[#1F3D1A]">Option 1</h3>
            <p className="mt-4">
              Fill out the form in the{" "}
              <Link to="/book" className="text-[#A3865E] font-semibold">
                Book a Session
              </Link>{" "}
              section by providing your name, contact details, and a brief
              message about your concern.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg">
            <h3 className="text-2xl font-semibold text-[#1F3D1A]">Option 2</h3>
            <p className="mt-4">
              Visit the{" "}
              <Link to="/contact" className="text-[#A3865E] font-semibold">
                Contact
              </Link>{" "}
              section to send an inquiry or use the given contact details to
              reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* About the Counselor (Dark) */}
      <section className="bg-[#DED3BF] py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-[#1F3D1A] mb-8">
          About the Counselor
        </h2>
        <div className="flex flex-col items-center">
          <img src={avatar} alt="Nandhana Krishna" className="w-50 h-50 rounded-full border-4 border-[#A3865E]" />
          <h3 className="mt-5 text-2xl font-bold">Nandhana Krishna</h3>
          <p className="text-center mt-4 leading-relaxed">
            <strong>M.Sc. Counselling Psychology</strong> <br />
            Trainee Psychologist (Under Supervision) <br />
            Kristu Jayanti College, Bangalore
          </p>
        </div>
      </section>

      {/* Testimonials Component (Light) */}
      <section className="py-20 px-6 bg-[#F5F1E9]">
        <h2 className="text-4xl font-bold text-center text-[#1F3D1A] mb-8">
          What Clients Say
        </h2>
        <Testimonial />
      </section>
    </div>
  );
};
