import { useEffect, useState } from "react";

const testimonials = [
  { name: "John Doe", feedback: "This counseling session truly changed my life. Highly recommended!" },
  { name: "Jane Smith", feedback: "I felt heard and understood. The best support I’ve ever received." },
  { name: "Michael Lee", feedback: "Professional and compassionate approach. A wonderful experience!" },
  { name: "Sophia Davis", feedback: "Helped me gain clarity and peace of mind. Thank you so much!" },
];

export const Testimonial=()=> {
  const [animationDuration, setAnimationDuration] = useState("20s");

  useEffect(() => {
    // Adjust animation speed dynamically based on the number of testimonials
    const baseDuration = 5; // Base seconds per testimonial
    const duration = testimonials.length * baseDuration;
    setAnimationDuration(`${duration}s`);
  }, []);

  return (
    <div className="overflow-hidden bg-[#F5F1E8] py-6">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 whitespace-nowrap animate-marquee"
          style={{
            animationDuration: animationDuration, // Dynamic speed adjustment
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => ( // Duplicate for seamless loop
            <div
              key={index}
              className="bg-[#D4A373] text-white rounded-lg p-4 mx-2  shadow-md"
            >
              <p className="text-sm italic">"{testimonial.feedback}"</p>
              <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
