
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AlterEgo shortened our research cycles by weeks, letting us validate ideas with synthetic users that accurately represented our customer base.",
      author: "Future Customer",
      role: "Director of Product, Enterprise SaaS",
      imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "The ability to create cohorts of synthetic users with specific behaviors has transformed how we approach feature development.",
      author: "Future Customer",
      role: "UX Research Lead, Fintech Startup",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I was skeptical about synthetic users, but the insights we got were surprisingly nuanced and helped us catch issues we'd missed in our design.",
      author: "Future Customer",
      role: "Founder, Health Tech Platform",
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Teams Are Saying</h2>
          <p className="text-gray-500 italic">(Placeholder testimonials for future customers)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-alterego-lavender opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="paragraph mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
