
import React from 'react';
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "No recruiting",
      description: "Skip the scheduling hassle and lengthy recruiting cycles."
    },
    {
      title: "Customizable behavior",
      description: "Adjust user personas, goals, and preferences on demand."
    },
    {
      title: "Repeatable, reliable",
      description: "Run the same tests with consistent parameters for better comparison."
    },
    {
      title: "Based on real data",
      description: "Synthetic users built from actual interviews, not guesswork or assumptions."
    }
  ];

  return (
    <section id="benefits" className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="heading-lg mb-6">Why AlterEgo > Static Personas</h2>
              <p className="paragraph mb-8">
                Traditional personas are static documents. AlterEgo creates dynamic, interactive user models that evolve and respond realistically.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-alterego-gray rounded-2xl p-8 relative">
              <div className="absolute -top-6 -right-6 bg-alterego-peach h-20 w-20 rounded-full opacity-40 blur-xl"></div>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-700 font-bold">SP</span>
                  </div>
                  <div>
                    <p className="font-medium">Static Persona</p>
                    <p className="text-sm text-gray-500">Document created months ago</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">"Sarah is a busy professional who values efficiency."</p>
                
                <div className="text-sm text-red-500 italic">
                  Can't ask follow-up questions or test new concepts
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-alterego-lavender rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-bold">AE</span>
                  </div>
                  <div>
                    <p className="font-medium">AlterEgo Synthetic User</p>
                    <p className="text-sm text-gray-500">Interactive and evolving</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-gray-700">
                    "As someone who manages a team of 8 people, I need to quickly approve requests while on the go. Your notification system is frustrating because it doesn't group similar requests together."
                  </p>
                </div>
                
                <div className="text-sm text-green-600 italic">
                  Can discuss new features, remember past interactions, and provide contextual feedback
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
