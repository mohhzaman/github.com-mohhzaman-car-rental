import React from 'react';
import { DollarSign, Shield, Calendar } from 'lucide-react';

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Premium Earnings',
    description: 'Earn up to $2,500/month sharing your luxury vehicle'
  },
  {
    icon: Shield,
    title: 'Full Protection',
    description: '$2M liability insurance and premium vehicle coverage'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Complete control over your vehicle availability'
  }
];

export default function HostPromo() {
  return (
    <section className="py-20 bg-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Join Our Network</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-luxury-cream mt-2">
              Share Your Luxury Vehicle,<br />
              <span className="text-gold">Maximize Your Returns</span>
            </h2>
            <p className="text-xl mb-8 text-gray-400">
              Join our exclusive network of luxury vehicle hosts and turn your premium asset into a profitable venture.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="luxury-button px-8 py-3 rounded-sm font-semibold">
                Start Hosting
              </button>
              <button className="px-8 py-3 rounded-sm font-semibold border border-gold text-gold hover:bg-gold/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="luxury-card p-6 rounded-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-sm bg-gold/10">
                    <benefit.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-luxury-cream">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
