import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Assets/Nandhana.jpg";

export const About = () => {
  return (
    <div className="bg-[#F5F1E9] text-gray-900 text-[18px] md:text-[20px]">
      
      {/* Hero Section (Light Beige) */}
      <section className="py-20 px-6 bg-[#F5F1E9] text-center md:text-left">
        <h1 className="text-5xl font-bold text-[#1F3D1A] text-center">Meet Your Counselor</h1>
        <h2 className="text-2xl font-medium text-[#5B5438] mt-4 mb-12 text-center">
          A Safe Space to Heal and Grow
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* Image & Details */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <img
              src={avatar}
              alt="Nandhana Krishna"
              className="w-75 h-75 rounded-full border-4 border-[#A3865E]"
            />
            <h2 className="text-3xl font-bold text-[#1F3D1A] mt-6">Nandhana Krishna</h2>
            <p className="text-xl text-[#5B5438] mt-2">M.Sc. Counselling Psychology</p>
            <p className="mt-2 text-lg">Trainee Psychologist (Under Supervision)</p>
            <p className="mt-2 text-lg">Kristu Jayanti College, Bangalore</p>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 px-4 space-y-6">
            <p className="text-xl leading-relaxed">
              Counseling is not just about addressing difficulties—it’s about  
              <strong className="text-[#1D3C34]"> understanding yourself</strong>,  
              <strong className="text-[#1D3C34]"> building resilience</strong> and  
              <strong className="text-[#1D3C34]"> creating positive change</strong> in life.  
              I offer a  
                <strong className="text-[#A3865E]"> non-judgmental</strong>,
                <strong className="text-[#A3865E]">  supportive </strong>and 
                <strong className="text-[#A3865E]">  confidential space </strong>  
              where you can explore your thoughts, emotions and challenges freely.
            </p>
            <p className="text-xl leading-relaxed">
              My expertise includes helping individuals cope with  
              <strong className="text-[#1D3C34]"> stress</strong>,  
              <strong className="text-[#1D3C34]"> anxiety</strong>,  
              <strong className="text-[#1D3C34]"> relationships</strong>,  
              <strong className="text-[#1D3C34]"> academic pressures</strong> and  
              overall <strong className="text-[#1D3C34]"> mental well-being</strong>.</p>
              <p className="text-xl leading-relaxed">
              Let's work together toward <strong className="text-[#A3865E]"> healing and self-growth</strong>..!</p>
            
          </div>
        </div>
      </section>

      {/* Approach to Counseling (Dark Beige) */}
      <section className="py-20 px-6 bg-[#DED3BF]">
        <h2 className="text-4xl font-bold text-center text-[#1F3D1A] mb-10">
          My Approach to Counseling
        </h2>
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <p className="text-lg leading-relaxed">
            My approach is <strong>client-centered, empathetic, and non-judgmental</strong>.  
            I integrate different therapeutic models, including:
          </p>
          <ul className="list-disc list-inside mt-6 space-y-3 text-lg">
            <li><strong>Cognitive-Behavioral Therapy (CBT)</strong> – Identifying and changing negative thought patterns.</li>
            <li><strong>Mindfulness-Based Techniques</strong> – Cultivating awareness and reducing stress.</li>
            <li><strong>Solution-Focused Therapy</strong> – Finding strengths and practical solutions.</li>
            <li><strong>Person-Centered Therapy</strong> – Creating a safe space for self-exploration.</li>
          </ul>
          <p className="mt-6 leading-relaxed">
            Every individual is unique, and I tailor my approach to best suit  
            your personal needs and goals.
          </p>
        </div>
      </section>

      {/* Why Choose Counseling? (Light Beige) */}
      <section className="py-20 px-6 bg-[#F5F1E9]">
        <h2 className="text-4xl font-bold text-center text-[#1F3D1A] mb-10">
          Why Choose Counseling?
        </h2>
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Counseling is not just for those in crisis. It can be a tool for  
            <strong> self-awareness, emotional well-being, and personal development. </strong>  
            Some benefits include :
          </p>
          <ul className="list-disc list-inside mt-6 space-y-3 text-lg">
            <li>Gaining clarity and perspective on challenges.</li>
            <li>Improving emotional resilience and coping strategies.</li>
            <li>Enhancing communication and interpersonal skills.</li>
            <li>Building self-confidence and self-compassion.</li>
          </ul>
          <p className="mt-6 leading-relaxed">
            No matter where you are on your journey, I’m here to listen and support you.
          </p>
        </div>
      </section>

      {/* Call-to-Action (Dark Beige) */}
      <section className="py-20 px-6 bg-[#DED3BF] text-center">
        <h2 className="text-4xl font-bold text-[#1D3C34] mb-6">Ready to Begin?</h2>
        <p className="text-xl mb-8">Take the first step towards mental wellness today.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/book"
            className="bg-[#A3865E] text-white font-medium px-8 py-4 rounded-lg shadow-md text-lg hover:bg-[#8B6D4E] transition"
          >
            Book a Free Session
          </Link>
          <Link
            to="/contact"
            className="bg-[#5B5438] text-white font-medium px-8 py-4 rounded-lg shadow-md text-lg hover:bg-[#3D3225] transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};
