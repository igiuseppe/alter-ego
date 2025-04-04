
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-alterego-lavender/30 via-alterego-peach/20 to-alterego-mint/30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to transform your user research?</h2>
          <p className="paragraph mb-8 max-w-xl mx-auto">
            We're working with design-forward teams committed to better product discovery. Request early access to join our limited beta program.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alterego-lavender"
              />
              <Button className="bg-alterego-lavender hover:bg-purple-300 text-primary-foreground px-8 py-6 text-lg">
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We'll never share your email. Expect 1-2 updates per month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
