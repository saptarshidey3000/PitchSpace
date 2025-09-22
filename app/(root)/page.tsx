import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-grid-pattern py-20 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-5 text-center">
          {/* Main Heading */}
          <div className="heading-gradient mb-8">
            PITCH YOUR STARTUP, CONNECT WITH ENTREPRENEURS
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-4xl mx-auto leading-relaxed">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
            <br />
            <span className="text-secondary">Join the next generation of innovators!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/startup/create" className="btn-primary-glow group">
              Start Pitching
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/startups" className="btn-secondary-glow group">
              Browse Startups
              <Users className="ml-2 size-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="startup-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-black-100">Active Startups</div>
            </div>
            <div className="startup-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-lg font-semibold text-black-100">Entrepreneurs</div>
            </div>
            <div className="startup-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-lg font-semibold text-black-100">Funding Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Competition Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="pitch-card text-center">
            <div className="flex justify-center mb-4">
              <span className="status-live">
                LIVE COMPETITION
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 AI Innovation Challenge 2025
            </h2>
            <p className="text-lg text-black-300 mb-6 max-w-2xl mx-auto">
              Submit your AI-powered startup idea and compete for $100K in prizes. 
              Competition ends in:
            </p>
            <div className="competition-timer mb-6">
              23:45:12 REMAINING
            </div>
            <Link href="/competitions/current" className="btn-primary-glow">
              <Zap className="mr-2 size-5" />
              Join Competition
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-white-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">PitchSpace</span>?
            </h2>
            <p className="text-xl text-black-300 max-w-2xl mx-auto">
              Everything you need to launch, pitch, and grow your startup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="startup-card text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Pitching</h3>
              <p className="text-black-300">
                Create and submit your startup pitch in under 5 minutes with our streamlined process.
              </p>
            </div>

            <div className="startup-card text-center group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="size-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Voting</h3>
              <p className="text-black-300">
                Get real feedback from entrepreneurs, investors, and fellow founders in our community.
              </p>
            </div>

            <div className="startup-card text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Tracking</h3>
              <p className="text-black-300">
                Monitor your startup's progress and see how you rank against other entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}