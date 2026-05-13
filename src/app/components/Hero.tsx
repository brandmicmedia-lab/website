import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import starLogo from 'figma:asset/96f1b5e9168a48270689b6cabfd5529228388471.png';
import brandImg from 'figma:asset/brand-marketing.webp';
export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full shadow-sm">
              <img src={starLogo} alt="" className="w-5 h-5" />
              <span className="text-sm font-semibold text-gray-300 font-[Geist]">Leading Branding Studio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight font-[Sora]">
              We Build Brands
              <span className="block text-[#fe6d12]">With Direction</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-[Geist]">
              Elevate your business with data-driven digital marketing strategies. 
              We combine creativity, technology, and analytics to deliver measurable growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-[#fe6d12] hover:bg-[#e85f00] text-white gap-2 px-8 h-14 text-base"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 px-8 h-14 text-base border-2 border-gray-700 text-[#fe6d12] hover:bg-gray-800"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fe6d12] text-[#fe6d12]" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-300 font-[Geist]">5.0</span>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-sm text-gray-400 font-[Geist]">
                <span className="font-bold text-white">50+</span> Happy Clients
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Cards */}
          <div className="relative">
            <div className="relative">
              <ImageWithFallback
                src={brandImg}
                alt="Professional team meeting"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating Stats Card - Top Right */}
              {/* <Card className="absolute -top-6 -right-6 p-6 bg-gray-800 shadow-xl border-gray-700 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fe6d12]/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#fe6d12]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-[Sora]">50+</div>
                    <div className="text-sm text-gray-400 font-[Geist]">Projects Done</div>
                  </div>
                </div>
              </Card> */}

              {/* Floating Client Card - Bottom Left */}
              {/* <Card className="absolute -top-15  p-6 p-6 bg-gray-800 shadow-xl border-gray-700 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-[Sora]">98%</div>
                    <div className="text-sm text-gray-400 font-[Geist]">Client Satisfaction</div>
                  </div>
                </div>
              </Card> */}

              {/* Experience Badge - Bottom Right */}
              {/* <Card className="absolute bottom-8 right-8 px-6 py-3 bg-[#fe6d12] text-white shadow-xl border-none hidden sm:block">
                <div className="text-center">
                  <div className="text-3xl font-bold font-[Sora]">1+</div>
                  <div className="text-sm font-medium font-[Geist]">Years Experience</div>
                </div>
              </Card> */}
            </div>
          </div>
        </div>

        {/* Client Logos / Trust Section */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wide font-[Geist]">
            Trusted by Leading Companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600 font-[Sora]">COMPANY</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600 font-[Sora]">BRAND</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600 font-[Sora]">STARTUP</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600 font-[Sora]">AGENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}