
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Circle, Book, Settings, Search } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">AlterEgo in Action</h2>
          <p className="paragraph max-w-2xl mx-auto">
            See how teams are using synthetic users to accelerate product development and gather deeper insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Demo 1: Transcript to Twin */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-alterego-blue p-4">
              <h3 className="font-semibold text-blue-900">Transcript to Twin</h3>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                </div>
                <p className="text-sm text-gray-500">Upload real interview transcript</p>
              </div>
              
              <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex mb-2">
                  <span className="font-medium mr-2">Interviewer:</span>
                  <p>What challenges do you face when using our dashboard?</p>
                </div>
                <div className="flex">
                  <span className="font-medium mr-2">User:</span>
                  <p>I can never find the export button when I need it, and I waste time looking for it.</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-alterego-lavender flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">AE</span>
                </div>
                <p className="text-sm text-gray-500">AlterEgo creates a digital twin</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between bg-alterego-mint rounded-t-lg p-3">
                  <div className="flex items-center">
                    <Book className="h-4 w-4 mr-2 text-green-700" />
                    <span className="text-sm font-medium text-green-800">User Model: Alex T.</span>
                  </div>
                  <div className="flex space-x-2">
                    <Settings className="h-4 w-4 text-green-700" />
                    <ChevronDown className="h-4 w-4 text-green-700" />
                  </div>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-b-lg">
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Identified pain points:</span> Navigation issues, feature discoverability
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Behavioral patterns:</span> Task-oriented, values efficiency
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Digital twin ready for:</span> UI testing, feature feedback, preference assessment
                  </p>
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
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="p-3 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mb-2"></div>
                    <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
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
