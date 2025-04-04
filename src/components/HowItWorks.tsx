
import React from 'react';
import { Database, Users, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="h-12 w-12 text-primary-foreground" />,
      title: "Clone real interviews",
      description: "Start from actual conversation transcripts to create digital twins of your users that remember contexts and preferences."
    },
    {
      icon: <Users className="h-12 w-12 text-primary-foreground" />,
      title: "Generate custom user fleets",
      description: "Create cohorts of synthetic users with different backgrounds, goals, and behaviors to test your product from multiple perspectives."
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary-foreground" />,
      title: "Test ideas anytime",
      description: "No scheduling or recruiting needed. Run rapid tests, iterate on product concepts, and validate ideas in minutes, not weeks."
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How AlterEgo Works</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our platform makes user research continuous and accessible, turning real insights into reusable synthetic users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="bg-alterego-lavender p-4 rounded-xl inline-block mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-alterego-blue px-4 py-2 text-blue-700 font-medium">
            From real users to digital twins in minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
