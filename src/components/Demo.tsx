
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Circle, Book, Settings, Search, MessageCircle, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Demo = () => {
  return (
    <section id="demo" className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">AlterEgo in Action</h2>
          <p className="paragraph max-w-2xl mx-auto">
            See how teams are using synthetic users to accelerate product development and gather deeper insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Demo 1: Digital Twin */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-alterego-blue p-4">
              <h3 className="font-semibold text-blue-900">Digital Twin</h3>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                </div>
                <p className="text-sm text-gray-500">Upload real interview transcript</p>
              </div>
              
              <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex mb-3">
                  <span className="font-medium mr-2">Interviewer:</span>
                  <p>What challenges do you face when using our analytics dashboard?</p>
                </div>
                <div className="flex mb-3">
                  <span className="font-medium mr-2">User:</span>
                  <p>The export button is really hard to find. I spend too much time looking for it whenever I need to share reports.</p>
                </div>
                <div className="flex mb-3">
                  <span className="font-medium mr-2">Interviewer:</span>
                  <p>How does that affect your workflow?</p>
                </div>
                <div className="flex mb-3">
                  <span className="font-medium mr-2">User:</span>
                  <p>It's frustrating because I'm usually under tight deadlines. I need to quickly generate reports for stakeholders, and this slows me down significantly.</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-alterego-lavender flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">AE</span>
                </div>
                <p className="text-sm text-gray-500">AlterEgo creates a digital twin with memory and behaviors</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between bg-alterego-mint rounded-t-lg p-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-green-700" />
                    <span className="text-sm font-medium text-green-800">Digital Twin: Alex T.</span>
                  </div>
                  <div className="flex space-x-2">
                    <Settings className="h-4 w-4 text-green-700" />
                    <ChevronDown className="h-4 w-4 text-green-700" />
                  </div>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-b-lg">
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Digital memory:</span> Remembers past frustrations with UI navigation and export functionality
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Behavioral patterns:</span> Task-oriented, values efficiency, prefers visual cues, works under tight deadlines
                  </p>
                  <p className="text-sm mb-3">
                    <span className="font-semibold">Twin capability:</span> Can answer questions about preferences, react to new designs, simulate usage patterns
                  </p>
                  
                  <div className="mt-4 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Ask Alex about your product..." 
                      className="border border-gray-200 rounded-l-lg py-2 px-3 flex-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Ask
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100">
                See full case study
              </Button>
            </div>
          </div>
          
          {/* Demo 2: Fleet Generation */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-alterego-peach p-4">
              <h3 className="font-semibold text-orange-900">Fleet Generation</h3>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-medium mb-3">Generate a fleet of synthetic users by defining parameters:</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded p-3 border border-gray-200">
                    <p className="text-sm font-medium">User types</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge bg-blue-100 text-blue-800">Beginners</span>
                      <span className="badge bg-blue-100 text-blue-800">Power users</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3 border border-gray-200">
                    <p className="text-sm font-medium">Demographics</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge bg-purple-100 text-purple-800">25-45 yrs</span>
                      <span className="badge bg-purple-100 text-purple-800">Tech industry</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3 border border-gray-200">
                    <p className="text-sm font-medium">Goals</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge bg-green-100 text-green-800">Data analysis</span>
                      <span className="badge bg-green-100 text-green-800">Reporting</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3 border border-gray-200">
                    <p className="text-sm font-medium">Pain points</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge bg-red-100 text-red-800">Time constraints</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <Search className="h-4 w-4 mr-2 text-gray-500" />
                  <p className="text-sm text-gray-500">AlterEgo generates a diverse user fleet</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    name: "Mei L.",
                    role: "Data Scientist",
                    summary: "Power user who needs batch exports and time-saving features"
                  },
                  {
                    name: "John D.",
                    role: "Marketing Manager",
                    summary: "Visual learner who prefers dashboard views"
                  },
                  {
                    name: "Priya K.",
                    role: "Product Owner",
                    summary: "Needs collaborative features and sharing options"
                  },
                  {
                    name: "Tom R.",
                    role: "Engineering Lead",
                    summary: "Technical user who wants API access and automation"
                  }
                ].map((user, index) => (
                  <Card key={index} className="overflow-hidden border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-alterego-lavender flex items-center justify-center mr-2">
                          <span className="text-xs font-bold text-primary-foreground">{user.name.split(' ')[0][0]}{user.name.split(' ')[1][0]}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.role}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{user.summary}</p>
                      <Button size="sm" variant="outline" className="w-full text-xs flex items-center justify-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat with user
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button className="w-full bg-orange-50 text-orange-700 hover:bg-orange-100">
                Explore fleet generation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
