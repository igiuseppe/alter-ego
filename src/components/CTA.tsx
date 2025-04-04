
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your actual Google Sheets script URL
      const sheetScriptURL = "https://script.google.com/macros/s/AKfycbzEqPShVxOuQjt-uR1is2YEksoWSQGYdBra_BZyiKbbRL0YanYixkgxv4TusjNYMZ4r/exec";
      
      const response = await fetch(sheetScriptURL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors mode
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "website_waitlist"
        }),
      });
      
      // Since we're using no-cors, we won't get a proper response status
      // Instead, assume it was successful and show confirmation
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      setEmail('');
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-10">
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alterego-lavender"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-alterego-lavender hover:bg-purple-300 text-primary-foreground px-8 py-6 text-lg"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
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
