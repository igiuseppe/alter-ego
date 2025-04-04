
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="heading-xl mb-6">
                Interview smarter with <span className="gradient-text">synthetic users.</span>
              </h1>
              <p className="paragraph mb-8 text-lg">
                AlterEgo helps you simulate real user conversations, so you can learn faster, test deeper, and build better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-alterego-lavender hover:bg-purple-300 text-primary-foreground px-6 py-6 text-lg">
                  Try a demo
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-6 py-6 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch how it works
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-alterego-mint rounded-full filter blur-3xl opacity-50 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-alterego-peach rounded-full filter blur-3xl opacity-50 animate-float" style={{ animationDelay: "2s" }}></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10 animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-alterego-lavender flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">AE</span>
                  </div>
                  <div className="flex-1">
                    <p className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-md">
                      <span className="font-semibold">AlterEgo Assistant:</span> I'm simulating Sarah, 34, product manager at a healthcare startup. What would you like to know about her experience with your app?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-700">PM</span>
                  </div>
                  <div className="flex-1">
                    <p className="bg-blue-50 rounded-2xl rounded-tl-none p-4 max-w-md">
                      Sarah, what was your biggest challenge when trying to schedule appointments in our app?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-alterego-lavender flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">AE</span>
                  </div>
                  <div className="flex-1">
                    <p className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-md">
                      <span className="font-semibold">Sarah:</span> The biggest frustration was having to re-enter my insurance details every time. I expected the app to remember this between appointments since I'm logged in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
